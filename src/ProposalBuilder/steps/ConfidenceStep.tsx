import * as React from 'react'
import { Typography, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TextOption } from './components/TextOption';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3, 2),
		margin: theme.spacing(3, 2)
	},
}));

const options = [
	'I have experience working with your tech stack, so I\'m sure there will be no problem with it.',
	'I had tasks similar to your, so I know how to do it fastly.'
]

export function ConfidenceStep({ onDone, goBack }: { onDone: any, goBack: any }) {
	const classes = useStyles();

	return (
		<div>
			<Typography variant="h5" component="h3">
				Confidence
			</Typography>
			{
				options.map(option => {
					return (
						<TextOption
							key={option}
							value={option}
							onClick={() => onDone({ confidence: option })}
						/>
					)
				})
			}
			<Button
				onClick={goBack}
				variant="contained"
				size="large"
				color="default"
			>
				back
			</Button>
		</div>
	)
}
