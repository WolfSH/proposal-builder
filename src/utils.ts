import { CONFIDENCE_TAGS, CONFIDENCE_COLORS } from "./config";

export function getTagColor(tag: string) {
	switch (tag) {
		case CONFIDENCE_TAGS.SAME_PROJECT: {
			return CONFIDENCE_COLORS.SAME_PROJECT
		}
		case CONFIDENCE_TAGS.SAME_TECH_STACK: {
			return CONFIDENCE_COLORS.SAME_TECH_STACK
		}
		case CONFIDENCE_TAGS.TEACHING: {
			return CONFIDENCE_COLORS.TEACHING
		}
	}
}

interface IProposalData {
	firstLine?: string,
	greeting?: string,
	question?: string,
	confidence?: string,
	role?: string,
	skills?: { label: string, value: string }[],
	thanks?: string
}

export function getProposalText(data: IProposalData) {
	let result = ''
	if (data.firstLine) {
		result += data.firstLine
			? `${data.firstLine}\n`
			: ''
	}
	if (data.greeting) {
		result += data.greeting + '\n\n'
	}
	if (data.question) {
		result += data.question
			? `${data.question}\n\n`
			: ''
	}
	if (data.confidence) {
		result += data.confidence
			+ '\n\n'
	}
	if (data.role) {
		result += `I'm a senior ${data.role} engineer and I'm using next technologies:\n`
	}
	if (data.skills) {
		result += (data.skills ? data.skills.map(({ label }, i) => `- ${label}`).join('\n') : '') + '\n\n'
	}
	if (data.thanks) {
		result += `${data.thanks}\n\nIgor Shybyryn`
	}
	return result
}
