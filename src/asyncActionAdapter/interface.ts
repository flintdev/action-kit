// src/asyncActionAdapter/interface.ts

export type ActionFunc = (eventArgs: any, state: any, handler: Handler) => Promise<boolean>

export interface Handler {
    setState: (stateUpdaterName: string, args: object) => void
}

export interface ReduxActionMap {
    [key: string]: (actionArgs: object) => any
}
