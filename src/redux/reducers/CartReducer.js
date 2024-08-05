
const cart = []
export const CartReducer = (state = cart, action) => {
    switch (action.type) {
        case ("ADDTOCART"):
           {
                let flag = 0;
                state.map(element => {
                    if (element.id == action.payload.id)
                        flag = 1;
                })
                if (!flag) {
                    return [...state, action.payload];
                }
                return state
            }
        case ("DELETEPRODUCT"):
            action.payload.qty += action.payload.qtyInCart;
            action.payload.qtyInCart = 0;
            return state.filter((product) => product !== action.payload);
    }
    return state
}
