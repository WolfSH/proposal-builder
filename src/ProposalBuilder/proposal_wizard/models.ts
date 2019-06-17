import { IGreetingStateData, IGreetingStateHandlers } from './steps/greeting';
import { IQuestionStateData, IQuestionStateHandlers } from './steps/question';
import { IConfidenceStateData, IConfidenceStateHandlers } from './steps/confidence';
import { ISkillsStateData, ISkillsStateHandlers } from './steps/skills';
import { IThanksStateData, IThanksStateHandlers } from './steps/thanks';
import { IFinishStateData, IFinishStateHandlers } from './steps/finish';
import { IDefaultStateHandlers } from '../../wizard/models';

export interface IRepairStateMachineData extends
    IGreetingStateData,
    IFinishStateData,
    IQuestionStateData,
    IThanksStateData,
    IConfidenceStateData,
    ISkillsStateData,
    Partial<IDefaultStateHandlers> {}

export interface IRepairStateMachineInitialData extends Partial<IRepairStateMachineData> {}

export interface IRepairStateMachineHandlers extends
    IGreetingStateHandlers,
    IFinishStateHandlers,
    IQuestionStateHandlers,
    IThanksStateHandlers,
    IConfidenceStateHandlers,
    ISkillsStateHandlers {}
