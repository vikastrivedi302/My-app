// import {  useState ,useEffect } from "react";
import { useState } from "react";
import useRestaurantManu from "../utils/useRestaurantManu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MANU_API } from "../utils/contants";

const RestaurantManu = () => {

    // const [resInfo , setResInfo] = useState(null);

    const {resId} = useParams();

    const resInfo = useRestaurantManu(resId);

    const [showIndex, setShowIndex] = useState(null);

    // useEffect(()=>{
    //     fetchMenu();
    //   });

    // const fetchMenu = async () => {
    //     const data = await fetch(MANU_API+resId);
    //     const json = await data.json();
    //     setResInfo(json.data);
    // };

    if( resInfo=== null) return<Shimmer/>;


    const {name ,cuisines,  costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
     console.log(itemCards);
    //  console.log( resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

     const categories =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.["card"]?.["@type"]===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
     );
    //  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
         {cuisines}--{costForTwoMessage}</p> 

         {categories.map((category , index)=>(
          <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}
          showItems={index === showIndex ? true:false}
          setShowIndex={()=>setShowIndex(index)}
          />))}
    </div>
  )
}

export default RestaurantManu;

