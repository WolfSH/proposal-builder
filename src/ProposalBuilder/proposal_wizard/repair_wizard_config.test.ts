export default 1
// import { proposalStateMachine } from './repair_wizard_config';
// import { REPAIR_WIZARD_STEP_NAMES as STEPS } from './step-names';

// describe('repair state machine', () => {
//     describe('goNext', () => {
//         it(`should navigate from ${STEPS.BRAND} to ${STEPS.MODEL} step`, () => {
//             expect(proposalStateMachine[STEPS.BRAND].goNext()).toEqual(STEPS.MODEL)
//         })
//         it(`should navigate from ${STEPS.MODEL} to ${STEPS.FAULTS} step`, () => {
//             expect(proposalStateMachine[STEPS.MODEL].goNext()).toEqual(STEPS.FAULTS)
//         })
//         it(`should navigate from ${STEPS.FAULTS} to ${STEPS.COLOR} step`, () => {
//             expect(proposalStateMachine[STEPS.FAULTS].goNext()).toEqual(STEPS.COLOR)
//         })
//         it(`should navigate from ${STEPS.COLOR} to ${STEPS.CONTACT_DETAILS} step if no user`, () => {
//             expect(proposalStateMachine[STEPS.COLOR].goNext({})).toEqual(STEPS.CONTACT_DETAILS)
//         })
//         it(`should navigate from ${STEPS.COLOR} to ${STEPS.QUOTE} step if user`, () => {
//             expect(proposalStateMachine[STEPS.COLOR].goNext({user: {}})).toEqual(STEPS.QUOTE)
//         })
//         it(`should navigate from ${STEPS.CONTACT_DETAILS} to ${STEPS.QUOTE}`, () => {
//             expect(proposalStateMachine[STEPS.CONTACT_DETAILS].goNext()).toEqual(STEPS.QUOTE)
//         })
//         it(`should navigate from ${STEPS.QUOTE} to ${STEPS.DETAILS} step`, () => {
//             expect(proposalStateMachine[STEPS.QUOTE].goNext()).toEqual(STEPS.DETAILS)
//         })
//         it(`should navigate from ${STEPS.DETAILS} to ${STEPS.PAYMENT} step`, () => {
//             expect(proposalStateMachine[STEPS.DETAILS].goNext()).toEqual(STEPS.PAYMENT)
//         })
//     })

//     describe('goBack', () => {
//         it(`should navigate from ${STEPS.MODEL} back to ${STEPS.BRAND} step`, () => {
//             expect(proposalStateMachine[STEPS.MODEL].goBack()).toEqual(STEPS.BRAND)
//         })
//         it(`should navigate from ${STEPS.FAULTS} back to ${STEPS.MODEL} step`, () => {
//             expect(proposalStateMachine[STEPS.FAULTS].goBack()).toEqual(STEPS.MODEL)
//         })
//         it(`should navigate from ${STEPS.COLOR} back to ${STEPS.FAULTS} step`, () => {
//             expect(proposalStateMachine[STEPS.COLOR].goBack()).toEqual(STEPS.FAULTS)
//         })
//         it(`should navigate from ${STEPS.CONTACT_DETAILS} back to ${STEPS.COLOR}`, () => {
//             expect(proposalStateMachine[STEPS.CONTACT_DETAILS].goBack()).toEqual(STEPS.COLOR)
//         })
//         it(`should navigate from ${STEPS.QUOTE} back to ${STEPS.CONTACT_DETAILS} step`, () => {
//             expect(proposalStateMachine[STEPS.QUOTE].goBack({user: {}})).toEqual(STEPS.CONTACT_DETAILS)
//         })
//         it(`should navigate from ${STEPS.DETAILS} back to ${STEPS.QUOTE} step`, () => {
//             expect(proposalStateMachine[STEPS.DETAILS].goBack({user: {}})).toEqual(STEPS.QUOTE)
//         })
//         it(`should navigate from ${STEPS.PAYMENT} back to ${STEPS.DETAILS} step`, () => {
//             expect(proposalStateMachine[STEPS.PAYMENT].goBack()).toEqual(STEPS.DETAILS)
//         })
//     })
// })
