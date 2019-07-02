import * as React from 'react'

import { PROPOSAL_WIZARD_STEP_NAMES } from '../step-names'
import { SkillsStep } from '../../steps/SkillsStep'
import { IWizardStep } from '../../../wizard/models';

export interface ISkillsStateData {
	role: string
}

export interface ISkillsStateHandlers {
}

export const skillsStep: IWizardStep<ISkillsStateData, ISkillsStateHandlers> = {
	prepare() {
		return Promise.resolve({})
	},
	getComponent({ role }, { onDone, onGoBack }) {
		return <SkillsStep role={role} onDone={onDone} goBack={onGoBack} />
	},
	finish() {
		return Promise.resolve({})
	},
	goNext() {
		return PROPOSAL_WIZARD_STEP_NAMES.THANKS
	},
	goBack() {
		return PROPOSAL_WIZARD_STEP_NAMES.ROLE
	},
	getTitle() {
		return ''
	},
	getStepIndex() {
		return 3;
	},
};

