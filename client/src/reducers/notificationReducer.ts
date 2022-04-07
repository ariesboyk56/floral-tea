import { INotification, NotificationAction, SET_NOTIFICATION } from '../constants/notificationConstant';


const initialState: INotification = {
    message: "",
    type: "success"
};

const notificationReducer = (state = initialState, action: NotificationAction) => {
    switch(action.type) {
        case SET_NOTIFICATION:
          return {
            message: action.payload.message,
            type: action.payload.type
          }
        default: 
          return state;
      }
}

export default notificationReducer