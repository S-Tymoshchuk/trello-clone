const ADD_LIST = "ADD_LIST";
const ADD_CARD = "ADD_CARD";
const DRAG_HAPPEND = "DRAG_HAPPEND";

let listId = 2;
let cardId = 5;

const initial = [
    {
        title: "Episode",
        id: `list-${0}`,
        card: [
            {
                id: `card-${0}`,
                text: "Обертиллиах-2019. Меркушина добыла серебро в короткой индивидуальной гонке"
            },
            {
                id: `card-${1}`,
                text: "Владимир ШАРАН: «Заря – сильнейшая команда в УПЛ после Шахтера»"
            },
        ]
    },
    {
        title: "Episode 1",
        id: `list-${1}`,
        card: [
            {
                id: `card-${2}`,
                text: "Notice that because we used the ES6 shorthand for defining an object literal"
            },
            {
                id: `card-${3}`,
                text: "Also, the resulting names are a bit odd. It's generally not a good practice to actually include words like \"reducer\" in your state key names"
            },
        ]
    }
];

const listReducer = (state = initial, action) => {
    switch (action.type) {
        case ADD_LIST:
            const newItem = {
                title: action.payload,
                id: `list-${listId}`,
                card: []
            };
            listId += 1;
            return [...state, newItem];

        case ADD_CARD: {
            const newItem = {

                id: `list-${cardId}`,
                text: action.payload.text
            };
            cardId += 1;
            const newCard = state.map((list) => {
                if (list.id === action.payload.listId) {
                    return {...list, card: [...list.card, newItem]};
                }
                return list;
            });
            return newCard;
        }
        case DRAG_HAPPEND:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId,
                type
            } = action.payload;
            const newState = [...state];
            if (type === "list") {
                const newList = newState.splice(droppableIndexStart, 1);
                newState.splice(droppableIndexEnd, 0, ...newList);
                return newState;
            }

            //same list
            if (droppableIdStart === droppableIdEnd) {

                const list = state.find(list => droppableIdStart === list.id);
                const card = list.card.splice(droppableIndexStart, 1);
                list.card.splice(droppableIndexEnd, 0, ...card);
            }
            if (droppableIdStart !== droppableIdEnd) {

                // найти список, где произошло перетаскивание
                const listStart = state.find(list => droppableIdStart === list.id);
               //вытащить карточку из этого списка
                const card = listStart.card.splice(droppableIndexStart, 1);
                //найти список, где перетаскивание закончилось
                const listEnd = state.find(list => droppableIdEnd === list.id);
                // положить карту в новый список
                listEnd.card.splice(droppableIndexEnd, 0, ...card);
            }
            return newState;
        default:
            return state;
    }
};

export const addList = (text) => {
    return {type: ADD_LIST, payload: text};
};

export const addCard = (text, listId) => {
    return {type: ADD_CARD, payload: {text, listId}};
};

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
) => {
    return {
        type: DRAG_HAPPEND,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
            type
        }
    };
};

export default listReducer;