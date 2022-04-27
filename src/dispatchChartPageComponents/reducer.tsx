
export const initialState = {
    allConfirmed: false,
    isUserCodeCorrect: false,
    isAlertVisible:false,
    errorTrue:false,
  };
  
 export const confirmationReducer = (state, action) => {
    switch (action.type) {
      case 'PO_CONFIRMATION_SUCCESS': {
        return {
          ...state,
          allConfirmed: true,
        };
      }
      case 'PO_CONFIRMATION_FAILED': {
        return {
          ...state,
          allConfirmed: false,
        };
      }
      case 'WORKER_CONFIRMATION_SUCCESS': {
        return {
          ...state,
          isUserCodeCorrect: true,
        };
      }
      case 'WORKER_CONFIRMATION_FAILED': {
        return {
          ...state,
          isUserCodeCorrect: false,
        };
      }
      case 'ALERT_VISIBLE': {
        return {
          ...state,
          isAlertVisible:true,
        };
      }
      case 'ALERT_NO_VISIBLE': {
        return {
          ...state,
          isAlertVisible:false,
        };
      }
      case 'ERROR_TRUE': {
        return {
          ...state,
          errorTrue:true,
        };
      }
      case 'ERROR_FALSE': {
        return {
          ...state,
          errorTrue:false,
        };
      }
      default: return state;
    }
  }