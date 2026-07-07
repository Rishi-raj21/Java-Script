const user = {
    username : "Rajat",
    price : 999,

    welcomemsg : function(){
        console.log(`${this.username} , Welcome to website`)     //this keyword for current context

        console.log(this)
    }
}
user.welcomemsg()         //Rajat, Welcome to website
//user.username = "sam"     
//user.welcomemsg()         Sam, Welcome to website

console.log(this)   //11.20