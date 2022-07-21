export const counter = (state = {
    money: 0,
    msg: '',
    products : [
        {id: 1, name: "Cola", price: 5, quantity: 10, color: 'red'},
        {id: 2, name: "Fanta", price: 5, quantity: 8, color: 'aliceblue'},
        {id: 3, name: "Bucovina", price: 2, quantity: 10, color: 'lightblue'},
        {id: 4, name: "Nestea", price: 7, quantity: 10, color: 'yellow'},
        {id: 5, name: "Poiana", price: 6, quantity: 5, color: 'gray'},
        {id: 6, name: "Kinder", price: 10, quantity: 3, color: 'purple'}
    ]
}, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {...state, money: state.money+action.payload, msg:''};
        case "DECREMENT":
            const noMoney = (state.money < action.payload) ? 'Insert more money' : '';          
            return {...state, money: (state.money > action.payload) ? state.money-action.payload : state.money, msg: noMoney};    
        case "WITHDRAW":
            return {...state, money: state.money*0};
        case "MANAGEITEMQUANTITY":
            const item = state.products.find((prod)=> prod.id === action.payload);
            return {...state, products: state.products.map((i)=>((item.id === i.id) && (i.quantity > 0) && (item.price < state.money) ) ? {...i,  quantity: i.quantity - 1} : i)};
        default:
            return state;
    }
}