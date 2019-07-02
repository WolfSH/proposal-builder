import { Chip, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { noop } from 'lodash'
import * as React from 'react'

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3, 2),
		margin: theme.spacing(3, 2),
		textAlign: 'left',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: '#eee',
		}
	},
	icon: {
		marginRight: theme.spacing(2)
	}
}));

interface IProps {
	value?: string,
	children?: React.ReactNode
	onClick?: any,
	tagLabel?: string,
	tagColor?: string
}

export function TextOption({ value, onClick = noop, children, tagLabel, tagColor }: IProps) {
	const classes = useStyles();
	return (
		<Paper
			className={classes.root}
			onClick={onClick}
		>
			{
				children ||
				<Typography component="p">
					<Grid
						container
						direction="row"
						justify="center"
						alignItems="center"
						spacing={1}
					>
						<Grid item>
							{
								tagLabel &&
								<Chip label={tagLabel} color="primary" style={{backgroundColor: tagColor}} />
							}
						</Grid>
						<Grid item xs zeroMinWidth>
							{value}
						</Grid>
					</Grid>
				</Typography>
			}
		</Paper>
	)
}