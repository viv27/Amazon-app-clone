export const initialState = {
    basket: [],
    user: null
}

export const getTotalPrice = (basket) => basket.reduce((accum, item) => {
    accum = accum + Number(item.price);
    return accum
}, 0)

export const ACTION_TYPES = {
    AdD_TO_BASKET: 'AdD_TO_BASKET',
    REMOVE_FROM_BASKET: 'REMOVE_FROM_BASKET',
    SET_USER: 'SET_USER'
}

function reducer(state, action){
    switch(action.type) {
        case ACTION_TYPES.AdD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case ACTION_TYPES.REMOVE_FROM_BASKET:
            const index = state.basket.findIndex(item => item.id === action.id)
            const newBasket = [...state.basket]
            if(index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn('Item not found')
            }
            
            return {
                ...state,
                basket: newBasket
            }
               
        case ACTION_TYPES.SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default reducer