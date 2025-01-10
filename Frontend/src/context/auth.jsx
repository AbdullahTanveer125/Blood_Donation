// import { useState, useEffect, useContext, createContext } from "react";
// import axios from "axios";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {

//   const [auth, setAuth] = useState({
//     user: null,
//     token: "",
//   });

//   //default axios
//   axios.defaults.headers.common["Authorization"] = auth?.token;
//   // axios.defaults.headers.common["Authorization"] = `Bearer ${auth?.token}`;



//   useEffect(() => {
//     console.log("ooooooooooooAuth state updated:", auth);



//     const data = localStorage.getItem("auth");
//     if (data) {
//       const parseData = JSON.parse(data);
//       setAuth({
//         // ...auth,
//         user: parseData.user,
//         token: parseData.token,
//       });




//     console.log("BBBBBBBBBBBB:", auth);


//     // Ensure axios headers are updated
//     axios.defaults.headers.common["Authorization"] = auth?.token || "";

//     }
//   }, []);



//   // useEffect(() => {
//   //   const data = localStorage.getItem("auth");
//   //   if (data) {
//   //     const parseData = JSON.parse(data);
//   //     setAuth({
//   //       // ...auth,
//   //       user: parseData.user,
//   //       token: parseData.token,
//   //     });

//   //     // Update axios header
//   //     // axios.defaults.headers.common["Authorization"] = `Bearer ${parseData.token}`;

//   //   }
//   //   //eslint-disable-next-line
//   // }, []);
//   return (
//     <AuthContext.Provider value={[auth, setAuth]}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // custom hook
// const useAuth = () => useContext(AuthContext);

// export { useAuth, AuthProvider };














import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedAuth = localStorage.getItem("auth");


    
    

    return storedAuth ? JSON.parse(storedAuth) : null;

  });

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
