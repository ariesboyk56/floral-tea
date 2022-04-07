import { INotification, NotificationAction, SET_NOTIFICATION } from '../constants/notificationConstant';


export const setNotification = (notification: INotification): NotificationAction => {
    return {
        type: SET_NOTIFICATION,
        payload: notification
    }
}