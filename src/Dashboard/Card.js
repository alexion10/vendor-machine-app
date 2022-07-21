import { useDispatch } from "react-redux"
import { ManageItem, Decrement } from "../menuInteraction/Action"

export function Card ({id, name, price, quantity, color}) {
    const dispatch = useDispatch();
    const dispatchMultiple = (id, price) => {
            dispatch(ManageItem(id))
            dispatch(Decrement(price))
    }
    return (
        <div className="card">
            <p style={{background: color}}>{price}</p>
            <p>{name}</p>
            <p>{quantity}</p>
            <button onClick={()=>{dispatchMultiple(id, price)}}>Take product!</button>
        </div>
    )
}