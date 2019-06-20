import * as React from 'react'
import { Typography, Paper, Icon, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { noop } from 'lodash';

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
	iconColor?: string
}

export function TextOption({ value, onClick = noop, children, iconColor }: IProps) {
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
					>
						<Grid item>
							{
								iconColor &&
								<Icon
									className={classes.icon}
									fontSize="large"
									style={{color: iconColor}}
								>
									add_circle
								</Icon>
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