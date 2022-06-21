
const fetch = require('fetch').fetchUrl;
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>console.log(data))
    .then(json=>{
        json.forEach(element=>{
            console.log(element.name)
        })
    })
    .catch(error=>{
        console.log("Error")
    })





