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
    switch(action.type){
        default: 
            return state;
    }
}

export default listsReducer;