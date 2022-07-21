import { useSelector } from "react-redux";
import { Card } from "./Card";

export const Products = () => {
    const productList = useSelector(state => state.counter.products)
    return (
        <div>
            {productList.map(i=>{
            return <Card key={i.id} id={i.id} name={i.name} price={i.price} quantity={i.quantity} color={i.color}/>
            })}
        </div>
    )
}