import { v4 as uuid } from "uuid"
// Action Creators
export const addAuthor = (author) =>{
    return{
        type: "authors/add",
        payload: author,
    }
}

export const removeAuthor = (id) =>{
    return{
        type: "authors/remove",
        payload: id,
    }
}

// Reducers
const initialState = []

export default function authorsReducer(state = initialState, action){
    switch(action.type){
            case "authors/add":
                return [
                   ...state,
                    action.payload
                ]
            case "authors/remove":
                return state.filter((author) => author.id !== action.payload)

                // Here, we are checking to see if authorName matches with the name dispatched
                // from the BookInput component. If the name already exists, state is returned unchanged
                // If the name isn't present, it is added to the author array.
            case "books/add":
                const existingAuthor = state.find((author) => author.authorName === action.payload.authorName)

            if (existingAuthor){
                return state
            } else{
                return [...state, {authorName: action.payload.authorName, id: uuid()}]
            }

            default:
                return state
            }

            
}