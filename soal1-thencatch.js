const cekHariKerja = (day)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            }) // pengecekan apakah parameter day ada pada dataDay
            if (cek){
                resolve(cek)
            } // apabila true(parameter day ada pada dataDay)
            else {
                reject(new Error ('Hari ini bukan hari kerja'))
            } /// apabila cek bernilai false maka akan langsung masuk ke catch dan mencetak error message
        }, 3000); // proses selama 3 detik
    })
}

cekHariKerja('minggu')
.then((result)=>{
    console.log(`${result} adalah hari kerja`)
})
.catch((err)=>{
    console.log(err.message)
})