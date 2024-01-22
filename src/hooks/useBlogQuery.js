import { useQuery } from "react-query";

export const useBlogQuery = (queryKey, queryFn) => {
  return useQuery(queryKey, queryFn);
};
