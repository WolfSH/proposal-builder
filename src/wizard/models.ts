interface ILocation {
    pathname: string
}

export interface IUrlResolver {
    getPathname: (location: ILocation, name: string, nextStep: string, data?: any) => string
    parsePathname: (location: ILocation, name: string, data?: any) => Partial<{ step: string, name: string, data?: any }>
}

export interface IDefaultStateHandlers {
    onDone:          (data:  any) => void
    onGoBack:        (data?: any) => void
    changeStepTitle: (title: string | JSX.Element) => void
}

export interface IWizardStep<D, H> {
    goNext: (data?: D) => string,
    goBack: (data?: D) => string,
    prepare: (data: D, handlers?: H) => Promise<Partial<D>>,
    finish: (data?: D, handlers?: H) => Promise<any>,
    getStepIndex: (lastStepIndex: number) => number,
    getComponent: (data: D, handlers: H & IDefaultStateHandlers) => JSX.Element,
    getTitle: (data: D) => string,
}

export interface IWizardNavigationStep {
    getValue: (data: any) => any,
    getLabel: () => string,
    getIndex: (data?: any) => number
}



export interface IStepInfo {
    step: string
    data: any
}
