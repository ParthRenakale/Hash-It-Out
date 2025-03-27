// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function ShowComplaints() {
//   const [complaints, setComplaints] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchComplaints = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/complaints");
//         setComplaints(response.data);
//       } catch (err) {
//         setError(err.response?.data?.error || "Error fetching complaints");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchComplaints();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         Loading...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-screen text-red-500">
//         {error}
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">All Complaints</h2>
//       {complaints.length === 0 ? (
//         <div>No complaints found.</div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {complaints.map((complaint) => (
//             <div key={complaint._id} className="bg-white rounded-lg shadow p-4">
//               <h3 className="text-xl font-semibold mb-2">{complaint.title}</h3>
//               <p className="text-gray-700 mb-2">{complaint.description}</p>
//               <p className="text-gray-500 text-sm mb-2">
//                 <strong>Location:</strong> {complaint.location}
//               </p>
//               <p className="text-gray-500 text-sm mb-2">
//                 <strong>Status:</strong> {complaint.status}
//               </p>
//               <p className="text-gray-500 text-sm">
//                 <strong>Created:</strong>{" "}
//                 {new Date(complaint.createdAt).toLocaleString()}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ShowComplaints;
import React, { useState, useEffect } from "react";
import axios from "axios";

function ShowComplaints() {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const userType = localStorage.getItem("type"); // "Admin" or other

  // Define statuses to toggle through
  const statuses = ["Pending", "In Progress", "Resolved", "Rejected"];

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get("http://localhost:4000/complaints");
        setComplaints(response.data);
      } catch (err) {
        setError(err.response?.data?.error || "Error fetching complaints");
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  // Handler to toggle status for a given complaint (only for Admin)
  const handleToggleStatus = (id) => {
    setComplaints((prevComplaints) =>
      prevComplaints.map((complaint) => {
        if (complaint._id === id) {
          // Get current index and compute the next index
          const currentIndex = statuses.indexOf(complaint.status);
          const nextStatus = statuses[(currentIndex + 1) % statuses.length];
          return { ...complaint, status: nextStatus };
        }
        return complaint;
      })
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">All Complaints</h2>
      {complaints.length === 0 ? (
        <div>No complaints found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {complaints.map((complaint) => (
            <div
              key={complaint._id}
              className="relative bg-white rounded-lg shadow p-4"
            >
              {userType === "Admin" && (
                <button
                  onClick={() => handleToggleStatus(complaint._id)}
                  className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded transition"
                >
                  {complaint.status}
                </button>
              )}
              <h3 className="text-xl font-semibold mb-2">
                {complaint.title}
              </h3>
              <p className="text-gray-700 mb-2">
                {complaint.description}
              </p>
              <p className="text-gray-500 text-sm mb-2">
                <strong>Location:</strong> {complaint.location}
              </p>
              <p className="text-gray-500 text-sm mb-2">
                <strong>Status:</strong> {complaint.status}
              </p>
              <p className="text-gray-500 text-sm">
                <strong>Created:</strong>{" "}
                {new Date(complaint.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowComplaints;
