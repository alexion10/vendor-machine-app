import { useDispatch, useSelector } from "react-redux/es/exports";
import { Increment } from "./Action";

export function Card () {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)
    console.log(1)
    return (
        <div className="card">
            {counter}
            <button onClick={()=>{dispatch(Increment(1))}}>Apasa!</button>
        </div>
    )
}