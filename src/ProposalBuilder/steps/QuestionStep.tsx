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

const questions = [
	'Do you have more details about the project?',
	'Do you have requirement ready?',
	'Is API ready?'
]

export function QuestionStep({ onDone, goBack }: { onDone: any, goBack: any }) {
	const classes = useStyles();

	return (
		<div>
			<Typography variant="h5" component="h3">
				Question
			</Typography>
			{
				questions.map(question => {
					return (
						<TextOption
							key={question}
							value={question}
							onClick={() => onDone({ question })}
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
