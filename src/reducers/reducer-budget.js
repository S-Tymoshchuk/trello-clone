const ADD_BUDGET = "ADD_BUDGET";
const DELETE_ITEM = "DELETE_ITEM";

let listId = 6;


const initial = [
    {
        totalIncome: 0,
        totalExpenses: 0,
        incomeFlow: [
            // {id: 0, type: "Расход", description: "магазин", amount: 22},
            // {id: 1, type: "Доход", description: "гараж", amount: 33},
            // {id: 2, type: "Расход", description: "продукты", amount: 44},
            // {id: 3, type: "Доход", description: "магазин", amount: 66},
            // {id: 4, type: "Доход", description: "гараж", amount: 222},
            // {id: 5, type: "Расход", description: "продукты", amount: 7777}
        ]
    }
];

const budgetReducer = (state = initial, action) => {

    switch (action.type) {

        case ADD_BUDGET: {
            const {checkType, description, amount} = action.payload;
            const newItem = {
                id: listId,
                type: checkType,
                description: description,
                amount: Number(amount)
            };
            listId += 1;

            const newIncome = state.map((list) => {

                return {...list, incomeFlow: [...list.incomeFlow, newItem]};

            });

            let total = newIncome[0].incomeFlow.map((list) => {
                return list.amount;

            }).reduce((accumulator, current) => accumulator + current);

            const result = newIncome.map((list) => {

                if (list.incomeFlow[0].type === "Доход") {
                    return {...list, totalIncome: total};
                }
                if (list.incomeFlow[0].type === "Расход") {
                    return {...list, totalExpenses: total};
                }
            });
            return result;

        }


        case DELETE_ITEM:
            const idx = state[0].incomeFlow.findIndex((list) => {
                return list.id === action.payload;
            });
            const result = state.map((list) => {
                return {
                    ...list,
                    //totalIncome: totalIncome,
                    incomeFlow: [...list.incomeFlow.slice(0, idx), ...list.incomeFlow.slice(idx + 1)]
                };
            });
            return result;
        default:
            return state;
    }
};

export const deleteItemAction = (itemId) => {
    return {
        type: DELETE_ITEM,
        payload: itemId
    };
};

export const addBudget = (checkType, description, amount) => {
    return {
        type: ADD_BUDGET,
        payload: {
            checkType, description, amount
        }
    };
};

export default budgetReducer;