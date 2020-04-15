// src/actionAdapter/interface.ts

export type ActionFunc = (eventArgs: any, state: any, handler: Handler) => Promise<any>

export interface Handler {
    setState: (stateUpdaterName: string, args: object) => void
    getState: () => any;
}

export interface ReduxActionMap {
    [key: string]: (actionArgs: object) => any
}

export interface AdapterCallback {
    success: () => void,
    error: (err: any) => void
}