// example/views/Root.jsx
import Button from "@flintdev/material-widgets/dist/control/Button";
import TextField from "@flintdev/material-widgets/dist/control/TextField";
import Label from "@flintdev/material-widgets/dist/control/Label";

import * as React from 'react';
import {connect} from 'react-redux';
import * as actions from 'example/actions';

class Root extends React.Component {
    render() {
        const {state} = this.props;
        return (
            <div>
                <TextField
                    params={{
                        variant: "outlined",
                        label: "Text Input",
                        value: state.textValue,
                    }}
                    events={{
                        onChange: this.props.updateText
                    }}
                />
                <Label
                    params={{
                        fontSize: 24,
                        text: state.textValue
                    }}
                />
                <Button
                    params={{
                        variant: "contained",
                        label: "Toggle Loading"
                    }}
                    events={{
                        onClick: this.props.toggleLoading
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {state};
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateText: (args) => dispatch(actions.updateText(args)),
        toggleLoading: (args) => dispatch(actions.toggleLoading(args)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
