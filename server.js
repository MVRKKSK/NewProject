const app = require("express")()
const server = require("http").Server(app)
const next = require('next')
const connectdb = require("./database/db")
const dev = process.env.NODE_ENV !== 'production'
const port = 3000

// when using middleware `hostname` and `port` must be provided below
const nextapp = next({ dev })
const handle = nextapp.getRequestHandler()
connectdb();

nextapp.prepare().then(() => {
    app.all("*" , (req , res) => {
        handle(req ,res)
    })

    server.listen(port , err => {
        if(err){
            throw err
        }
        console.log(`Server is running on http://localhost:${port}`)

    })
})
