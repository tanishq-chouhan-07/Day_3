type EmailNotification = {
  type: "email";
  email: string;
  subject: string;
};

type SMSNotification = {
  type: "sms";
  phoneNumber: string;
  message: string;
};

type PushNotification = {
  type: "push";
  deviceId: string;
  title: string;
};

type Notify =
  | EmailNotification
  | SMSNotification
  | PushNotification;

function isEmailNotification(Notification : Notify) : Notification is EmailNotification {
    return Notification.type == "email";
}

function sendNotification (Notification : Notify) : string {
    switch (Notification.type) {
        case "email":
            return `Sending email to ${Notification.email} with subject ${Notification.subject}`
            
        case "push" :
            return `Sending push notification to ${Notification.deviceId}: ${Notification.title}`
            case "sms":
                return `Sending SMS to ${
            Notification.phoneNumber
                }:${Notification.message}`

        default:
            return "some notification";
            
    }
}


