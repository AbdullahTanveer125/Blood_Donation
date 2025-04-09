import { useLocation, Link } from "react-router-dom";

function Unauthorized_user({message}) {

    console.log("message=",message)
    
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚫 Access Denied</h1>
      <p>you are {message}</p>
      
      <Link to={`/${message}`}>Go Back to Home</Link>
    
    </div>
  );
}

export default Unauthorized_user;
