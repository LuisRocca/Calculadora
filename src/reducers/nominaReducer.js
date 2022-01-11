import { types } from "../types/types";

const initialSatate = {
  data: [],
};

export const nominaReducer = (state = {}, action) => {
  switch (action.type) {
    case types.nominaAdd:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case types.nominaRead:
      return {
        ...state,
        data: action.payload,
      //   nomina: action.payload,
      };
    case types.nominaDelete:
      return {
            ...state,
            data: state.data.filter(( nomina => {
                  return nomina.id !== action.payload
            }))
      }

    case types.nominaClear:
      return {
            ...state,
            data: [],
      }
    default:
      return state;
  }
};
