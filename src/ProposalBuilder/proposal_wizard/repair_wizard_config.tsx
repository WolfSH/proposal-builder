import { PROPOSAL_WIZARD_STEP_NAMES } from './step-names';
import { greetingStep } from './steps/greeting';
import { questionStep } from './steps/question';
import { confidenceStep } from './steps/confidence';
import { skillsStep } from './steps/skills';
import { thanksStep } from './steps/thanks';
import { finishStep } from './steps/finish';
import { IWizardStep } from '../../wizard/models';
import { roleStep } from './steps/role';

export interface IDictionary<T> {
    [key: string]: T
}

export const proposalNavigationSteps = {
    [PROPOSAL_WIZARD_STEP_NAMES.GREETING]: {
        getValue: ({}) => 'GREETING',
        getLabel: () => 'GREETING',
        getIndex: () => 0
    },
    [PROPOSAL_WIZARD_STEP_NAMES.QUESTION]: {
        getValue: ({}) => 'QUESTION',
        getLabel: () => 'QUESTION',
        getIndex: () => 1
    },
    [PROPOSAL_WIZARD_STEP_NAMES.CONFIDENCE]: {
        getValue: ({}) => 'CONFIDENCE',
        getLabel: () => 'CONFIDENCE',
        getIndex: () => 2
    },
    [PROPOSAL_WIZARD_STEP_NAMES.ROLE]: {
        getValue: ({}) => 'ROLE',
        getLabel: () => 'ROLE',
        getIndex: () => 3
    },
    [PROPOSAL_WIZARD_STEP_NAMES.SKILLS]: {
        getValue: ({  }) => 'SKILLS',
        getLabel: () => 'SKILLS',
        getIndex: () => 4
    },
    [PROPOSAL_WIZARD_STEP_NAMES.THANKS]: {
        getValue: ({  }) => 'THANKS',
        getLabel: () => 'THANKS',
        getIndex: () => 5
    },
    [PROPOSAL_WIZARD_STEP_NAMES.FINISH]: {
        getValue: ({  }) => 'FINISH',
        getLabel: () => 'FINISH',
        getIndex: () => 6
    }
}

export const proposalStateMachine: IDictionary<IWizardStep<any, any>> = {
    [PROPOSAL_WIZARD_STEP_NAMES.GREETING]:   greetingStep,
    [PROPOSAL_WIZARD_STEP_NAMES.QUESTION]:   questionStep    ,
    [PROPOSAL_WIZARD_STEP_NAMES.CONFIDENCE]: confidenceStep,
    [PROPOSAL_WIZARD_STEP_NAMES.ROLE]:       roleStep,
    [PROPOSAL_WIZARD_STEP_NAMES.SKILLS]:     skillsStep,
    [PROPOSAL_WIZARD_STEP_NAMES.THANKS]:     thanksStep,
    [PROPOSAL_WIZARD_STEP_NAMES.FINISH]:     finishStep,
}
