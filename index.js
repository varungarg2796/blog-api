const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();

app.use(express());
require('dotenv').config();
app.use(cors());
app.use(express.json());


const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI , {
            useUnifiedTopology: true,
            useNewUrlParser: true
          });
        console.log('db connected..!');
    }
    catch(err){
        console.log(err);
    }
};
connectDB();

let blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: String,
    created: Date
});

let blog = mongoose.model('blogSchema', blogSchema)

app.listen('4300', ()=>{
    console.log('listening on port 4300');
})

app.get('/', (req,res)=>{
    res.json({
        message: 'Blog API!!'
    })
})

//GET ALL BLOGS
app.get('/blogs', (req,res) =>{
    blog.find().then(blogs => {res.json(blogs)});
})

app.post('/blog', (req,res,err) => {

    if(err){
        console.log(err);
    }

    const blogPost = new blog({
        title: req.body.title.toString(),
        content: req.body.content.toString(),
        created: new Date()
    })

    console.log(blogPost);

    blogPost.save( function(err, response){
        if (err) return console.log(err);
        return res.json(response);
    })
    
})