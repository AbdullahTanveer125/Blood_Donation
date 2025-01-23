// 1) pehly dono parent or child mey unique fields rakhi hai to pehly ye check kro k wo field b unique hai phir us k baad parent or child k collections mey data ko store krwao      e.g -->  user and us k child

// 2) jb data get ho raha hai to waha pr pehly ye check kro k koi data mila hai k ni Q k data mila ni hota lykin success ka message aata hai mtlb k hmy ye condition lgani chahiye k result ki lenght agr zero hai to ye message show krwa do "no data found" ya koi b message

const express = require('express');
const app = express();

const donor_router=require("./Work/Routes/donorRoutes.js");
const recipient_router=require("./Work/Routes/recipientRoutes.js");
const organization_router=require("./Work/Routes/organizationRoutes.js");
const bloodRequest_router=require("./Work/Routes/blood_Request_Routes.js");
const event_router=require("./Work/Routes/eventRoutes.js");
const feedback_router=require("./Work/Routes/feedbackRoutes.js");
// const conversation_router=require("./Work/Routes/conversationRoutes.js");
// const message_router=require("./Work/Routes/messageRoutes.js");



const cors=require("cors");//different URL pr route krny mey help krta hai
const connectDB=require("./Work/DB/database.js");


// import and configuration of dotenv
const dotenv =require("dotenv");
dotenv.config();

// const user_router=require("./Practice/Routes/userRoute");







app.use(express.json());// Middleware to parse JSON data
// app.use(cors());

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));


//to use router
app.use("/donor",donor_router);   
app.use("/recipient",recipient_router); 
app.use("/organization",organization_router);
app.use("/bloodRequest", bloodRequest_router); 
app.use("/event", event_router); 
app.use("/feedback", feedback_router); 
// app.use(conversation_router); 
// app.use(message_router); 


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

