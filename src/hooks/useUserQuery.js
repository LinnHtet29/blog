import { QueryClient, useMutation, useQuery } from "react-query";
import toast from "react-hot-toast";
import router from "../routes";
import { useDispatch } from "react-redux";
import { switchSignInOrUp } from "../redux/features/system/formsModeSlice";
import { setUserInfo, setUserToken } from "../redux/features/auth/authSlice";

export const useUserQuery = (queryKey, queryFn) => {
  return useQuery(queryKey, queryFn);
};

export const useUserMutate = (mutationFn) => {
  const dispatch = useDispatch();
  return useMutation(mutationFn, {
    onSuccess: (response) => {
      const userData = response?.data?.data;
      if (userData) {
        if (userData.user && userData.token) {
          dispatch(setUserToken(userData.token));
          dispatch(setUserInfo(userData.user));
          toast.success("SignIn successful!");
          router.navigate(-1);
        } else if (userData.user) {
          toast.success("SignUp successful!");
          dispatch(switchSignInOrUp("signin"));
        } else {
          toast.error("Failed to sign up, try again later.");
        }
      } else {
        toast.error("Invalid response structure.");
      }
    },
    onError: () => {
      toast.error("There was an error.");
    },
    onSettled: () => {
      // QueryClient.invalidateQueries("create");
    },
  });
};
