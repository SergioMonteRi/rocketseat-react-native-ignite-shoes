import { OneSignal } from "react-native-onesignal"

export function tagUserInfoCreate() {
    OneSignal.User.addTags({
        "user_name": "Sergio Ribeiro",
        "user_age": "25",
        "user_email": "sergio.ribeiro@newgo.com"
    })
}

export function tagUserEmailCreate(email: string) {
    OneSignal.User.addTag("user_email", email)
}

export function tagUserEmailRemove() {
    OneSignal.User.removeTag("user_email")
}