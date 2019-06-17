// import { addComponentCSS } from '@utils/css_styler'
import { noop } from 'lodash'
import * as React from 'react'
// import { connect } from 'react-redux'

import { STATE_MACHINE } from './helpers'
import { Step } from './Step'

// addComponentCSS({
//     //language=CSS
//     default: `
//         .pz-wizard {
//             min-width: 280px;
//             overflow: hidden; /* Avoid component horizontal overflow on step slide animation */
//         }

//         .pz-wizard__navigate-back {
//             text-align: center;
//             display: block;
//             margin: 10px 0;
//             text-decoration: none;
//             cursor: pointer;
//         }

//         .pz-wizard .wz-step__title {
//             font-size: 18px;
//             font-weight: 500;
//             line-height: 22px;
//             color: #2F2B64; color: var(--color-primary);
//             margin: 20px 0 30px 0;
//         }

//         .pz-wizard .wz-option {
//             border-color: #A8A5BE;
//         }
//     `,
//     //language=CSS
//     smMin: `
//         .pz-wizard .wz-step__title {
//             font-size: 26px;
//             line-height: 35px;
//             color: #2F2B64; color: var(--color-primary);
//             margin: 60px 0;
//             font-weight: 600;
//         }
//     `
// });

interface IWizardProps {
    name:               string // wizard name. used to get info from redux if needed

    externalData?:      Object // data for wizard prepopulation or external data from other stores
    handlers?:          Object // handler functions

    step:        string // step from react router params
    startAt:     string // config to the wizard know which step should be default

    stateMachine: any   // all state transition logic,
                        // which component to render,
                        // what to preload before next step and
                        // which info is relevant from the global wizard data

    data: {step: string, data: any}

    getDataFromState?: (state: any) => Object

    updateWizardInfo: (step: string, data: any, params?: {shouldUpdateUrl?: boolean}) => void // call to redux for storing most recent wizard step
    updateWizardData: (data: any) => void
    onWizardComplete: (data: any) => void // something that should be done after wizard complete.
                                           // should be used only for actions that should be done with assumption that this wizard is the last in the chain
                                           // if you expect the wizard to be the part of bigger wizard => put specific action into the last step of the state machineResolver
    changeStepTitle?: (title: string | JSX.Element) => void
    onStepChange:    (step: string) => void
}

interface IWizardState {
}

/**
 *
 * Removes double slashes in pathname. Starting urls can ends with slash, thus getPathname can
 * return invalid pathname with double shashes
 *
 */
export function fixPathname(pathname: string) {
	return pathname.replace('//', '/')
}

/**
 * Wizard Component
 *
 * Wizard component is responsible for rendering the navigation, slider and the step
 */
export class NewWizard extends React.Component<IWizardProps, IWizardState> {

    static defaultProps: Partial<IWizardProps> = {
        onWizardComplete: noop,
        changeStepTitle:  noop,
        onStepChange:     noop,
    };

    constructor(props: IWizardProps, state: IWizardState) {
        super(props, state);
        const { stateMachine, step, data, handlers } = props;
        stateMachine[step].prepare(data, handlers)
            .then((preparedData: any) => {
                this.props.updateWizardData({
                    ...data,
                    ...preparedData
                })
            })
    }

    /**
     * Update state with data selected by user
     *
     * @param {Object} [selectedData]
     * @memberof NewWizard
     */
    public onDone(selectedData?: any): void {
        const { stateMachine, handlers, step, onStepChange } = this.props;
        const updatedData = {
            ...this.props.data,
            ...selectedData
        }
        const nextStep = stateMachine[step].goNext(updatedData);
        if (nextStep !== STATE_MACHINE.TERMINATE) {
            stateMachine[step].finish(updatedData, handlers)
                .then((newDataFromFinish: any) => {
                    return stateMachine[nextStep].prepare({...updatedData, ...newDataFromFinish}, handlers)
                        .then((preparedData: any) => {
                            this.props.updateWizardInfo(nextStep, {
                                ...updatedData,
                                ...newDataFromFinish,
                                ...preparedData
                            })
                        })
                })
        } else {
            this.props.onWizardComplete(selectedData.result)
        }

        onStepChange(step);
    }

    private onGoBack() {
        const { data, stateMachine, step, } = this.props;
        const prevStep = stateMachine[step].goBack(data)

        if (prevStep !== STATE_MACHINE.START) {
            this.props.updateWizardInfo(prevStep, data)
        }
    }

    /**
     * Renders the specified step component. Because the step data fetching is asynchronous,
     * it might render a temporary 'loading...' message if the fetch takes too long.
     * @param step string - Zero based index of the step component to render
     */
    private renderWizardStep(step: string): JSX.Element {
        const { data, stateMachine, handlers } = this.props
        return (
            <Step
                title={stateMachine[step].getTitle(data)}
                stepIndex={stateMachine[step].getStepIndex(0)}
            >
                {stateMachine[step].getComponent(
                    data, {
                        ...handlers,
                        onDone:          this.onDone.bind(this),
                        onGoBack:        this.onGoBack.bind(this),
                        changeStepTitle: this.props.changeStepTitle
                    }
                )}
            </Step>
        )
    }

    public render(): JSX.Element {
        return (
            <div className="pz-wizard">
                {this.renderWizardStep(this.props.step)}
            </div>
        );
    }
}

// function mapStateToProps(state: any, ownProps: any): any {
//     if (state.wizardStore === undefined) {
//         console.warn('There is no wizard store available. Please check it out')
//     }
//     return {
//         data: {
//             // Note: Need to be merged in the following order (externalDta first) so the user that the details step
//             // provides doesn't get overwritten by external data user
//             ...ownProps.externalData,
//             ...(ownProps.getDataFromState || (state => ({})))(state),
//             ...get(state, x => x.wizardStore[ownProps.name].data, {}),
//         },
//         step: get(state, x => x.wizardStore[ownProps.name].step, ownProps.startAt)
//     }
// }

// function mapDispatchToProps(dispatch, ownProps: any): any {
//     return {
//         updateWizardInfo: (step, data, { shouldUpdateUrl = true } = { shouldUpdateUrl: true }) => {
//             return dispatch(updateWizardCurrentStep({
//                 step,
//                 data,
//                 wizard: ownProps.name,
//                 shouldUpdateUrl
//             }))
//         },

//         updateWizardData: data => {
//             return dispatch(updateWizardData({
//                 data,
//                 wizard: ownProps.name
//             }))
//         }
//     }
// }

// export const NewWizardFromStore = connect(
//     mapStateToProps, mapDispatchToProps
// )(NewWizard);
