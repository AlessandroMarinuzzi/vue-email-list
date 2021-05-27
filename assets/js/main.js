const root = new Vue({
    el:"#root",

    data:{
        emailAddress:"",
    },

    methods:"",

    mounted(){
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response =>{
            // console.log(response.data.response);
            emailAddress = response.data.response
            console.log(emailAddress);
        })
    }
})