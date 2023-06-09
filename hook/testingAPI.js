import { useState, useEffect } from "react";
import axios from "axios";

const testingAPI = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    // url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    // headers: {
    //   "X-RapidAPI-Key": '386646f091msh78fcc89efa06d88p161bc4jsn04c7304d601c',
    //   "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    // },
    url: `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`,
    headers: {
    },
    // params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
        const response = await axios.request(options);
        // console.log(response.data.meals)
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

export default testingAPI;