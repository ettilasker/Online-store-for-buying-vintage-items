export const AddToCart = (product)=>{
    return{
        type : "ADDTOCART",
        payload: product
    };
};
export const DeleteProduct = (product)=>{
    return{
        type : "DELETEPRODUCT",
        payload: product
    };
};

