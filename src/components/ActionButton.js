import React from "react";
import Icon from '@material-ui/core/Icon'

class ActionButton extends React.Component {

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? 'Add another list' : 'Add another card';
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? 'white' : 'inherit';

        return (
            <div>
                <Icon>add</Icon>
                <p>
                    {buttonText}
                </p>
            </div>
        )
    }

    render() {
        return this.renderAddButton();
    }
}

export default ActionButton;