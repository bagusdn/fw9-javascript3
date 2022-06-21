const getMonth = (callback) =>{
    setTimeout(() => {
        let error =true
        let month = ['January','February','March','April','May','June','July','August','September','October','November','December']
        if(!error){
            callback(null,month)
        }
        else{
            callback(new Error ('Sorry Data Not Found',[]))
        }
    }, 4000);
}
getMonth((param1,param2)=>{
    if(param1==null){
        let check = param2.map((newArray)=>{
            return newArray
        })
        console.log(check)
    }
    else{
        console.log(param1.message)
    }
})