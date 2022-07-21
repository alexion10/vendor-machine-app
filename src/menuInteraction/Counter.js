import { useDispatch, useSelector } from "react-redux";
import { Increment, Withdraw } from "./Action";


export const Menu =  () => {
    const dispatch = useDispatch();
    const money = useSelector(state => state.counter.money);
    const mesaj = useSelector(state => state.counter.msg);
    return (
        <div className="menu">
            <p>{money}</p>
            <button onClick={()=>{dispatch(Increment(1))}}>Add 1 RON</button>
            <button onClick={()=>{dispatch(Increment(5))}}>Add 5 RON</button>
            <button onClick={()=>{dispatch(Increment(10))}}>Add 10 RON</button>
            <button onClick={()=>{dispatch(Withdraw())}}>Take your Money</button>
            <p>{mesaj}</p>
        </div>
    )
}