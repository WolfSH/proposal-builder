// import {createAction} from '../../redux_utils/actions';
import {
    WIZARD__CHANGE_CURRENT_STEP, WIZARD__RESET_DATA, WIZARD__UPDATE_DATA
} from './wizard_actions';

export interface IWizardData {
    wizard          : string
    data            : any
    shouldUpdateUrl?: boolean
}

export interface IWizardTransition extends IWizardData {
    step: string
}

/** Get a sell ticket history entries */
// export function updateWizardCurrentStep(transitionData: IWizardTransition) {
//     return dispatch => {
//         dispatch(createAction(WIZARD__CHANGE_CURRENT_STEP.type, transitionData))
//     }
// }

// export function updateWizardData(data: IWizardData) {
//     return dispatch => {
//         dispatch(createAction(WIZARD__UPDATE_DATA.type, data))
//     }
// }

// export function resetWizard(resetData: IWizardTransition) {
//     return dispatch => {
//         dispatch(createAction(WIZARD__RESET_DATA.type, resetData))
//     }
// }
