import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions";


const initialState = {
    myFavorites: [],
    allCharacter: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_FAV:
        //     let copy = [...state.allCharacter, action.payload];
        //     return {
        //         ...state,
        //         // myFavorites: [...state.myFavorites, action.payload],
        //         myFavorites: copy,
        //         // allCharacter: [...state.allCharacter, action.payload]
        //         allCharacter: [...copy]
        //     }

        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacter: action.payload };
            
        // case REMOVE_FAV:
        //     let deleteCharacter = state.myFavorites.filter(character => character.id !== Number(action.payload))

        //     return {
        //         ...state,
        //         myFavorites: deleteCharacter
        //     }

        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload };
            

        case FILTER:
            let filtered = state.allCharacter.filter(character => character.gender === action.payload)    
            return{
                ...state,
                myFavorites: filtered
            }

        case ORDER:
            let ordered = [...state.allCharacter].sort((a, b) => {
                if (action.payload === 'A') {
                    return a.id - b.id;
                } else if (action.payload === 'D') {
                    return b.id - a.id
                } else {
                    return 0;
                }
            })
            return {
                ...state,
                myFavorites: ordered
            }
    
        default:
            return {
                ...state
            }
    }
};

export default reducer;