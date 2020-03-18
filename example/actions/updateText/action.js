// example/actions/updateText/action.js

export async function action(eventArgs, state, handler) {
    const {setState} = handler;
    const {value} = eventArgs;
    setState('TEXT_VALUE_CHANGE', {value});
}