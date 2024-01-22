import { useQuery } from "react-query";

const fetchData = async (apiFunction) => (await apiFunction()).data;

const useCachedQuery = (queryKey, apiFunction) => {
  return useQuery(queryKey, () => fetchData(apiFunction));
};

export default useCachedQuery;
