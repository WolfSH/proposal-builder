import { IWizardTransition, IWizardData } from './wizard_action_creators'

export module WIZARD__CHANGE_CURRENT_STEP {
    export var type = 'WIZARD__CHANGE_CURRENT_STEP';
}

export interface WIZARD__CHANGE_CURRENT_STEP extends IWizardTransition {}

export module WIZARD__RESET_DATA {
    export var type = 'WIZARD__RESET_DATA';
}

export interface WIZARD__RESET_DATA {
    wizard: string
    step:   string
    data:   any
}

export module WIZARD__UPDATE_DATA {
    export var type = 'WIZARD__UPDATE_DATA';
}

export interface WIZARD__UPDATE_DATA extends IWizardData {}
