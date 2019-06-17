import { IUrlResolver } from './models';
import { defaultResolver } from './resolver';

export const STATE_MACHINE = Object.freeze({
	TERMINATE: 'TERMINATE',
	START:     'START'
});

export function chainStateMachines(
	baseStateMachine: any,
	extensionStateMachine: any,
	{ lastStep, startStep }: { lastStep: any, startStep: any }
) {
	const gluedBaseStateMachine = {
		...baseStateMachine,
		[lastStep.name]: {
			...baseStateMachine[lastStep.name],
			goNext(data: any) {
				return baseStateMachine[lastStep.name].goNext(data) === STATE_MACHINE.TERMINATE
					? startStep.goNext(data)
					: baseStateMachine[lastStep.name].goNext(data)
			}
		}
	}

	const gluedExtensionStateMachine = {
		...extensionStateMachine,
		[startStep.name]: {
			...extensionStateMachine[startStep.name],
			goBack(data: any) {
				return extensionStateMachine[startStep.name].goBack(data) === STATE_MACHINE.START
					? lastStep.goBack(data)
					: extensionStateMachine[startStep.name].goBack(data)
			}
		}
	}
	return {
		...gluedBaseStateMachine,
		...gluedExtensionStateMachine
	}
}

export function chainResolvers(baseResolver: IUrlResolver, extensionResolver = defaultResolver): IUrlResolver {

	// todo: wait untill typescript can work with rest/spread operator properly
	return {
		getPathname(...args) {
			return (baseResolver.getPathname as any)(...args) === STATE_MACHINE.TERMINATE
				? (extensionResolver.getPathname as any)(...args)
				: (baseResolver.getPathname as any)(...args)
		},
		parsePathname(...args) {
			return (baseResolver.parsePathname as any)(...args).step
				? (baseResolver.parsePathname as any)(...args)
				: (extensionResolver.parsePathname as any)(...args)
		}
	}
}
