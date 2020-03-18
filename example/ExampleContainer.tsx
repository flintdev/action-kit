//

import * as React from 'react';


export interface Props {

}

export default class ExampleContainer extends React.Component<Props, object> {
    state = {

    };

    componentDidMount(): void {

    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>

            </div>
        )
    }
}
