import * as React from 'react'

import { ThanksStep } from '../../steps/ThanksStep'
import { PROPOSAL_WIZARD_STEP_NAMES } from '../step-names'
import { IWizardStep } from '../../../wizard/models';

export interface IThanksStateData {
}

export interface IThanksStateHandlers {
}

export const thanksStep: IWizardStep<IThanksStateData, IThanksStateHandlers> = {
	prepare() {
		return Promise.resolve({})
	},
	getComponent({}, { onDone, onGoBack }) {
		return <ThanksStep onDone={onDone} goBack={onGoBack} />
	},
	finish() {
		return Promise.resolve({})
	},
	goNext(data) {
		return PROPOSAL_WIZARD_STEP_NAMES.FINISH
	},
	goBack(data) {
		return PROPOSAL_WIZARD_STEP_NAMES.SKILLS
	},
	getTitle(data) {
		return ''
	},
	getStepIndex(lastStepIndex) {
		return 3;
	},
};

