import { useState,useEffect } from "react";
import axios  from "axios";

const useFetch = (endpoint,query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    // console.log("This is the useFetch")
    // console.log("The endpoint", endpoint)

    const  options = {
        method: "GET",
        url: `${endpoint}`,
        headers: {
        },


        // url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        // headers: {
        // "X-RapidAPI-Key": '386646f091msh78fcc89efa06d88p161bc4jsn04c7304d601c',
        // "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        // },
        // params: { ...query },
    };
      
    const fetchData = async () => {
        setIsLoading(true);
    
        try {
            const response = await axios.request(options);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
          setError(error);
          // console.log(error)
        } finally {
          setIsLoading(false);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);
    
      const refetch = () => {
        setIsLoading(true);
        fetchData();
      };
    
      return { data, isLoading, error, refetch };
    };

export default useFetch;