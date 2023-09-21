const express =  require('express')
const app = express()
const hbs = require('hbs')
const path =  require('path')



// static public path 
const static_path = path.join(__dirname,"../public")
app.use(express.static(static_path))



const hbspath =  path.join(__dirname,"../views/partials")
app.set('view engine' ,'hbs')
hbs.registerPartials(hbspath)



// files
app.get("/",(req,res)=>{
    res.render("home")
   
})

app.get("/about",(req,res)=>{
    res.render("about")
   
})
app.get("/weather",(req,res)=>{
    res.render("weather")
   
})

port =  process.env.PORT || 8001
app.listen(port,()=>{
    console.log(`server is listing on ${port}`)
})