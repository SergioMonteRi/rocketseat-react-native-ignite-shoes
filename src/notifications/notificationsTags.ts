import { OneSignal } from "react-native-onesignal"

export function tagCardUpdate(itemsCount: string) {
    OneSignal.User.addTag("cart_items_count", itemsCount)
}

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
    OneSignal.User.removeTag("user_age")
    OneSignal.User.removeTag("user_name")
}