import * as React from 'react'
import { ProposalWizardController } from './ProposalWizardController';
import { Container } from '@material-ui/core';

export function ProposalBuilder() {
	return (
		<Container maxWidth="lg">
			<ProposalWizardController />
		</Container>
	)
}
