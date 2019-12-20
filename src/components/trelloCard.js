import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import {Draggable} from "react-beautiful-dnd";


const TrelloCard = ({text, id,index}) => {
    return (
        <Draggable draggableId={String(id)} index={index}>
            {
                (provided) => (
                    <CardStyle ref={provided.innerRef}
                               {...provided.draggableProps}
                               {...provided.dragHandleProps}>
                        <Card>
                            <CardContent>
                                <Typography>
                                    {text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardStyle>
                )
            }

        </Draggable>
    );
};

const CardStyle = styled.div`
  margin-top: 8px;
`;

export default TrelloCard;