import * as React from 'react';

import { PROPOSAL_WIZARD_STEP_NAMES } from '../step-names';
import { ConfidenceStep } from '../../steps/ConfidenceStep'
import { IWizardStep } from '../../../wizard/models';

export interface IConfidenceStateData {
}

export interface IConfidenceStateHandlers {
}

export const confidenceStep: IWizardStep<IConfidenceStateData, IConfidenceStateHandlers> = {
	prepare() {
		return Promise.resolve({})
	},
	getComponent({}, { onDone, onGoBack }) {
		return <ConfidenceStep onDone={onDone} goBack={onGoBack} />
	},
	finish() {
		return Promise.resolve({})
	},
	goNext(data) {
		return PROPOSAL_WIZARD_STEP_NAMES.SKILLS
	},
	goBack(data) {
		return PROPOSAL_WIZARD_STEP_NAMES.QUESTION
	},
	getTitle(data) {
		return ''
	},
	getStepIndex(lastStepIndex) {
		return 2;
	},
};

