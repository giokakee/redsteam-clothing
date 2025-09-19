import authApi from "../../api/authApi";
import { setUser, setLoading, setError } from "./authSlice";

export const registerUser = (formData) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await authApi.register(formData);
    dispatch(setUser(res.data));
  } catch (err) {
    dispatch(setError(err.response?.data?.message || "Registration failed"));
  } finally {
    dispatch(setLoading(false));
  }
};

export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const res = await authApi.login(credentials);
    dispatch(setUser(res.data));
  } catch (err) {
    dispatch(setError(err.response?.data?.message || "Login failed"));
  } finally {
    dispatch(setLoading(false));
  }
};
