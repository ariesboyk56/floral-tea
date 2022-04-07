export const SET_NOTIFICATION = "SET_NOTIFICATION"

export interface INotification {
    message: string,
    type: "success" | "error" | "warning"
}

interface ISetNotificationAction {
    type: typeof SET_NOTIFICATION,
    payload: INotification,
}

export type NotificationAction = ISetNotificationAction;