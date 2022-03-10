

export default {
    name: "Header",
    
    computed: {
        vueName: function() {
            return this.$route.meta?.vueName
        }
    },

    data() {
        return {
            menuDisplayed: false
        }
    },

    methods: {
        displayMenu() {
            var btnBars = document.getElementById("btn-menu-bars");
            var btnClose = document.getElementById("btn-menu-times");
            var menuFloat = document.getElementById("menu-float");

            this.menuDisplayed = !this.menuDisplayed;

            if (this.menuDisplayed) {
                btnBars.classList.remove("apparition");
                btnBars.classList.add("disparition");
                
                btnClose.classList.remove("disparition");
                btnClose.classList.add("apparition");

                menuFloat.classList.remove("toLeft");
                menuFloat.classList.add("fromRight");
            } else {
                btnClose.classList.remove("apparition");
                btnClose.classList.add("disparition");
                
                btnBars.classList.remove("disparition");
                btnBars.classList.add("apparition");
                
                menuFloat.classList.remove("fromRight");
                menuFloat.classList.add("toLeft");
            }
        }
    }
}