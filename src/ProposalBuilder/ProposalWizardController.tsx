// import { addComponentCSS } from '@utils/css_styler'
import { Grid, Typography } from '@material-ui/core'
import { noop } from 'lodash'
import * as React from 'react'

import { NewWizard } from '../wizard/Wizard'
import { proposalStateMachine } from './proposal_wizard/repair_wizard_config'
import { PROPOSAL_WIZARD_STEP_NAMES } from './proposal_wizard/step-names'
import { TextOption } from './steps/components/TextOption'

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
                    <Grid item xs={8}>
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
                    <Grid item xs={4}>
                        <TextOption>
                            <React.Fragment>
                                {
                                    this.state.data.greeting &&
                                    <Typography component="p">
                                        {this.state.data.greeting}
                                        <br />
                                    </Typography>
                                }
                                {
                                    this.state.data.question &&
                                    <Typography component="p">
                                        {this.state.data.question}
                                        <br />
                                    </Typography>
                                }
                                {
                                    this.state.data.confidence &&
                                    <Typography component="p">
                                        {this.state.data.confidence}
                                        <br />
                                    </Typography>
                                }
                                {
                                    this.state.data.skills &&
                                    <Typography component="p">
                                        {
                                            this.state.data.skills
                                                .map((x: {label: string}, i: number) =>
                                                    <span>
                                                        {i + 1}) {x.label}
                                                        <br />
                                                    </span>
                                                )
                                        }
                                    </Typography>
                                }
                                {
                                    this.state.data.thanks &&
                                    <Typography component="p">
                                        {this.state.data.thanks}
                                        <br />
                                        Igor Shybyryn
                                    </Typography>
                                }
                            </React.Fragment>
                        </TextOption>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
