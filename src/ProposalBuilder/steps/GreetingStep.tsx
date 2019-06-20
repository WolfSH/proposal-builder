import * as React from 'react'
import { Typography, Paper, TextField } from '@material-ui/core';
import { TextOption } from './components/TextOption';
import { greetingOptions } from '../../config';

export function GreetingStep({ onDone }: { onDone: any }) {
	const [name, setName] = React.useState('');
	const [firstLine, setFirstLine] = React.useState('')

	const handleChange = (event: any) => {
		switch(event.target.name) {
			case 'name': {
				setName(event.target.value);
				break
			}
			case 'firstLine': {
				setFirstLine(event.target.value)
				break
			}
		}
	};

	return (
		<div>
			<Typography variant="h5" component="h3">
				Greeting
			</Typography>
			<TextField
				id="standard-first-line"
				label="First line"
				name="firstLine"
				value={firstLine}
				onChange={handleChange}
				margin="normal"
			/>
			<br/>
			<TextField
				id="standard-name"
				label="Name"
				name="name"
				value={name}
				onChange={handleChange}
				margin="normal"
			/>
			{
				greetingOptions.map(option => {
					const value = option
						.replace("[name]", name ? ` ${name}` : '')
					return (
						<TextOption
							key={option}
							value={value}
							onClick={() => onDone({ greeting: value, firstLine })}
						/>
					)
				})
			}
		</div>
	)
}
