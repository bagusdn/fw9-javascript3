const getMonth = (callback) =>{
    setTimeout(() => {
        let error =false
        let month = ['January','February','March','April','May','June','July','August','September','October','November','December']
        if(!error){
            callback(null,month)
        } // jika nilai error bernilai false maka response callback akan mencetak kembali data bulan
        else{
            callback(new Error ('Sorry Data Not Found',[]))
        }
    }, 4000);
}
getMonth((param1,param2)=>{
    if(param1==null){
        let check = param2.map((newArray)=>{
            return newArray
        })// fungsi callback apabila param1 bernilai null dan nilai error bernilai false
        console.log(check)
    }
    else{
        console.log(param1.message) // error mesage
    }
})