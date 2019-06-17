export default 1

// import { IUrlResolver } from '@lib/new_wizard/models';
// import { find, maxBy } from '@utils/array_utils';
// import { extractDevice } from '@utils/url_utils';
// import { slugifyLowercasedLink } from '@utils/utils';
// import { PROPOSAL_WIZARD_STEP_NAMES } from './step-names';

// // Repair wizard url: /repair/xxxxxx/step
// export const repairWizardPathnameResolver : IUrlResolver = {
//     getPathname({ pathname }, name, step, { brand, model, color, faults, checkout }) {
//         const base = 'repair'

//         let url = '';
//         switch (step) {
//             case PROPOSAL_WIZARD_STEP_NAMES.PAYMENT: {
//                 return `/${base}/${checkout._id}/payment`
//             }
//             case PROPOSAL_WIZARD_STEP_NAMES.DETAILS:
//             case PROPOSAL_WIZARD_STEP_NAMES.CONTACT_DETAILS:
//             // @ts-ignore: noFallthroughCasesInSwitch
//             case PROPOSAL_WIZARD_STEP_NAMES.QUOTE: {
//                 url = `-color-${slugifyLowercasedLink(color) + url}`
//             }
//             // @ts-ignore: noFallthroughCasesInSwitch
//             case PROPOSAL_WIZARD_STEP_NAMES.COLOR: {
//                 url = `-${slugifyLowercasedLink(faults.join('_')) + url}`
//             }
//             // @ts-ignore: noFallthroughCasesInSwitch
//             case PROPOSAL_WIZARD_STEP_NAMES.FAULTS: {
//                 url = `-${slugifyLowercasedLink(model) + url}`
//             }
//             case PROPOSAL_WIZARD_STEP_NAMES.MODEL: {
//                 url = slugifyLowercasedLink(brand) + url;
//                 break;
//             }
//             case PROPOSAL_WIZARD_STEP_NAMES.BRAND: {
//                 return `/${base}/brand`;
//             }
//             default: {
//                 return base;
//             }
//         }

//         return `/${base}/${url}/${step}`;
//     },
//     parsePathname({ pathname }, name, { repairConfigs, checkout }) {
//         const pathNameParts = pathname.split('/');

//         const isRepairWizardLink = pathname.indexOf("repair") > -1
//         const infoPath = pathNameParts.slice(2).join("/");

//         if (checkout && infoPath.indexOf(PROPOSAL_WIZARD_STEP_NAMES.PAYMENT) !== -1) {
//             return {
//                 name,
//                 step: PROPOSAL_WIZARD_STEP_NAMES.PAYMENT
//             }
//         }

//         if (!infoPath || !isRepairWizardLink) {
//             return {
//             }
//         }

//         if (infoPath === 'brand') {
//             return {
//                 name,
//                 step: PROPOSAL_WIZARD_STEP_NAMES.BRAND
//             }
//         }

//         const brand = extractDevice(infoPath).brand
//         let path = extractDevice(infoPath).path;

//         if (!brand) {
//             return {
//             }
//         }

//         // we should look for longest possible model in url
//         const model = maxBy<any>(
//             Object.keys(repairConfigs[brand])
//                 .filter(m => infoPath.indexOf(slugifyLowercasedLink(brand + '-' + m)) !== -1),
//             m => m.length
//         );
//         if (!model) {
//             return {
//                 name,
//                 step: PROPOSAL_WIZARD_STEP_NAMES.MODEL,
//                 data: {
//                     brand
//                 }
//             }
//         }
//         path = path.replace(slugifyLowercasedLink(model), '');

//         const firstColor = Object.keys(repairConfigs[brand][model])[0]
//         const allFaults = Object.keys(repairConfigs[brand][model][firstColor])
//         const faults = []
//         allFaults.forEach(f => {
//             if (path.indexOf(slugifyLowercasedLink(f)) !== -1) {
//                 faults.push(f)
//                 path.replace(slugifyLowercasedLink(f), '')
//             }
//         })
//         if (!faults.length) {
//             return {
//                 name,
//                 step: PROPOSAL_WIZARD_STEP_NAMES.FAULTS,
//                 data: {
//                     brand,
//                     model
//                 }
//             }
//         }

//         const color = find(Object.keys(repairConfigs[brand][model]), c => path.indexOf('-color-' + slugifyLowercasedLink(c)) !== -1);
//         if (!color) {
//             return {
//                 name,
//                 step: PROPOSAL_WIZARD_STEP_NAMES.COLOR,
//                 data: {
//                     brand,
//                     model,
//                     faults
//                 }
//             }
//         }
//         path = path.replace(slugifyLowercasedLink(color), '');

//         return {
//             name,
//             step: path.split('/')[1],
//             data: {
//                 brand,
//                 model,
//                 color,
//                 faults
//             }
//         }
//     }
// };
