import {Action} from 'redux';

export interface IAction<T = any> extends Action {
    payload: T;
}

export interface IActionCreator<T> {
    (payload?: T): IAction<T>;
    type?: string;
}

export const
    createAction = function <T = void>(type: string): IActionCreator<T> {
        const creator: any = (payload?: T) => ({
            type, payload
        });
        creator.type = type;
        return creator;
    },

    createRequestActions = function <SuccessType = any, ErrorType = any>(name: string) {
        return {
            SUCCESS: createAction<SuccessType>(`${name}_SUCCESS`),
            ERROR: createAction<ErrorType>(`${name}_ERROR`),
            START: createAction(`${name}_START`)
        };
    };