const manga = (title) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dataManga = require("./data3-2")
            
            if (typeof title == 'string'){
                const search = title.toLocaleLowerCase()
                let check = dataManga.filter((e)=>{
                    return e.title.toLocaleLowerCase().includes(search)
                })

                if (check.length >= 1){
                    resolve(check)
                }
                else{
                    reject(new Error ("Title Not Found"))
                }
            }
            else{
                reject(new Error ("Input not Correct"))
            }
        },3000)
    })
}
manga("Tougen Anki")
.then((result)=>{
    result.forEach(element =>{
        console.log(`${element.title} memiliki ${element.chapter} chapter`)
    })
}).catch((error)=>{
    console.log(error.message)
})