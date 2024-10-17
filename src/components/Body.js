import RestaurantCard from "./RestaurantCard";
import {  useEffect, useState , useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";

const Body = () =>{

    const [listOfRestaurant , setListOfRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const [filteredRestaurant, setFilterdRestaurant] = useState([]);

    // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    console.log("Body Reanderd", listOfRestaurant);

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        // console.log(json);
        setListOfRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterdRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // setListOfRestaurant(json.data.cards[0].card.card.gridElements.infoWithStyle.info[3])
    }; 

    const onlineStatus= useOnlinestatus();

    const {loggedInUser , setUserName} = useContext(UserContext); 

    if(onlineStatus=== false) 
    return (
    <h1>..Checking the network cables, modem, and router Or
    ..Reconnecting to Wi-Fi Or
    ..Running Windows Network Diagnostics</h1>
    );
   

    // const {loggedInUser,setUserName}= useContext(UserContext);

    return listOfRestaurant.length=== 0 ? (<Shimmer/>) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input
                     type="text"
                      className="border border-solid border-black " 
                      value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>

                    
                    <button className="px-4 py-2 mx-4 bg-green-200 rounded-lg"
                    onClick={()=>{
                        //filter the resautrant card and updated ui
                        const filteredRestaurant = listOfRestaurant.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                      
                        );
                        // console.log(searchText);

                        setFilterdRestaurant(filteredRestaurant);
                    }}>Search
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-200 rounded-lg"
                 onClick={()=>{
                    const filteredList = listOfRestaurant.filter(
                        (res)=> res.info.avgRating > 4
                    );
                    setListOfRestaurant(filteredList); 
                }}
                >
                    Top Rated Restaurants
                </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName: </label>
                    <input className=" border border-black p-2"
                    value={loggedInUser}
                    onChange={(e)=> setUserName(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant)=>(
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        {/* {restaurant.data.promoted ? (
                            
                        )

                        } */}
                        <RestaurantCard  resData = {restaurant}/></Link>
                ))}

            </div>
        </div>
    )
  }

  export default Body;