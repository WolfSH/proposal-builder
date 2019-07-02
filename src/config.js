export const CONFIDENCE_COLORS = {
	SAME_PROJECT:    '#ff3a3a',
	TEACHING:        '#231f90',
	SAME_TECH_STACK: '#366912'
}

export const CONFIDENCE_TAGS = {
	SAME_PROJECT:    'Same project',
	TEACHING:        'Teaching',
	SAME_TECH_STACK: 'Same stack'
}

export const confidenceOptions = [
	{
		tags: [CONFIDENCE_TAGS.SAME_PROJECT],
		value: 'I have a lot of experience working with React and redux. My upwork history proves that I have great technical and communication skills.',
	}, {
		tags: [CONFIDENCE_TAGS.SAME_PROJECT],
		value: "I know how to create single page web apps from scratch. I'm easy to communicate, have great technical skills and you will have fast, easy to maintain codebase if you will hire me. My upwork history proves my words.",
	}, {
		tags: [CONFIDENCE_TAGS.SAME_PROJECT],
		value: "I think I will be the best fit for this project because I know how to create complex web applications with React. You will get fast, easy to maintain codebase as a result of my work. If you will hire me - you will have reliable developer that can be trusted. Feedback in my working history proves my words.",
	}, {
		tags: [CONFIDENCE_TAGS.SAME_TECH_STACK],
		value: "I think I will be the best fit for this project because I'm using the same stack as you described. I have a lot of experience developing sites from scratch and delivering solid, fast web applications in time. I'm easy to work with, as you can see from my projects history on upwork.",
	}, {
		tags: [CONFIDENCE_TAGS.SAME_TECH_STACK],
		value: "I'm sure that I will be the best fit to this project. I'm using the same approaches and technologies as you need and I'm easy to communicate with. You will have information on tasks progress and any issues that I could experience during development process."
	}, {
		tags: [CONFIDENCE_TAGS.TEACHING],
		value: "I have previous experience teaching other people front-end development with React. Currently I have client who is back-end developer and he wants to learn front-end development.\nI'm sure it will not take a long time from me to help you with your issues.\nI'm true expert and you can see it from my upwork history.",
	}
]

export const greetingOptions = [
	'Hi[name]!',
	'Hello[name]!',
	'Greetings[name]!'
]

export const questions = [
	'Do you have more details about the project?',
	'Do you have requirement ready?',
	'Is API ready?',
	'Do you have wireframes/demo page of your project?',
	'Can I take a look at current state of the application?',
	'Do you have designs of you application?',
	'Do you have more details about you app?'
]

export const skills = [
	{
		value: 'node',
		label: 'Node.js'
	},
	{
		value: 'mongodb',
		label: 'MongoDB'
	},
	{
		value: 'passport',
		label: 'passport.js'
	},
	{
		value: 'socket.io',
		label: 'socket.io'
	},
	{
		value: 'react',
		label: 'React'
	},
	{
		value: 'redux',
		label: 'Redux'
	},
	{
		value: 'SASS/SCSS, LESS',
		label: 'LESS, SASS/SCSS preprocessors for CSS'
	},
	{
		value: 'babel',
		label: 'Babel for transpiring of ES6+ JavaScript code'
	},
	{
		value: 'typescript',
		label: 'TypeScript for JavaScript with types'
	},
	{
		value: 'webpack',
		label: 'Webpack for bundling my code'
	},
	{
		value: 'git',
		label: 'git as a version control system'
	},
	{
		value: 'immutable',
		label: 'Immutable.js'
	},
	{
		value: 'jquery',
		label: 'jQuery'
	},
	{
		value: 'bootstrap',
		label: 'Bootstrap'
	},
	{
		value: 'plotly',
		label: 'Plotly plotting library'
	},
	{
		value: 'datatables',
		label: 'Datatables table data visualization and manipulation library'
	}
]

export const thanksOptions = [
	'Thank you for your time.',
	'Please let me know if you have any questions.',
	'Looking forward for your questions.'
]
