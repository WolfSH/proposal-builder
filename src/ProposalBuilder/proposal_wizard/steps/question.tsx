import * as React from 'react';

import { PROPOSAL_WIZARD_STEP_NAMES } from '../step-names';
import { QuestionStep } from '../../steps/QuestionStep'
import { IWizardStep } from '../../../wizard/models';

export interface IQuestionStateData {
}

export interface IQuestionStateHandlers {
}

export const questionStep: IWizardStep<IQuestionStateData, IQuestionStateHandlers> = {
	prepare() {
		return Promise.resolve({})
	},
	getComponent({}, { onDone, onGoBack }) {
		return <QuestionStep onDone={onDone} goBack={onGoBack} />
	},
	finish() {
		return Promise.resolve({})
	},
	goNext(data) {
		return PROPOSAL_WIZARD_STEP_NAMES.CONFIDENCE
	},
	goBack(data) {
		return PROPOSAL_WIZARD_STEP_NAMES.GREETING
	},
	getTitle(data) {
		return ''
	},
	getStepIndex(lastStepIndex) {
		return 1;
	},
};

