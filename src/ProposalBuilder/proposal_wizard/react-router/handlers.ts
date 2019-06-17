export default 1
// import { getPublicStore } from "@redux/public_site/store";
// import { updateWizardCurrentStep } from "@lib/new_wizard/wizard/wizard_action_creators";
// import { PROPOSAL_WIZARD_STEP_NAMES } from "../step-names";
// import { repairWizardPathnameResolver } from "../resolver";
// import { getReachableStep } from "../utils";

// export function updateRepairWizardFromUrl(shouldPrepareStep: boolean = false) {
//     const repairWizardState = getPublicStore().getState().wizardStore.repair;

//     let nextStep;
//     const stepFromUrl = repairWizardPathnameResolver.parsePathname(window.location, 'repair', repairWizardState.data);
//     const initialStep = {
//         step: PROPOSAL_WIZARD_STEP_NAMES.BRAND,
//         data: {}
//     };

//     // If the url is not valid then we show the initial step
//     nextStep = stepFromUrl && stepFromUrl.step ? stepFromUrl : initialStep;

//     if (shouldPrepareStep) {

//         // Pass to the prepare step the data from store + the ones we got from the url
//         const updatedData = {
//             ...repairWizardState.data,
//             ...nextStep.data
//         };

//         const nextReachableStep = getReachableStep({step: nextStep.step, data: updatedData});

//         getPublicStore().dispatch(updateWizardCurrentStep({
//             wizard: 'repair',
//             step: nextReachableStep,
//             data: {...nextStep.data || {},},
//             shouldUpdateUrl: false
//         }));

//     } else {
//         // Note: We can not use the reachable step here because the url doesn't contain user info so it would always
//         // take us to the user step
//         getPublicStore().dispatch(updateWizardCurrentStep({
//             wizard: 'repair',
//             step: nextStep.step,
//             data: nextStep.data,
//             shouldUpdateUrl: false
//         }));
//     }
// }
