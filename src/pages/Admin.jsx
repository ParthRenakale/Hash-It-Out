// import React from "react";
// import { Link } from "react-router-dom";
// function Admin() {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <Link to="/complaint-form">
//       <button className="px-6 py-3 text-lg bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
//         File Complaint
//       </button></Link>
//     </div>
//   );
// }

// export default Admin;
import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
          <h1 className="text-3xl font-bold mb-8">User Dashboard</h1>
          <div className="">
            {/* <Link to="/complaint-form">
              <button className="w-72 h-24 text-2xl bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
                File Complaint
              </button>
            </Link>
            <Link to="/my-complaints">
              <button className="w-72 h-24 text-2xl bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition">
                My Complaints
              </button>
            </Link> */}
            <Link to="/show-complaints">
              <button className="w-72 h-24 text-2xl bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition m-auto">
                Show Complaints
              </button>
            </Link>
            {/* Optionally add more buttons here if needed */}
          </div>
        </div>
  );
}

export default Admin;

