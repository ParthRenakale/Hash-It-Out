
// import { Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Account from "./pages/Account";
// import Navbar from "./components/Navbar";
// import RegisterPage from "./pages/SignUp";
// import Default from "./pages/Default";
// import Forgot from "./pages/Forgot";
// import EmailVerificationPage from "./pages/EmailVerificationPage";
// import ResetPassword from "./pages/ResetPassword";
// import Admin from "./pages/Admin";
// import User from "./pages/User";

// function App() {
 
//   const isUserSignedIn = !!localStorage.getItem("token");
//  const userType=localStorage.getItem("type");
//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<RegisterPage />} />
//         <Route path="/verify-email" element={<EmailVerificationPage />} />
//         <Route path="/reset-password" element={<ResetPassword />} />
//         {/* {isUserSignedIn && <Route path="/account" element={<Account />} />} */}
//         {/* <Route
//         path="/account"
//         element={isUserSignedIn ? <Account /> : <Navigate to="/login" />}
//       /> */}
//       {userType==="Admin" && 
//       <Route
//         path="/Admin"
//         element={isUserSignedIn ? <Admin/> : <Navigate to="/login" />}
//       />}
//       {userType!=="Admin" && 
//       <Route
//         path="/User"
//         element={isUserSignedIn ? <User/> : <Navigate to="/login" />}
//       />}
//         <Route path="/forgot" element={<Forgot />} />
//         <Route path="*" element={<Default />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/SignUp";
import Default from "./pages/Default";
import Forgot from "./pages/Forgot";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import ResetPassword from "./pages/ResetPassword";
import Admin from "./pages/Admin";
import User from "./pages/User";
import ComplaintForm from "./pages/ComplaintForm";
import UpdateInfo from "./pages/UpdateInfo";
import ViewInfo from "./pages/ViewInfo";
import MyComplaints from "./pages/MyComplaints";
import ShowComplaints from "./pages/ShowComplaints";
import Footer from "./components/Footer";


function App() {
  const isUserSignedIn = !!localStorage.getItem("token");
  const userType = localStorage.getItem("type");

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot" element={<Forgot />} />
        
        {/* Role-Based Routing */}
        <Route
          path="/admin"
          element={
            isUserSignedIn ? (
              userType === "Admin" ? <Admin /> : <Navigate to="/user" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/user"
          element={
            isUserSignedIn ? (
              userType === "User" ? <User /> : <Navigate to="/admin" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
        path="/complaint-form"
        element={<ComplaintForm/>}
        />  
         <Route
        path="/update-info"
        element={<UpdateInfo/>}
        />
         <Route
        path="/view-info"
        element={<ViewInfo/>}
        />
        <Route
        path="/my-complaints"
        element={<MyComplaints/>}
        />
        <Route
        path="/show-complaints"
        element={<ShowComplaints/>}
        />
        

        <Route path="*" element={<Default />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
