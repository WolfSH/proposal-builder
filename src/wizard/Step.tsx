import * as React from 'react';
// import { addComponentCSS } from '@utils/css_styler';
// import {renderDefined} from '@utils/react_utils';

// addComponentCSS({
//     //language=CSS
//     default: `
//         .wz-step {
//             position: relative;
//             margin: 0 auto;
//             overflow: hidden;
//         }

//         .wz-step__title {
//             text-align: center;
//         }
//     `
// });

// CSS to position element towards the left of the screen (-20%)
const LEFT_TO_RIGHT_STYLES: React.CSSProperties = {
    opacity: 0,
    left: '0'
};

// CSS to position element towards the right of the screen (+20%)
const RIGHT_TO_LEFT_STYLES: React.CSSProperties = {
    opacity: 0,
    left: '20%'
};

// CSS styles to animate element from position (-20%|+20%) to position 0 (center)
const TRANSITION_POSITION_STYLES: React.CSSProperties = {
    opacity: 1,
    left: 0,
    WebkitTransition: 'all 0.15s ease-in-out',
};

export interface IStepProps {
    stepIndex: number   // Step index in which this step is rendered in the Wizard.
                        // Useful for applying CSS transition classes
    title?   : string   // Component title (if any)
}

/**
 * Step Component
 *
 * The step component is responsible for rendering the step title
 * and the component defined in its configuration
 */
export class Step extends React.Component<IStepProps, any> {

    // Save reference to transition timeout ID such that it can be
    // cleansed when component is unmounted
    transitionTimeoutID: any = -1;

    /**
     * Determine what initial styles should the element have in order to apply
     * correct transition direction afterwards
     * @param {currentStepIndex} number - Current step index being rendered
     * @param {incomingStepIndex} number - Step index to be rendered next
     * @returns {React.CSSProperties}
     */
    static getInitialTransitionStyles(currentStepIndex: number, incomingStepIndex: number = 0): React.CSSProperties {
        return incomingStepIndex < currentStepIndex ? LEFT_TO_RIGHT_STYLES : RIGHT_TO_LEFT_STYLES;
    }

    public constructor(props: IStepProps, context?: any) {
        super(props, context);
        this.state = {
            inlineStyles: Step.getInitialTransitionStyles(props.stepIndex)
        };
    }

    public componentWillUnmount(): void {
        // Clear transition timeout to avoid setting state after component has been unmounted
        clearTimeout(this.transitionTimeoutID);
    }

    // Apply transition as soon as this component is mounted
    public componentDidMount(): void {
        this.applyTransition();
    }

    // Apply transition after this component has received new props
    public componentWillReceiveProps(nextProps: IStepProps): void {
        const currStepIndex: number = this.props.stepIndex;
        const incomingStepIndex: number = nextProps.stepIndex;
        if (incomingStepIndex !==  currStepIndex) {
            this.setState({
                inlineStyles: Step.getInitialTransitionStyles(currStepIndex, incomingStepIndex)
            }, () => this.applyTransition());
        }
    }

    // Applies transition CSS styles to component to produce sliding effect
    private applyTransition(): void {
        // Delay state change such that previous state change has time to render
        // and the CSS animation can take effect
        this.transitionTimeoutID = setTimeout(() => {
            this.setState({ inlineStyles: TRANSITION_POSITION_STYLES });
        }, 1);
    }

    public render(): JSX.Element {
        const {title} = this.props;
        const {inlineStyles} = this.state;
        return(
            <div style={inlineStyles} className="wz-step">
                {
                    title &&
                    <h2 className="wz-step__title">
                        {title}
                    </h2>
                }
                {this.props.children}
            </div>
        );
    }
}
