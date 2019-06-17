import * as React from 'react'
import { Typography, Paper } from '@material-ui/core';
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
}));

interface IProps {
	value?: string,
	children?: React.ReactNode
	onClick?: any
}

export function TextOption({ value, onClick = noop, children }: IProps) {
	const classes = useStyles();
	return (
		<Paper
			className={classes.root}
			onClick={onClick}
		>
			{
				children ||
				<Typography component="p">
					{value}
				</Typography>
			}
		</Paper>
	)
}