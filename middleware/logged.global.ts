import { userAuthenticated } from "./auth"

export default defineNuxtRouteMiddleware((to) => {
    const accessToken = useCookie('accessToken')

    return
    // if (!userAuthenticated(accessToken.value))
        // в pinia ставим isLoggedIn = false
})