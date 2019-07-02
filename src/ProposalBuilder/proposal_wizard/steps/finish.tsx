import * as React from 'react';

import { PROPOSAL_WIZARD_STEP_NAMES } from '../step-names';
import { FinishStep } from '../../steps/FinishStep'
import { IWizardStep } from '../../../wizard/models';
import { STATE_MACHINE } from '../../../wizard/helpers';
import { getProposalText } from '../../../utils';

export interface IFinishStateData {
	firstLine: string,
	greeting: string,
	question: string,
	confidence: string,
	role: string,
	skills: { label: string, value: string }[],
	thanks: string
}

export interface IFinishStateHandlers {
}

export const finishStep: IWizardStep<IFinishStateData, IFinishStateHandlers> = {
	prepare() {
		return Promise.resolve({})
	},
	getComponent(data, { onDone, onGoBack }) {
		return (
			<FinishStep
				onDone={onDone}
				goBack={onGoBack}
				defaultProposal={getProposalText(data)}
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

