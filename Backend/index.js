const express = require('express');
const app = express();

const cors=require("cors");//different URL pr route krny mey help krta hai
const connectDB=require("./Work/DB/database.js");


// import and configuration of dotenv
const dotenv =require("dotenv");
dotenv.config();

// const user_router=require("./Practice/Routes/userRoute");








app.use(express.json());// Middleware to parse JSON data
app.use(cors());


// Routes
// app.use("/user",authRouter);
// app.use(productRouter);

// const user_router=require("./All SIMs details/Routes/userRoutes.js");
// const admin_router=require("./All SIMs details/Routes/adminRoutes.js");

// //to use router
// app.use(user_router);   
// app.use(admin_router);   

// app.get('/insert', (req, res) => {
//   console.log("Shukr hai");
//   res.send("Route hit: Shukr hai");
// });







//PORT
const port = process.env.PORT || 5000;  

//connection of mongoDB
connectDB();

app.listen(port, () => {
  console.log(`Server run at ${port}`);
});

