import { Typography, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import * as React from 'react'

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
	},
}));

let inputRef: any = null

export function FinishStep({ onDone, defaultProposal, goBack }: { onDone: any, goBack: any, defaultProposal: string }) {
	const [proposal, setProposal] = React.useState(defaultProposal)

	function handleChange(event: any) {
		setProposal(event.target.value)
	}

	function copyToClipboard() {
		if (inputRef) {
			inputRef.select();
			document.execCommand("copy")
			inputRef.blur();
		}
	}

	const classes = useStyles()

	return (
		<div>
			<Typography variant="h5" component="h3">
				Finish
			</Typography>
			<TextField
				id="outlined-textarea"
				inputRef={(ref) => inputRef = ref}
				value={proposal}
				onChange={handleChange}
				multiline
				fullWidth
				margin="normal"
				variant="outlined"
			/>
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
				onClick={copyToClipboard}
				variant="contained"
				size="large"
				color="primary"
			>
				copy to clipboard
			</Button>
		</div>
	)
}
