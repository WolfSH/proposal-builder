import { Button, Checkbox, FormControlLabel, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import * as React from 'react'

import { IDictionary } from '../proposal_wizard/repair_wizard_config'
import { skills, ROLES } from '../../config';

const useStyles = makeStyles(theme => ({
	root: {
		textAlign: 'left'
	},
	button: {
		margin: theme.spacing(1),
	},
}));

const defaultValue: IDictionary<boolean> = skills.reduce((acc, el) => {
	return {
		...acc,
		[el.value]: false
	}
}, {})

function getDefaultValue(role: string) {
	switch(role) {
		case ROLES.FRONT_END: {
			defaultValue['react'] = true
			defaultValue['redux'] = true
			defaultValue['SASS/SCSS, LESS'] = true
			break
		}
		case ROLES.FULL_STACK: {
			defaultValue['node'] = true
			defaultValue['mongodb'] = true
			defaultValue['express'] = true
			defaultValue['react'] = true
			defaultValue['redux'] = true
			defaultValue['SASS/SCSS, LESS'] = true
			break
		}
		case ROLES.BACK_END: {
			defaultValue['node'] = true
			defaultValue['mongodb'] = true
			defaultValue['express'] = true
			break
		}
	}

	defaultValue['babel'] = true
	defaultValue['typescript'] = true
	defaultValue['webpack'] = true
	defaultValue['git'] = true

	return defaultValue
}

export function SkillsStep({ onDone, goBack, role }: { onDone: any, goBack: any, role: string }) {
	const classes = useStyles()
	const [state, setState] = React.useState(getDefaultValue(role));

	const handleChange = (name: string) => (event: any) => {
		setState({ ...state, [name]: event.target.checked });
	};

	return (
		<div>
			<Typography variant="h5" component="h3">
				Skills
			</Typography>

			<div className={classes.root}>
				{
					skills.map(({label, value}) => {
						return (
							<React.Fragment>
								<FormControlLabel
									control={
										<Checkbox
											checked={state[value]}
											onChange={handleChange(value)}
											value={value}
											color="primary"
										/>
									}
									label={value}
								/>
								<br />
							</React.Fragment>
						)
					})
				}
			</div>
			<br />

			<Button
				className={classes.button}
				variant="contained"
				size="large"
				color="default"
				onClick={goBack}
			>
				Back
			</Button>

			<Button
				className={classes.button}
				variant="contained"
				size="large"
				color="primary"
				onClick={() => onDone({
					skills: Object.keys(state)
						.filter(key => state[key])
						.map(key => skills.find(x => x.value === key))
				})}
			>
				Next
			</Button>
		</div>
	)
}
