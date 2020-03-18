//
import {store} from "example/redux/store";
import {Provider} from 'react-redux';

import * as React from 'react';
import Root from './views/Root';

export default class ExampleContainer extends React.Component {
    state = {

    };

    componentDidMount() {

    }

    render() {
        return (
            <Provider store={store}>
                <Root/>
            </Provider>
        )
    }
}
