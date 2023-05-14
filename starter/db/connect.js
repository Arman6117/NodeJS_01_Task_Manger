const mongoose = require("mongoose");
const connection =
  "mongodb+srv://admin-arman:mongo2505@cluster0.7pt4git.mongodb.net/Task-Manager?retryWrites=true&w=majority";

  const connectDB = (url) =>{
    mongoose
    .connect(url,{
      useNewUrlParser:true,
      useCreateIndex:true,
      useFindAndModify:false,
      useUnifiedTopology:true
    })
  
  }

  module.exports = connectDB;