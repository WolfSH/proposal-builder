import * as React from 'react';

import { PROPOSAL_WIZARD_STEP_NAMES } from '../step-names';
import { FinishStep } from '../../steps/FinishStep'
import { IWizardStep } from '../../../wizard/models';
import { STATE_MACHINE } from '../../../wizard/helpers';

export interface IFinishStateData {
	greeting: string,
	question: string,
	confidence: string,
	skills: { label: string, value: string }[],
	thanks: string
}

export interface IFinishStateHandlers {
}

export const finishStep: IWizardStep<IFinishStateData, IFinishStateHandlers> = {
	prepare() {
		return Promise.resolve({})
	},
	getComponent({ greeting, question, confidence, skills, thanks }, { onDone, onGoBack }) {
		return (
			<FinishStep
				onDone={onDone}
				goBack={onGoBack}
				defaultProposal={
					greeting
					+ '\n\n'
					+ question
					+ '\n\n'
					+ confidence
					+ '\n\n'
					+ "I'm a senior front-end engineer and I'm using the next technologies:"
					+ '\n'
					+ skills.map(({ label }, i) => `${i + 1}) ${label}`).join('\n')
					+ '\n\n'
					+ thanks
					+ '\n\n'
					+ 'Igor Shybyryn'
				}
			/>
		)
	},
	finish() {
		return Promise.resolve({})
	},
	goNext(data) {
		return STATE_MACHINE.TERMINATE
	},
	goBack(data) {
		return PROPOSAL_WIZARD_STEP_NAMES.THANKS
	},
	getTitle(data) {
		return ''
	},
	getStepIndex(lastStepIndex) {
		return 3;
	},
};

