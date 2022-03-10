export default {
    name: "ProjectsWeb",

    data() {
        return {
            urlBlackJack: process.env.VUE_APP_BLACKJACK_URL,
            urlEmergency: process.env.VUE_APP_EMERGENCY_URL
        }
    }
}