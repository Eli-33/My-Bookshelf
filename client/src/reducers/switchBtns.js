import { WANT_TO_READ, CURRENTLY_READING , READ } from "../actions/types";

const initialBtn = {
  
}

  
  export default function(state = initialBtn, action) {
    switch (action.type) {
      case WANT_TO_READ:
        return {
          ...state,
        };
      case CURRENTLY_READING:
        return {
          ...state,
          loading: true
        };
        case READ:
            return{

            };
      default:
        return state;
    }
  }