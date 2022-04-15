export const getAllPixxasReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PIXXAS_REQUEST":
      return {
        ...state,
      };
    case "GET_PIXXAS_SUCCESS":
      return {
        pixxas: action.payload,
      };
    case "GET_PIXXAS_FAILED":
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
