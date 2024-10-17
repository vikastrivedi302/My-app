import ItemList from "./ItemList";
// import { useState } from "react";
const RestaurantCategory = ({data , showItems , setShowIndex})=>{
    // console.log(data);
    // const [showItems , setShowItems] = useState(false);


    const handleClick = () => {
      // setShowItems(!showItems);
      setShowIndex();
    }
    return (
    <div>
        <div className="w-6/12 p-4 mx-auto my-4 bg-gray-200 shadow-xl  "> 
           <div className="flex justify-between cursor-pointer" onClick={handleClick}>
              <span className="font-bold text-lg">
                {data.title} ({data.itemCards.length})
                </span>
              <span>⬇</span>
           </div>
        {showItems && <ItemList items={data.itemCards}/>}
    </div>
    
    </div>
    );
};

export default RestaurantCategory;