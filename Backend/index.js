// 1) pehly dono parent or child mey unique fields rakhi hai to pehly ye check kro k wo field b unique hai phir us k baad parent or child k collections mey data ko store krwao      e.g -->  user and us k child

// 2) jb data get ho raha hai to waha pr pehly ye check kro k koi data mila hai k ni Q k data mila ni hota lykin success ka message aata hai mtlb k hmy ye condition lgani chahiye k result ki lenght agr zero hai to ye message show krwa do "no data found" ya koi b message

// 3) jb frontend sy login kr raha hu to auth mey first time current login user ka data ni aata blky previous login waly user ka data aata hai isy b fix kr lena

// 4) jb add_new_blood_request k form mey jb b koi input krta hu to console pe hr dfa data dobara render hota hai

// 5) jb frontend st data send kr rahy ho or jb backend mey data recieve kr rahy ho to dono mey variables k name same hony chahiye

// 6) ye b dekho k kitny tariko sy fronted sy data ko send kr skty hai or kon sa tarika kb use krna chahiye ye b dekh lo e.g: 
    // * simple Object ki form mey
    // * formData ki form mey
    // * params ki form mey

// 7) date ko b dekh lena k mongoDB mey string ki form mey store krwani hai ya Date (datatype) ki form mey

// 8) jb hm form k zrye sy image ko send krty hai backend mey to hm image ki form shahid "object" hoti hai lykin mein image ko backend mey "express_formidable()" ko use kr k or schema mey  following form mey mongoDB mey store krwa raha hu
  
//     organization_photo: {
//         data: Buffer,
//         contentType: String,
//     },

// lykin jb is file mey image ko axios.get k zrye sy hali kiya hai to is ki form "buffer" hi mtlab k jis form mey mongoDB mey store hai lykin jb isi image ko formData k zrye sy backend mey send kro to image send mtlb backend mey req.files mey receive ni hoti. is k liye hm pehly get wali image ko "object" (file) ki form mey convert kry gy or is ka tarika given hai "handleSubmit" waly function mey

// 9) jaha jaha pr donor_router, recipient or organization wala check (condition) lgai hoi hai wha pr ye b add kro k agr user admin ho tb b us page ko access kr skta hai

// 10) feedback ko add krny wala form recipient k login hony k baad jb recipient donor ki profile pr review dy ga mtlb k login (auth) sy recipient ki _id mil jay gi or jb recipient donor ko search kr k donor ki profile dekhny k liye hm API k zrye sy donor ki information get kry gy phir waha sy donor ki _id b mil jay gi   lykin ye smj ni lg rahi k recipient kb or kis base pr feedback dy ga

// 11) jo user schema mey get_friends, followers or followings wali fields mey abi mein ny values khud postman sy insert ki hai lykin ye baad mey khud hi values ko frontend sy API k zrye sy insert krwani hai. is mey krna ye hai k jb donor or recipient aik dosry sy chat krna chahty hai to pehly koi aik dosry ko follow wali APi k zrye sy friends bny gy mtlb un dono id friends wali array mey store ho gi (video time=1:45).    mery khayal sy abi ye solution dmaag mey aa raha hai k krna ye chahiye k jb b koi user kisi dosry user sy chat krny k liye button pr click kry ga to massenger wala page or friends wali API call kr k un ko friends wali array mey store krwa do lykin aik issue ye hai k agr dosry user ki id pehly sy hi friends wali array mey ho gi to is trha dobara id store ho jay gi to is k liye koi condition sooch kr lgaa lena.    baki koi or solution dekh lo.



const express = require('express');
const app = express();

const user_router=require("./Work/Routes/userRoutes.js");
const donor_router=require("./Work/Routes/donorRoutes.js");
const recipient_router=require("./Work/Routes/recipientRoutes.js");
const organization_router=require("./Work/Routes/organizationRoutes.js");
const bloodRequest_router=require("./Work/Routes/blood_Request_Routes.js");
const event_router=require("./Work/Routes/eventRoutes.js");
const feedback_router=require("./Work/Routes/feedbackRoutes.js");
const conversation_router=require("./Work/Routes/conversationRoutes.js");
const message_router=require("./Work/Routes/messageRoutes.js");
const notification_router=require("./Work/Routes/notificationRoutes.js");
const contact_us_router=require("./Work/Routes/contact_us_Routes.js");



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
app.use("/user",user_router);   
app.use("/donor",donor_router);   
app.use("/recipient",recipient_router); 
app.use("/organization",organization_router);
app.use("/bloodRequest", bloodRequest_router); 
app.use("/event", event_router); 
app.use("/feedback", feedback_router); 
app.use(conversation_router); 
app.use(message_router); 
app.use("/notification", notification_router); 
app.use(contact_us_router);


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

