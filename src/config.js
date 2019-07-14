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
		value: 'TODO: Needless to say but you can also see my Upwork profile for the feedback about XYZ jobs.'
	},
	{
		tags: [CONFIDENCE_TAGS.SAME_PROJECT],
		value: 'TODO: Something about how I see this project being completed, my approaches'
	},
	{
		tags: [CONFIDENCE_TAGS.SAME_PROJECT],
		value: 'TODO: something about "you will receive hight quality work"'
	},
	{
		tags: [CONFIDENCE_TAGS.SAME_PROJECT],
		value: 'TODO: What you’ll receive:'
	},
	{
		tags: [CONFIDENCE_TAGS.SAME_PROJECT],
		value: 'For more on my skill and successfully finished jobs, please have a look on my Profile, Portfolio, Work history and Feedback.'
	},
	{
		tags: [CONFIDENCE_TAGS.SAME_PROJECT],
		value: 'I have a lot of experience working with React and redux. My upwork history proves that I have great technical and communication skills.',
	},
	{
		tags: [CONFIDENCE_TAGS.SAME_PROJECT],
		value: "I know how to create single page web apps from scratch. I'm easy to communicate, have great technical skills and you will have fast, easy to maintain codebase if you will hire me. My upwork history proves my words.",
	},
	{
		tags: [CONFIDENCE_TAGS.SAME_PROJECT],
		value: "I think I will be the best fit for this project because I know how to create complex web applications with React. You will get fast, easy to maintain codebase as a result of my work. If you will hire me - you will have reliable developer that can be trusted. Feedback in my working history proves my words.",
	},
	{
		tags: [CONFIDENCE_TAGS.SAME_PROJECT],
		value: "TODO: I recently implemented that with another client"
	},
	{
		tags: [CONFIDENCE_TAGS.SAME_TECH_STACK],
		value: "I think I will be the best fit for this project because I'm using the same stack as you described. I have a lot of experience developing sites from scratch and delivering solid, fast web applications in time. I'm easy to work with, as you can see from my projects history on upwork.",
	},
	{
		tags: [CONFIDENCE_TAGS.SAME_TECH_STACK],
		value: "I'm sure that I will be the best fit to this project. I'm using the same approaches and technologies as you need and I'm easy to communicate with. You will have information on tasks progress and any issues that I could experience during development process."
	},
	{
		tags: [CONFIDENCE_TAGS.TEACHING],
		value: "I have previous experience teaching other people front-end development with React. Currently I have client who is back-end developer and he wants to learn front-end development.\nI'm sure it will not take a long time from me to help you with your issues.\nI'm true expert and you can see it from my upwork history.",
	}
]

export const greetingOptions = [
	'Hi[name]!',
	'Hello[name]!',
	'Greetings[name]!',
	'Dear[name]!',
	'TODO: in case of invite: Thanks for job invite. It\'s a pleasure to meet you',
	'TODO: in case of invite: Thank you for your invitation.'
]

export const questions = [
	'The job posting does not describe the specifics. Could you provide more details about the project requirements?',
	'Do you have a written description for project requirements?',
	'Is API ready?',
	'Do you have wireframes/demo page of your project?',
	'Can I take a look at current state of the application?',
	'Do you have designs of you application?',
	'Do you have more details about you app?',
	'Do you have a website so I can understand this more?',
	'Can you send me a link to your site?'
]

export const ROLES = {
	FRONT_END: 'front-end',
	FULL_STACK: 'full-stack',
	BACK_END: 'back-end'
}

export const roles = [
	{
		value: ROLES.FRONT_END
	},
	{
		value: ROLES.FULL_STACK
	},
	{
		value: ROLES.BACK_END
	}
]

export const skills = [
	{
		value: 'node',
		label: 'Node.js'
	},
	{
		value: 'express',
		label: 'express.js'
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
		value: 'gatsby',
		label: 'Gatsby'
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
	'Looking forward for your questions.',
	// TODO: needs paraphrasing
	'I can start your project immediately and look forward to working with you.',
	'I can start your project immediately and let me know if you would like to discuss anything further with me.',
	'P.S. – the proposed cost is an estimate. I could give you an exact figure, timeframe and what I expect to be able to accomplish if we talk. If any of the above sounds interesting, reply to this and we’ll set up a time to talk this week.',
	'If you want to collaborate with me let’s discuss it in more detail over the chat.',
	'If the above offer sounds like something you would be interested in, I’d love to hear from you.',
	'Send me a quick message and we can figure out if we are a good fit to work together!',
	'I am free today to discuss details if you are interested.',
	'I’ll look forward to hearing from you for further process.',
	'Thank you for your consideration',
	'I am waiting to be hired in this project to show my skills.',
	'TODO: I am available for an interview Monday to Friday 10 am to 12pm (UTC + 10:00 timezone). I look forward to having the opportunity to discuss the job further.',
	'Best regards,',
	'Regards,',
	'Kind regards,'
]

// You may find my quote a little higher than what most people here would charge. The reason is simple: I am not desperate to generate quick bucks here at Upwork but provide a complete technical expertise for my clients.
// Should you find my proposal inappropriate for your current needs and budget, feel free to move forward and find the best provider for this project. But keep me on your list; you may need me in the future. Please contact me anytime if you need help.
// I am an individual who personally works for you and not a company where you discuss things with a person who actually is not working on your tasks.