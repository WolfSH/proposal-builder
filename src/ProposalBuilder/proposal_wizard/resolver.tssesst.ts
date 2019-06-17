export default 1
// import { repairWizardPathnameResolver } from './resolver';
// import { PROPOSAL_WIZARD_STEP_NAMES } from './step-names';

// const data = {
//     brand:  'iPhone',
//     model:  'X',
//     color:  'Black',
//     faults: [
//         "Cracked Screen",
//         "Not Charging"
//     ],
//     checkout: {_id: 'checkoutid'}
// }

// const repairConfigs = {
//     'iPhone': {
//         'X': {
//             'Black': {
//                 "Cracked Screen": null,
//                 "Not Charging":   null
//             }
//         }
//     },
//     'Samsung': {
//         'S8': {
//             'Black': {
//                 "Cracked Screen": null,
//                 "Not Charging":   null
//             }
//         },
//         'S8+': {
//             'Black': {
//                 "Cracked Screen": null,
//                 "Not Charging":   null
//             }
//         }
//     }
// }

// describe('repair wizard pathname resolver', () => {
//     const urls = {
//         [PROPOSAL_WIZARD_STEP_NAMES.PAYMENT]:         '/repair/checkoutid/payment',
//         [PROPOSAL_WIZARD_STEP_NAMES.DETAILS]:         '/repair/iphone-x-cracked-screen_not-charging-color-black/details',
//         [PROPOSAL_WIZARD_STEP_NAMES.CONTACT_DETAILS]: '/repair/iphone-x-cracked-screen_not-charging-color-black/contact-details',
//         [PROPOSAL_WIZARD_STEP_NAMES.QUOTE]:           '/repair/iphone-x-cracked-screen_not-charging-color-black/quote',
//         [PROPOSAL_WIZARD_STEP_NAMES.COLOR]:           '/repair/iphone-x-cracked-screen_not-charging/color',
//         [PROPOSAL_WIZARD_STEP_NAMES.FAULTS]:          '/repair/iphone-x/faults',
//         [PROPOSAL_WIZARD_STEP_NAMES.MODEL]:           '/repair/iphone/model',
//         [PROPOSAL_WIZARD_STEP_NAMES.BRAND]:           '/repair/brand',
//         'default':                                  '/repair'
//     }
//     describe('getPathname', () => {
//         it('should return correct url base on device, model, color and brand', () => {
//             Object.keys(PROPOSAL_WIZARD_STEP_NAMES).map(k => PROPOSAL_WIZARD_STEP_NAMES[k]).forEach(step => {
//                 expect(repairWizardPathnameResolver.getPathname({pathname: 'pathname'}, 'repair', step, data))
//                     .toEqual(urls[step])
//             })
//         })
//     })

//     describe('parsePathname', () => {
//         Object.keys(PROPOSAL_WIZARD_STEP_NAMES).map(k => PROPOSAL_WIZARD_STEP_NAMES[k]).forEach(step => {
//             switch(step) {
//                 case PROPOSAL_WIZARD_STEP_NAMES.PAYMENT: {
//                     it('should parse pathname on payment step', () => {
//                         expect(
//                             repairWizardPathnameResolver.parsePathname(
//                                 {
//                                     pathname: '/repair/checkoutid/payment'
//                                 },
//                                 'repair',
//                                 {
//                                     repairConfigs, checkout: {_id: 'checkoutId'}
//                                 }
//                             )
//                         )
//                         .toEqual({
//                             name: 'repair',
//                             step
//                         })
//                     })
//                     break;
//                 }
//                 case PROPOSAL_WIZARD_STEP_NAMES.BRAND: {
//                     it('should parse pathname on brand step', () => {
//                         expect(
//                             repairWizardPathnameResolver.parsePathname(
//                                 {
//                                     pathname: '/repair/brand'
//                                 },
//                                 'repair',
//                                 {
//                                     repairConfigs
//                                 }
//                             )
//                         )
//                         .toEqual({
//                             name: 'repair',
//                             step
//                         })
//                     })
//                     break;
//                 }
//                 case PROPOSAL_WIZARD_STEP_NAMES.MODEL: {
//                     it('should parse pathname on brand step', () => {
//                         expect(
//                             repairWizardPathnameResolver.parsePathname(
//                                 {
//                                     pathname: '/repair/iphone/model'
//                                 },
//                                 'repair',
//                                 {
//                                     repairConfigs
//                                 }
//                             )
//                         )
//                         .toEqual({
//                             name: 'repair',
//                             step,
//                             data: {
//                                 brand: 'iPhone'
//                             }
//                         })
//                     })
//                     break;
//                 }
//                 case PROPOSAL_WIZARD_STEP_NAMES.FAULTS: {
//                     it('should parse pathname on faults step', () => {
//                         expect(
//                             repairWizardPathnameResolver.parsePathname(
//                                 {
//                                     pathname: '/repair/iphone-x/faults'
//                                 },
//                                 'repair',
//                                 {
//                                     repairConfigs
//                                 }
//                             )
//                         )
//                         .toEqual({
//                             name: 'repair',
//                             step,
//                             data: {
//                                 brand: 'iPhone',
//                                 model: 'X',
//                             }
//                         })
//                     })
//                     break;
//                 }
//                 case PROPOSAL_WIZARD_STEP_NAMES.COLOR: {
//                     it('should parse pathname on color step with multiple faults', () => {
//                         expect(
//                             repairWizardPathnameResolver.parsePathname(
//                                 {
//                                     pathname: '/repair/iphone-x-cracked-screen_not-charging/color'
//                                 },
//                                 'repair',
//                                 {
//                                     repairConfigs
//                                 })
//                         )
//                         .toEqual({
//                             name: 'repair',
//                             step,
//                             data: {
//                                 brand: 'iPhone',
//                                 model: 'X',
//                                 faults: ['Cracked Screen', 'Not Charging']
//                             }
//                         })
//                     })
//                     it('should parse pathname on color step with single fault', () => {
//                         expect(
//                             repairWizardPathnameResolver.parsePathname(
//                                 {
//                                     pathname: '/repair/iphone-x-cracked-screen/color'
//                                 },
//                                 'repair',
//                                 {
//                                     repairConfigs
//                                 })
//                         )
//                         .toEqual({
//                             name: 'repair',
//                             step,
//                             data: {
//                                 brand: 'iPhone',
//                                 model: 'X',
//                                 faults: ['Cracked Screen']
//                             }
//                         })
//                     })
//                     break;
//                 }
//                 case 'default': {
//                     it('should parse pathname on default step', () => {
//                         expect(repairWizardPathnameResolver.parsePathname({pathname: '/repair'}, 'repair', {repairConfigs}))
//                         .toEqual({
//                             name: 'repair',
//                             step: PROPOSAL_WIZARD_STEP_NAMES.BRAND
//                         })
//                     })
//                     break;
//                 }
//                 default: {
//                     it('should parse pathname on other steps', () => {
//                         expect(repairWizardPathnameResolver.parsePathname({pathname: urls[step]}, 'repair', {repairConfigs}))
//                         .toEqual({
//                             name: 'repair',
//                             step,
//                             data: {
//                                 brand: 'iPhone',
//                                 model: 'X',
//                                 color: 'Black',
//                                 faults: ['Cracked Screen', 'Not Charging']
//                             }
//                         })
//                     })
//                 }
//             }
//         })
//     })
// })