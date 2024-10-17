
import { LOGO_URL } from "../utils/contants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";
// import Login from "./Login";

const Header = () => {

    const [btnNameReact , setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlinestatus();

    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser);

    const cardItems = useSelector((store) => store.card.items);
    console.log(cardItems);
    // useEffect(()=> {
    //     console.log("useEffect Called")
    // }, [btnNameReact]);
    return (
        <div className="flex justify-between bg-pink-200 shadow-xl sm:bg-yellow-50 lg:bg-gray-100">
            <div className="logo-container">
                <img 
                className="w-28"
                alt="logo"
                src={ LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-6">Online Status: {onlineStatus ? "✅" : "🚫"}</li>
                    <li className="px-6"><Link to="/">Home</Link></li>
                    <li className="px-6"><Link to="/about">About-Us</Link></li>
                    <li className="px-6"><Link to="/contact">Contect-Us</Link></li>
                    <li className="px-6"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-6 font-bold text-xl">
                    <Link to="/card">🗃Cart({cardItems.length} items)</Link></li>
                    <button 
                      className="login" 
                      onClick={ () =>  {
                        
                        btnNameReact === "Login"
                        ? setBtnNameReact("LogOut"):
                        setBtnNameReact("Login");
                    }}
                    >
                            {btnNameReact}
                        </button>
                        <li className="px-6 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header ;