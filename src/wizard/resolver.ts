import {IUrlResolver} from "./models";

export const defaultResolver: IUrlResolver = {
    getPathname({ pathname }, name, nextStep) {
        if (pathname.indexOf(`/wizard/${name}/`) < 0) {
            const [base] = pathname.split('/wizard/');
            return `${base}/wizard/${name}/${nextStep}`;
        } else {
            const path = pathname.split('/');
            path.pop()
            path.push(nextStep)
            return path.join('/');
        }
    },
    parsePathname({ pathname }) {
        const [, name, step] = pathname.match(/\/wizard\/(.*)?\/(.*)?/) || [,,,]
        return {
            step,
            name
        }
    }
}
