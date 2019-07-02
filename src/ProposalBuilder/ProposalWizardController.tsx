// import { addComponentCSS } from '@utils/css_styler'
import { Grid, Typography } from '@material-ui/core'
import { noop } from 'lodash'
import * as React from 'react'

import { NewWizard } from '../wizard/Wizard'
import { proposalStateMachine } from './proposal_wizard/repair_wizard_config'
import { PROPOSAL_WIZARD_STEP_NAMES } from './proposal_wizard/step-names'
import { TextOption } from './steps/components/TextOption'
import { getProposalText } from '../utils';

interface IProps {
}

interface IState {
}

export class ProposalWizardController extends React.Component<IProps, IState> {
    static defaultProps: Partial<IProps> = {
        onStepChange: noop
    };

    state: any = {
        step: PROPOSAL_WIZARD_STEP_NAMES.GREETING,
        data: {}
    }

    onStepChange() {
        window.scrollTo(0, 0);
    }

    updateWizardData = (data: any) => {
        this.setState({
            data: {
                ...this.state.data,
                ...data
            }
        })
    }

    updateWizardInfo = (step: string, data: any) => {
        this.setState({
            step,
            data: {
                ...this.state.data,
                ...data
            }
        })
    }

    public render(): JSX.Element {
        const externalData = {
        };

        const handlers = {
        };

        return (
            <div className="pt-repair-wizard-controller">
                <Grid container spacing={3}>
                    <Grid item xs={7}>
                        <NewWizard
                            name={'repair'}
                            stateMachine={proposalStateMachine}
                            startAt={PROPOSAL_WIZARD_STEP_NAMES.GREETING}
                            step={this.state.step}
                            data={this.state.data}
                            updateWizardData={this.updateWizardData}
                            updateWizardInfo={this.updateWizardInfo}
                            externalData={externalData}
                            handlers={handlers}
                            onStepChange={this.onStepChange}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <Typography variant="h5" component="h3">
                            Preview
                        </Typography>
                        <TextOption>
                            <Typography component="p">
                                <pre style={{
                                    fontFamily: 'inherit',
                                    whiteSpace: 'pre-wrap'
                                }}>
                                    {getProposalText(this.state.data)}
                                </pre>
                            </Typography>
                        </TextOption>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
