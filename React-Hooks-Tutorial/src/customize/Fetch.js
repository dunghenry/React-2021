import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const ourRequest = axios.CancelToken.source();
    async function fetchData() {
      try {
        const res = await axios.get(url, {
          cancelToken: ourRequest.token,
        });
        const data = res.data.locations;
        setData(data);
      } catch (error) {
        if (axios.isCancel(error)) {
            console.log('Request canceled', error.message);
        }
      }
    }
    setTimeout(() => {
      fetchData();
    }, 3000);

    return () => {
        ourRequest.cancel('Operation canceled by the user!')
    };
  }, []);
  return {
    data,
  };
};
export default useFetch;
