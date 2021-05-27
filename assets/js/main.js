const root = new Vue({
    el:"#root",

    data:{
        emailAddresses:[],
    },

    methods:"",

    mounted(){
        for (let i = 0; i < 10; i ++){
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response =>{
                // console.log(response.data.response);
                emailAddress = response.data.response
                console.log(emailAddress);
                this.emailAddresses.push(emailAddress);
                console.log(this.emailAddresses);
            })
        }
    }
})