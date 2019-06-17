export default 1
// import { IDiagnoseWizard } from '../../../components/diagnose_wizard/models';
// import { ICheckoutStateMachineData } from '../../../components/checkout_wizard/models';
// import {createReducer} from '@lib/redux_utils/reducers';
// import { WIZARD__CHANGE_CURRENT_STEP, WIZARD__RESET_DATA, WIZARD__UPDATE_DATA } from '@lib/new_wizard/wizard/wizard_actions';
// import {getInSafe} from '@utils/object_utils';
// import {ISellStateMachineData} from "../../../components/sell_wizard/models";
// import {IBuyStateMachineData} from "../../../components/buy_wizard/models";
// import { CHECKOUT_WIZARD_STEP_NAMES } from '../../../components/checkout_wizard/steps/step-names';
// import { SELL_WIZARD_STEP_NAMES } from '../../../components/sell_wizard/step-names';
// import { BUY_WIZARD_STEP_NAMES } from '../../../components/buy_wizard/step-names';
// import { PROPOSAL_WIZARD_STEP_NAMES } from '../../../components/repair_wizard/step-names';
// import { IRepairStateMachineData } from '../../../components/repair_wizard/models';
// import { IInsuranceStateMachineData } from '../../../components/insurance_wizard/models';
// import { INSURANCE_WIZARD_STEP_NAMES } from '../../../components/insurance_wizard/step-names';
// import { IClaimWizard } from "../../../components/claim_wizard/models";
// import { EClaimWizardSteps } from "../../../components/claim_wizard/step-names";
// import { EDiagnoseWizardSteps } from '../../../components/diagnose_wizard/step-names';
// import { EScanWizardSteps } from '../../../components/scan_wizard/step-names';
// import { EWarrantyWizardSteps } from '../../../components/warranty_wizard/step-names';
// import { IWarrantyWizard } from '../../../components/warranty_wizard/models';

// export interface IWizardState<D> {
//     step: string
//     data: Partial<D>
// }

// export interface IWizardModelState {
//     sell:      IWizardState<ISellStateMachineData>
//     buy:       IWizardState<IBuyStateMachineData>
//     checkout:  IWizardState<ICheckoutStateMachineData>
//     repair:    IWizardState<IRepairStateMachineData>
//     insurance: IWizardState<IInsuranceStateMachineData>
//     claim:     IWizardState<IClaimWizard.IWizardState>
//     diagnose:  IWizardState<IDiagnoseWizard.IWizardState>
//     scan:      IWizardState<IDiagnoseWizard.IWizardState>
//     warranty:  IWizardState<IWarrantyWizard.IWizardState>
// }

// const initialState: IWizardModelState = {
//     sell: {
//         step: SELL_WIZARD_STEP_NAMES.DEVICE,
//         data: {}
//     },
//     buy: {
//         step: BUY_WIZARD_STEP_NAMES.DEVICE,
//         data: {}
//     },
//     checkout: {
//         step: CHECKOUT_WIZARD_STEP_NAMES.CONTACT,
//         data: {}
//     },
//     repair: {
//         step: PROPOSAL_WIZARD_STEP_NAMES.BRAND,
//         data: {}
//     },
//     insurance: {
//         step: INSURANCE_WIZARD_STEP_NAMES.BRAND,
//         data: {}
//     },
//     claim: {
//         step: EClaimWizardSteps.CLAIM,
//         data: {}
//     },
//     diagnose: {
//         step: EDiagnoseWizardSteps.IMEI,
//         data: {}
//     },
//     scan: {
//         step: EScanWizardSteps.FRONT_PHOTO,
//         data: {}
//     },
//     warranty: {
//         step: EWarrantyWizardSteps.WARRANTY_CODE,
//         data: {}
//     }
// };

// export const wizardReducer = createReducer<IWizardModelState>(initialState, [
//     // Change wizard step
//     {
//         action: WIZARD__CHANGE_CURRENT_STEP,
//         handler: (state: IWizardModelState, action: WIZARD__CHANGE_CURRENT_STEP) => {
//             return {
//                 ...state,
//                 [action.wizard]: {
//                     ...state[action.wizard],
//                     step: action.step || state[action.wizard].step,
//                     data: {
//                         ...getInSafe(state, x => x[action.wizard].data, {}),
//                         ...action.data
//                     }
//                 }
//             }
//         }
//     },
//     {
//         action: WIZARD__UPDATE_DATA,
//         handler: (state: IWizardModelState, action: WIZARD__UPDATE_DATA) => {
//             return {
//                 ...state,
//                 [action.wizard]: {
//                     ...state[action.wizard],
//                     data: {
//                         ...getInSafe(state, x => x[action.wizard].data, {}),
//                         ...action.data
//                     }
//                 }
//             }
//         }
//     },
//     // Reset wizard data & change step
//     {
//         action: WIZARD__RESET_DATA,
//         handler: (state: IWizardModelState, action: WIZARD__RESET_DATA) => {
//             return {
//                 ...state,
//                 [action.wizard]: {
//                     ...state[action.wizard],
//                     step: action.step,
//                     data: action.data
//                 }
//             }
//         }
//     }
// ]);
