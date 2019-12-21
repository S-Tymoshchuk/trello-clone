import React from "react";
import TrelloCard from "./trelloCard";
import styled from "styled-components";
import TrelloActionButton from "./trelloActionButton";
import {Droppable, Draggable} from "react-beautiful-dnd";

const TrelloList = ({title, cards, listId, index}) => {

    return (
        <Draggable draggableId={listId} index={index}>
            {
                (provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps}
                         {...provided.dragHandleProps}>
                        <Droppable droppableId={String(listId)}>
                            {
                                (provided) => (
                                    <ContainerStyled ref={provided.innerRef} {...provided.droppableProps}>
                                        <h4>{title}</h4>
                                        {
                                            cards.map((card, index) => {
                                                return <TrelloCard key={card.id} text={card.text} id={card.id}
                                                                   index={index}/>;
                                            })
                                        }
                                        {provided.placeholder}
                                        <TrelloActionButton listId={listId} list/>
                                    </ContainerStyled>
                                )
                            }

                        </Droppable>
                    </div>
                )
            }

        </Draggable>
    );
};

const ContainerStyled = styled.div`
background-color: #dfe3e6;
border-radius: 3px;
width: 300px;
padding: 8px;
margin-right: 8px;
`;


export default TrelloList;