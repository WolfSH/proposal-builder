import * as React from 'react';

import { PROPOSAL_WIZARD_STEP_NAMES } from '../step-names';
import { RoleStep } from '../../steps/RoleStep'
import { IWizardStep } from '../../../wizard/models';

export interface IRoleStateData {
}

export interface IRoleStateHandlers {
}

export const roleStep: IWizardStep<IRoleStateData, IRoleStateHandlers> = {
	prepare() {
		return Promise.resolve({})
	},
	getComponent({}, { onDone, onGoBack }) {
		return <RoleStep onDone={onDone} goBack={onGoBack} />
	},
	finish() {
		return Promise.resolve({})
	},
	goNext(data) {
		return PROPOSAL_WIZARD_STEP_NAMES.SKILLS
	},
	goBack(data) {
		return PROPOSAL_WIZARD_STEP_NAMES.CONFIDENCE
	},
	getTitle(data) {
		return ''
	},
	getStepIndex(lastStepIndex) {
		return 1;
	},
};

