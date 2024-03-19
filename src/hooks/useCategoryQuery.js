import { useQuery, useMutation } from "react-query";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  startLoading,
  stopLoading,
} from "../redux/features/system/loadingSlice";

export const useCategoryQuery = (queryKey, queryFn) => {
  return useQuery(queryKey, queryFn);
};

export const useCategoryMutation = (mutationFn) => {
  const dispatch = useDispatch();
  return useMutation(mutationFn, {
    onSuccess: (response) => {
      if (response.status === 201) {
        setTimeout(() => {
          dispatch(stopLoading());
          toast.success("Add category successful");
        }, 800);
      }
      if (response.status === "success") {
        setTimeout(() => {
          toast.success("Delete category successful");
        }, 800);
      }
    },
    onError: (error) => {
      dispatch(stopLoading());
      toast.error(error.response.data.message);
    },
    onSettled: () => {
      // QueryClient.invalidateQueries("create");
    },
  });
};
