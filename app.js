let app = new Vue({
    el: "#app",
    data: {
        rates:{},
        base: "",
        date: ""

    },
    created(){
        axios.get("https://api.exchangeratesapi.io/latest")
        .then((response) => {
            console.log(response.data.rate);
            this.rates = response.data.rates
            this.base = response.data.base
            this.date = response.data.date
        })
    } 
})






