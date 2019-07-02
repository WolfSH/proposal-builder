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
