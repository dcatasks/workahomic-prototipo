import React from "react";
import Icon from '@material-ui/core/Icon'
import Card from '@material-ui/core/Card'
import TextArea from 'react-textarea-autosize';

class ActionButton extends React.Component {

    state = {
        formOpen: false
    }

    openForm = () => {
        this.setState({
            formOpen: true
        })
    }

    closeForm = (e) => {
        this.setState({
            formOpen: false
        })
    }

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? 'Añade otra lista' : 'Añade otra tarjeta';
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? 'white' : 'inherit';
        const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit';

        return (
            <div 
                onClick={this.openForm}
                style={{
                    ...styles.openForButtonGroup,
                    opacity: buttonTextOpacity,
                    color: buttonTextColor,
                    backgroundColor: buttonTextBackground
                }}>
                <Icon>add</Icon>
                <p>
                    {buttonText}
                </p>
            </div>
        )
    };

    renderForm = () => {
        
        const { list } = this.props;

        const placeholder = list ? 'Título de la lista' : 'Título de la tarjeta';

        const buttonTitle = list ? 'Añadir lista' : 'Añadir tarjeta';
        
        return (
            <div>
                <Card>
                    <TextArea 
                        placeholder={placeholder} 
                        autoFocus 
                        onBlur={this.closeForm}/>
                </Card>
            </div>
        );
    };

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    };
}

const styles = {
    openForButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    }
}

export default ActionButton;