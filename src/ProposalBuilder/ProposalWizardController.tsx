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
                            <React.Fragment>
                                {
                                    this.state.data.firstLine &&
                                    <Typography component="p">
                                        {this.state.data.firstLine}
                                        <br />
                                    </Typography>
                                }
                                {
                                    this.state.data.greeting &&
                                    <Typography component="p">
                                        {this.state.data.greeting}
                                        <br />
                                        <br />
                                    </Typography>
                                }
                                {
                                    this.state.data.question &&
                                    <Typography component="p">
                                        {this.state.data.question}
                                        <br />
                                        <br />
                                    </Typography>
                                }
                                {
                                    this.state.data.confidence &&
                                    <Typography component="p">
                                        {this.state.data.confidence}
                                        <br />
                                        <br />
                                    </Typography>
                                }
                                {
                                    this.state.data.skills &&
                                    <Typography component="p">
                                        I'm a senior front-end engineer and I'm using the next technologies:
                                        <br />
                                        {
                                            this.state.data.skills
                                                .map((x: {label: string}, i: number) =>
                                                    <span>
                                                        {i + 1}) {x.label}
                                                        <br />
                                                    </span>
                                                )
                                        }
                                        <br />
                                    </Typography>
                                }
                                {
                                    this.state.data.thanks &&
                                    <Typography component="p">
                                        {this.state.data.thanks}
                                        <br />
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
