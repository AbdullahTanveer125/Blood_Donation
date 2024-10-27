const bcrypt= require("bcrypt") ;

async function hashPassword(password){
    try{
        const saltRounds=10;
        const hashedPassword= await bcrypt.hash(password, saltRounds)
        return hashedPassword;
    }catch(error){
        console.log("***** Error in hashPassword ********",error)
    }
}

async function comparePassword(password,hashedPassword){
    return bcrypt.compare(password,hashedPassword);
    // let result=await bcrypt.compare(password,hashedPassword);//what is return
    // console.log("****** After compare passwords ******",result);
}

module.exports={hashPassword, comparePassword}