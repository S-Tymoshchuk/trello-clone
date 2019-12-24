import React, {Component} from "react";
import {connect} from "react-redux";
import AppBarComponent from "../materialUI/App-bar";
import DrawerComponent from "../materialUI/Drawer";
import Trello from "../attachment/Trello";
import Budget from "../attachment/Budget-controller";
import styled from "styled-components";

class App extends Component {


    render() {
        return (
            <div>
                <AppBarComponent/>
                <DrawerComponent/>
                {/*<Trello/>*/}
                <BudgetSc>
                    <Budget/>
                </BudgetSc>
            </div>
        );
    }
}

const BudgetSc = styled.div`{
display: flex;
justify-content: center;
}`;


export default connect()(App);


