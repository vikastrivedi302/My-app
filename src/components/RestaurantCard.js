import { useContext } from "react";
import { CDN_URL } from "../utils/contants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    // console.log(props)
    const { resData } = props;

    const {loggedInUser}= useContext(UserContext);

    const {cloudinaryImageId, name,
        cuisines,avgRating,costForTwo,sla
    } = resData?.info;
   
    return(
        <div className="m-4 p-4 w-[250px] rounded-xl bg-gray-200 hover:bg-gray-400">
            <img 
            className="rounded-xl" 
            alt="res-logo"
            src=
            {CDN_URL + cloudinaryImageId
            }
            />
            {/* <h3>{resData.cards.card[5].card.gridElements.infoWithStyle.info.name}</h3> */}
            <h4 className="font-bold py-4 text-lg">{name}</h4>
             <h4>{cuisines.join(", ")}</h4>
             <h4>{avgRating}stars</h4>
            <h4>{costForTwo}FOR TWO</h4>
            <h4>{sla.slaString}</h4>
            <h4>User: {loggedInUser}</h4>
            



        </div>
    )
   
};

// export const withPromotedLabel = (RestaurantCard)=>{
//     return(props) => {
//         return(
//             <div>
//                 <label>Promoted</label>
//                 <RestaurantCard{...props}/>
//             </div>
//         )
//     }
// }
export default RestaurantCard;