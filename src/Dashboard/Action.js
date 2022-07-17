export const Increment = (id) => {
    return{
        type: 'INCREMENT',
        payload: id + 1
    };
};
