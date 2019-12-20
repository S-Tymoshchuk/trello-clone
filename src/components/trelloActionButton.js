import React from "react";
import {Card, Icon} from "@material-ui/core";
import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {addCard, addList} from "../reducers/reduser-list";

class TrelloActionButton extends React.Component {

    state = {
        formOpen: false,
        text: ""
    };

    textValue = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    changeState = () => {
        this.setState({
            formOpen: true
        });
    };

    formClose = () => {
        this.setState({
            formOpen: false
        });
    };

    renderButton = () => {
        const {list} = this.props;
        const buttonText = list ? "Add another card" : "Add another list";
        return (
            <RenderButtonSc onClick={this.changeState}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </RenderButtonSc>
        );

    };

    handleAddList = () => {
        const {dispatch} = this.props;
        const {text} = this.state;
        if (text) {
            this.setState({
                text: ""
            });
        }
        dispatch(addList(text));
        return;
    };

    handleAddCard = () => {
        const {dispatch, listId} = this.props;
        const {text} = this.state;
        if (text) {
            this.setState({
                text: ""
            });
        }
        dispatch(addCard(text, listId));
        return;
    };

    renderForm = () => {
        const {list} = this.props;
        const placeHolder = list ? "Add another card..." : "Add another list...";
        const buttonTitle = list ? "Add card" : "Add list";
        return (
            <div>
                <div style={{display: "flex"}}>
                    <CardSc>
                        <TextareaAutosizeSc onBlur={this.formClose} autoFocus value={this.state.text}
                                            onChange={this.textValue} placeholder={placeHolder}/>
                    </CardSc>
                </div>
                <ButtonFormContainer>
                    <Button onMouseDown={list ? this.handleAddCard : this.handleAddList} style={{
                        color: "white",
                        backgroundColor: "#5aac44"
                    }}>
                        {buttonTitle}
                    </Button>
                    <Icon>close</Icon>
                </ButtonFormContainer>
            </div>
        );
    };

    render() {
        return (
            <div>
                {this.state.formOpen ? this.renderForm() : this.renderButton()}
            </div>
        );
    }
}

const ButtonFormContainer = styled.div`
display: flex;
align-items: center;
margin-top: 5px;
`;

const RenderButtonSc = styled.div`
display: flex;
align-items: center;
cursor: pointer;
border-radius: 3px;
height: 36px;
width: 272px;
padding-left: 10px;
`;

const CardSc = styled(Card)`
overflow: visible;
min-height: 70px;
min-width: 272px;
padding: 6px 8px 2px;
margin-top: 10px;
`;

const TextareaAutosizeSc = styled(TextareaAutosize)`
resize: none;
width: 100%;
outline: none;
border: none;
`;


export default connect()(TrelloActionButton);
