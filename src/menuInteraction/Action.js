export const Increment = (number) => {
    return{
        type: 'INCREMENT',
        payload: number
    };
};

export const Decrement = (price) => {
    return {
        type: 'DECREMENT',
        payload: price
    }
}

export const Withdraw = (number) => {
    return{
        type: 'WITHDRAW'
    };
};


export const ManageItem = (id) => {
    return {
        type: 'MANAGEITEMQUANTITY',
        payload: id
    }
}

