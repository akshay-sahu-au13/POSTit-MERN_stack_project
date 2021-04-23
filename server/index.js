import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
const PORT = process.env.PORT || 5123;
const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Routes
app.use('/posts',postRoutes);

//MongoDB connection
const MongoURI = "mongodb+srv://akshay:admin@cluster0.3sl2w.mongodb.net/post_it?retryWrites=true&w=majority" ;

mongoose.connect(MongoURI,{useNewUrlParser:true, useUnifiedTopology:true}, (err,connection)=>{
    if (connection){
        console.log("DB Connected!");
        app.listen(PORT, ()=>{
            console.log(`Listening to http://localhost:${PORT}`);
        })
    }
    if (err){
        console.log("Error in DB connection", err.message);
    }
})

mongoose.set('useFindAndModify', false);