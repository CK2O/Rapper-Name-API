const { request } = require("express")
const express = require("express")
const app = express()
const PORT=8000
const savage={
    "21 Savage":{ 
    "age": 29,
    "birthName": "Sheyaa Bin Abhraham-Joseph",
    "birtLocation": "London, England"
    },
    "Chance the Rapper":{ 
        "age": 29,
        "birthName": "Chancellor Bennet",
        "birtLocation": "Chicago, Illinois"
    }
}

app.get("/",(request, response)=>{
    reponse.sendFile(__dirname + "index.html")
})

app.get("/api", (request,response)=>{
    response.json(savage)
})

app.listen(PORT, ()=>{
    console.log(`The server running on port ${PORT} you better go catch it`)
})
