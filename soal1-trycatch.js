const cekHariKerja = (day)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if (cek){
                resolve(cek)
            }
            else {
                reject(new Error ('Hari ini bukan hari kerja'))
            }
        }, 3000);
    })
}

result = async() =>{
    try {
        let data = await cekHariKerja('senin')
        console.log(`${data} adalah hari kerja`)
    }
    catch(err){
        console.log(err.message)
    }
}
result()