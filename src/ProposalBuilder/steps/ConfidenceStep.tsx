import * as React from 'react'
import { Typography, Button, Icon, Grid } from '@material-ui/core';
import { TextOption } from './components/TextOption';
import { confidenceOptions, CONFIDENCE_COLORS } from '../../config';
import { makeStyles } from '@material-ui/core/styles';
import { getTagColor } from '../../utils';

const useStyles = makeStyles(theme => ({
	textContainer: {
		textAlign: 'left'
	}
}));

export function ConfidenceStep({ onDone, goBack }: { onDone: any, goBack: any }) {
	const classes = useStyles();
	return (
		<div>
			<Typography variant="h5" component="h3">
				Confidence
			</Typography>
			{
				confidenceOptions.map(({ value, tags }) => {
					return (
						<TextOption
							key={value}
							value={value}
							tagLabel={tags[0]}
							tagColor={getTagColor(tags[0])}
							onClick={() => onDone({ confidence: value })}
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
