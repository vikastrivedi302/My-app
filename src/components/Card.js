import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCard } from "../utils/cardSlice";

const Card =() => {
    const cardItems = useSelector((store)=> store.card.items);

    const dispatch = useDispatch();

    const handleClearCard = () =>{
        dispatch(clearCard());
    };


    return (
        <div className="bg-orange-50">
    <div className="text-center m-4 p-4 ">
        <h1 className="text-2xl font-bold ">Card</h1>
        <div className="w-6/12 m-auto bg-stone-400">
        <button className="p-2 m-2 bg-black text-white rounded-xl"
        onClick={handleClearCard}>Clear-Card</button>
        {cardItems.length === 0 && <h1>Card is Empty You can go to home page to view more restaurants😕!</h1> } 
            <ItemList items={cardItems}/>
        </div>

    </div>
    </div>
    );
};


export default Card;