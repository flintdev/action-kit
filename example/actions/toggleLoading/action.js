// example/actions/toggleLoading/action.js

export async function action(eventArgs, state, handler) {
    const {setState} = handler;
    let value = 'Ready...';
    setState('TEXT_VALUE_CHANGE', {value});
    await sleep(1000);
    value = 'Loading...';
    setState('TEXT_VALUE_CHANGE', {value});
    await sleep(2000);
    value = 'Complete!';
    setState('TEXT_VALUE_CHANGE', {value});
    await sleep(100);
    value = '';
    setState('TEXT_VALUE_CHANGE', {value});
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
};