import React, {Component} from "react";
import TrelloList from "./trelloList";
import {connect} from "react-redux";
import styled from "styled-components";
import TrelloActionButton from "./trelloActionButton";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import {sort} from "../reducers/reduser-list";


class App extends Component {

    onDragEnd = (result) => {
        // the only one that is required
        console.log(result);
        const {destination, source, draggableId, type} = result;
        if (!destination) {
            return;
        }
        this.props.dispatch(sort(source.droppableId, destination.droppableId, source.index, destination.index, draggableId,type));
    };

    render() {
        let {lists} = this.props;
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="all-lists" direction="horizontal" type="list">
                    {
                        (provided) => (
                            <ListStyle ref={provided.innerRef} {...provided.droppableProps}>
                                {
                                    lists.map((list, index) => {
                                        return <TrelloList key={list.id} title={list.title} cards={list.card}
                                                           listId={list.id} index={index}/>;
                                    })
                                }
                                {provided.placeholder}
                                <TrelloActionButton/>

                            </ListStyle>
                        )
                    }

                </Droppable>
            </DragDropContext>
        );
    }
}


const ListStyle = styled.div`
display: flex;
`;

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    };
};

export default connect(mapStateToProps)(App);


