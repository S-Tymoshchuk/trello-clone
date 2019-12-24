import React from "react";
import TrelloActionButton from "../components/trelloActionButton.js";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import TrelloList from "../components/trelloList";
import styled from "styled-components";
import {connect} from "react-redux";
import {sort} from "../reducers/reduser-list";

const Trello = (props) => {
    let {lists} = props;
    const onDragEnd = (result) => {
        // the only one that is required
        console.log(result);
        const {destination, source, draggableId, type} = result;
        if (!destination) {
            return;
        }
        props.dispatch(sort(source.droppableId, destination.droppableId, source.index, destination.index, draggableId, type));
    };
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="all-lists" direction="horizontal" type="list">
                {
                    (provided) => (
                        <ListStyle ref={provided.innerRef} {...provided.droppableProps}>
                            {
                                lists.map((list, index) => {
                                    console.log(list);
                                    console.log(list.card);
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
};
const mapStateToProps = (state) => {
    return {
        lists: state.lists
    };
};

const ListStyle = styled.div`

display: flex;
`;

export default connect(mapStateToProps)(Trello);