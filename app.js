const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const PORT = 3000

/* 
GET: /api/combine?name1=James&name2=Alvin 
*/
app.get("/api/combine", (req, res)=> {

    let result = {
        name1:"",
        name2:"",
        results: []
    }

    // extract the query string params 


    // compute combinations 


    // create array of results
    result.results.push({id: 1, name:"Johnob", goodness:3.4} )


    // write the results to a file
    const filePath = path.join(__dirname, "/logs/output.log")
    //console.log(filePath)
    fs.appendFile(filePath, `${new Date().toISOString()} | ${JSON.stringify(result)}\n`, (err)=> {
        console.log(err)
    })

    //send back the response with the data
    res.json(result)
})

/*
{   
    "name1":"John", 
    "name2":"Bob", 
    "results": [{"id":1, "name":"JohnBob", "goodness":4.0},
                {"id":2, "name":"Bohn",    "goodness":1.0}
                {"id":3, "name":"Johob",   "goodness":3.5}] 
}
*/





app.listen(PORT, ()=> {
    console.log(`Server started on http://localhost:${PORT}`)
})