Aim is to develop a simple blog-api which is connected to database (mongoDB) and allows us to CREATE and READ blog posts.
**Main takeaway is to connect your app to mongoDB cloud and interact with it!** 

Pre-requisites- 
1) Have 'now' configured in your terminal
2) Postman for testing post requests (free software!)
3) Account on MongoDB Atlas (cloud) [gives you 512MB and 1 cluster for free]
4) Install express, mongoose,  cors, dotenv, nodemon via npm

 - [x] Connect to your mongoDB cluster (use .env files)
 - [x] Create your schema and schema model
 - [x] POST /blog (writing data)
 - [x] GET /blogs (read all the blogs)
 - [x] Test locally
 - [x] Deploy to Now. Remember to create your secret! [now secret add secretName secretURL]

**Mongoose** is an Object Data Modeling (ODM) library for **MongoDB** and Node. js.

**Why do we use .env files?**
For easy configuration, **better security**(storing password on git is not a good idea) and fewer production mistakes

**What is MongoDB Atlas?**
MongoDB Atlas is a fully-managed cloud database developed by the same people that build MongoDB. Atlas handles all the complexity of deploying, managing, and healing your deployments on the cloud service provider of your choice (AWS, Azure, and GCP).


Access it at
https://api-blog.now.sh/blogs