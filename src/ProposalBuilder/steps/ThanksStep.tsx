import * as React from 'react'
import { Typography, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TextOption } from './components/TextOption';
import { thanksOptions } from '../../config';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3, 2),
		margin: theme.spacing(3, 2)
	},
}));

export function ThanksStep({ onDone, goBack }: { onDone: any, goBack: any }) {
	const classes = useStyles();

	return (
		<div>
			<Typography variant="h5" component="h3">
				Thanks
			</Typography>
			{
				thanksOptions.map(option => {
					return (
						<TextOption
							key={option}
							value={option}
							onClick={() => onDone({ thanks: option })}
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
