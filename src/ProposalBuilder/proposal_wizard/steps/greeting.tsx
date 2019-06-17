import * as React from 'react';
import { PROPOSAL_WIZARD_STEP_NAMES } from '../step-names';
import { GreetingStep } from '../../steps/GreetingStep'
import { IWizardStep } from '../../../wizard/models';
import { STATE_MACHINE } from '../../../wizard/helpers';

export interface IGreetingStateData {
}

export interface IGreetingStateHandlers {
}

export const greetingStep: IWizardStep<IGreetingStateData, IGreetingStateHandlers> = {
	prepare() {
		return Promise.resolve({})
	},
	getComponent({ }, { onDone }) {
		return <GreetingStep onDone={onDone}/>
	},
	finish() {
		return Promise.resolve({})
	},
	goNext(data) {
		return PROPOSAL_WIZARD_STEP_NAMES.QUESTION
	},
	goBack(data) {
		return STATE_MACHINE.START
	},
	getTitle(data) {
		return ''
	},
	getStepIndex(lastStepIndex) {
		return 0;
	},
};

