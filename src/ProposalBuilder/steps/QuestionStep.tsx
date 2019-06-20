import * as React from 'react'
import { Typography, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TextOption } from './components/TextOption';
import { questions } from '../../config';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3, 2),
		margin: theme.spacing(3, 2)
	},
	button: {
		margin: theme.spacing(1),
	},
}));

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
				className={classes.button}
				onClick={goBack}
				variant="contained"
				size="large"
				color="default"
			>
				back
			</Button>
			<Button
				className={classes.button}
				onClick={() => onDone({})}
				variant="contained"
				size="large"
				color="secondary"
			>
				skip
			</Button>
		</div>
	)
}
