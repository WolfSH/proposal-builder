import * as React from 'react'
import { Typography, Paper, TextField } from '@material-ui/core';
import { TextOption } from './components/TextOption';

const options = [
	'Hi[name]!',
	'Hello[name]!',
	'Greetings[name]!'
]

export function GreetingStep({ onDone }: { onDone: any }) {
	const [name, setName] = React.useState('');

	const handleChange = (event: any) => {
		setName(event.target.value);
	};

	return (
		<div>
			<Typography variant="h5" component="h3">
				Greeting
			</Typography>
			<TextField
				id="standard-name"
				label="Name"
				value={name}
				onChange={handleChange}
				margin="normal"
			/>
			{
				options.map(option => {
					const value = option.replace("[name]", name ? ` ${name}` : '')
					return (
						<TextOption
							key={option}
							value={value}
							onClick={() => onDone({ greeting: value })}
						/>
					)
				})
			}
		</div>
	)
}
