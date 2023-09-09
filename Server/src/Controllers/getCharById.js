const axios = require("axios");

const getCharById = (res,id)=>{
axios.get(`https://rickandmortyapi.com/api/character/${id}`)
.then((res)=>res.data)
.then((data)=>{
    let character ={
        id: data.id,
        name: data.name,
        gender:data.gender,
        origin: data.origin,
        image: data.image,
        status: data.status,
        species: data.species
    }

res.writeHead(200,{"Content-type":"application/json"}).end(JSON.stringify(character))
})
.catch((error)=>res.writeHead(500,{"Content-type":"text/plain"}).end(error.message))

};

module.exports={
    getCharById
}