import * as React from 'react'

import { PROPOSAL_WIZARD_STEP_NAMES } from '../step-names'
import { SkillsStep } from '../../steps/SkillsStep'
import { IWizardStep } from '../../../wizard/models';

export interface ISkillsStateData {
}

export interface ISkillsStateHandlers {
}

export const skillsStep: IWizardStep<ISkillsStateData, ISkillsStateHandlers> = {
	prepare() {
		return Promise.resolve({})
	},
	getComponent({}, { onDone, onGoBack }) {
		return <SkillsStep onDone={onDone} goBack={onGoBack} />
	},
	finish() {
		return Promise.resolve({})
	},
	goNext() {
		return PROPOSAL_WIZARD_STEP_NAMES.THANKS
	},
	goBack() {
		return PROPOSAL_WIZARD_STEP_NAMES.CONFIDENCE
	},
	getTitle() {
		return ''
	},
	getStepIndex() {
		return 3;
	},
};

