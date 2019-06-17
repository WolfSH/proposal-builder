import { Button, Checkbox, FormControlLabel, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import * as React from 'react'

import { IDictionary } from '../proposal_wizard/repair_wizard_config'

const useStyles = makeStyles(theme => ({
	root: {
		textAlign: 'left'
	},
	button: {
		margin: theme.spacing(1),
	},
}));

const skills = [
	{
		value: 'react',
		label: 'React'
	},
	{
		value: 'redux',
		label: 'Redux'
	},
	{
		value: 'SASS/SCSS, LESS',
		label: 'LESS, SASS/SCSS preprocessors for CSS'
	},
	{
		value: 'babel',
		label: 'Babel for transpiring of ES6+ JavaScript code'
	},
	{
		value: 'typescript',
		label: 'TypeScript for JavaScript with types'
	},
	{
		value: 'webpack',
		label: 'Webpack for bundling my code'
	},
	{
		value: 'git',
		label: 'git as a version control system'
	},
	{
		value: 'immutable',
		label: 'Immutable.js'
	},
	{
		value: 'jquery',
		label: 'jQuery'
	},
	{
		value: 'bootstrap',
		label: 'Bootstrap'
	},
	{
		value: 'plotly',
		label: 'Plotly plotting library'
	},
	{
		value: 'datatables',
		label: 'Datatables table data visualization and manipulation library'
	}
]

const defaultValue: IDictionary<boolean> = skills.reduce((acc, el) => {
	return {
		...acc,
		[el.value]: false
	}
}, {})

defaultValue['react'] = true
defaultValue['redux'] = true
defaultValue['SASS/SCSS, LESS'] = true
defaultValue['babel'] = true
defaultValue['typescript'] = true
defaultValue['webpack'] = true
defaultValue['git'] = true

export function SkillsStep({ onDone, goBack }: { onDone: any, goBack: any }) {
	const classes = useStyles()
	const [state, setState] = React.useState(defaultValue);

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
