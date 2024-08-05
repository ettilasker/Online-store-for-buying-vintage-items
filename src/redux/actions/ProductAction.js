export const DecreaseQty = (item)=>{
    return{
        type : "DECREASEQTY",
        item
        };
};

export const addQty = (product)=>{
    return{
        type : "ADDQTY",
        product
    };
};
