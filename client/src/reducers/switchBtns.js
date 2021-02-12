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
        
        };
        case READ:
            return{
              ...state,

            };
      default:
        return state;
    }
  }