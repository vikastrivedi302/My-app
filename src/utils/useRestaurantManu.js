import { useEffect, useState } from "react";
import { MANU_API } from "./contants";


const useRestaurantManu = (resId) => {

    const [resInfo , setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    });

    const fetchData = async () => {
        const data = await fetch(MANU_API + resId);

        const json = await data.json();

        setResInfo(json.data);
    };

    return resInfo ;

};

export default useRestaurantManu;