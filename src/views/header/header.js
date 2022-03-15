

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
            if (window.innerWidth > 1200) return;
            
            var btnBars = document.getElementById("btn-menu-bars");
            var btnClose = document.getElementById("btn-menu-times");
            var menuFloat = document.getElementById("menu-float");

            this.menuDisplayed = !this.menuDisplayed;

            if (this.menuDisplayed) {
                //Buttons
                btnBars.classList.remove("apparition");
                btnBars.classList.add("disparition");
                
                btnClose.classList.remove("disparition");
                btnClose.classList.add("apparition");

                //Menu
                menuFloat.classList.remove("disparition-menu");
                menuFloat.classList.add("apparition-menu");
            } else {
                btnClose.classList.remove("apparition");
                btnClose.classList.add("disparition");
                
                btnBars.classList.remove("disparition");
                btnBars.classList.add("apparition");
                
                menuFloat.classList.remove("apparition-menu");
                menuFloat.classList.add("disparition-menu");
            }
        }
    }
}