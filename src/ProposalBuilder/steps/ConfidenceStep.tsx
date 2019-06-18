import * as React from 'react'
import { Typography, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TextOption } from './components/TextOption';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3, 2),
		margin: theme.spacing(3, 2)
	},
}));

const options = [
	'I have experience working with your tech stack, so I\'m sure there will be no problem with it.',
	'I had tasks similar to your, so I know how to do it fastly.',
	'I have a lot of experience working with React and redux. My upwork history proves that I have great technical and communication skills.',
	"I know how to create single page web apps from scratch. I'm easy to communicate, have great technical skills and you will have fast, easy to maintain codebase if you will hire me. My upwork history proves my words.",
	"I think I will be the best fit for this project because I'm using the same stack as you described. I have a lot of experience developing sites from scratch and delivering solid, fast web applications in time. I'm easy to work with, as you can see from my projects history on upwork.",
	"I have previous experience teaching other people front-end development with React. Currently I have client who is back-end developer and he wants to learn front-end development.\nI'm sure it will not take a long time from me to help you with your issues.\nI'm true expert and you can see it from my upwork history.",
	"I think I will be the best fit for this project because I know how to create complex web applications with React. You will get fast, easy to maintain codebase as a result of my work. If you will hire me - you will have reliable developer that can be trusted. Feedback in my working history proves my words.",
	"I'm sure that I will be the best fit to this project. I'm using the same approaches and technologies as you need and I'm easy to communicate with. You will have information on tasks progress and any issues that I could experience during development process."
]

export function ConfidenceStep({ onDone, goBack }: { onDone: any, goBack: any }) {
	const classes = useStyles();

	return (
		<div>
			<Typography variant="h5" component="h3">
				Confidence
			</Typography>
			{
				options.map(option => {
					return (
						<TextOption
							key={option}
							value={option}
							onClick={() => onDone({ confidence: option })}
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
