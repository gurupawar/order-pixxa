import axios from "axios";
export const getAllPixxas = () => async (dispatch) => {
  dispatch({
    type: "GET_PIXXAS_REQUEST",
  });

  try {
    const response = await axios.get("/api/pixxas/getallpixxas");
    console.log(response);
    dispatch({
      type: "GET_PIXXAS_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_PIXXAS_FAILED",
      payload: error,
    });
  }
};
