import * as React from 'react'
import { Typography, Button, Icon, Grid } from '@material-ui/core';
import { TextOption } from './components/TextOption';
import { confidenceOptions, CONFIDENCE_COLORS } from '../../config';
import { makeStyles } from '@material-ui/core/styles';

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
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
			>
				<Grid item>
					<Icon fontSize="large" style={{color: CONFIDENCE_COLORS.SAME_TECH_STACK}}>
						add_circle
					</Icon>
				</Grid>
				<Grid className={classes.textContainer} item xs zeroMinWidth>
					Same tech stack
				</Grid>

				<Grid item>
					<Icon fontSize="large" style={{color: CONFIDENCE_COLORS.TEACHING}}>
						add_circle
					</Icon>
				</Grid>
				<Grid className={classes.textContainer} item xs zeroMinWidth>
					Teaching
				</Grid>

				<Grid item>
					<Icon fontSize="large" style={{color: CONFIDENCE_COLORS.SAME_PROJECT}}>
						add_circle
					</Icon>
				</Grid>
				<Grid className={classes.textContainer} item xs zeroMinWidth>
					Same project before
				</Grid>
			</Grid>
			{
				confidenceOptions.map(({ value, iconColor }) => {
					return (
						<TextOption
							key={value}
							value={value}
							iconColor={iconColor}
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
