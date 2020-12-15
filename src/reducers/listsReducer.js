import { CONSTANTS } from "../actions";

let listId = 2;
let cardId = 4;

const initialState = [
    {
        title: 'Por hacer',
        id: 0,
        cards: [
            {
                id: 0,
                text: 'Hacer video'
            },
            {
                id: 1,
                text: 'Terminar doc'
            },
        ]
    },
    {
        title: 'Haciendo',
        id: 1,
        cards: [
            {
                id: 0,
                text: 'Prototipo frontend'
            },
            {
                id: 1,
                text: 'Prototipo backend'
            },
            {
                id: 2,
                text: 'Prototipo backend'
            },
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listId
            }
            listId += 1;
            return [...state, newList];
            
        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardId
            }
            cardId += 1;

            const newState = state.map(list => {
                if(list.id === action.payload.listId) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            });

            return newState;

        default: 
            return state;
    }
}

export default listsReducer;