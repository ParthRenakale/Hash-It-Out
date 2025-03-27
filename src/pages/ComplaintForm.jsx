// import React, { useState } from "react";
// import axios from "axios";

// function ComplaintForm() {
//   const id = localStorage.getItem("id");

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [location, setLocation] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("description", description);
//       formData.append("location", location);
//       formData.append("user", id);

//       const response = await axios.post(
//         "http://localhost:4000/createComplaint",
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       console.log("Complaint Submitted:", response.data);

//       // Clear form fields after successful submission
//       setTitle("");
//       setDescription("");
//       setLocation("");
//     } catch (error) {
//       console.error("Error submitting complaint:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           File a Complaint
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Title */}
//           <div>
//             <label className="block text-gray-700 font-medium">Title</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="Enter complaint title"
//               className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-gray-700 font-medium">
//               Description
//             </label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Describe the issue"
//               className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               rows="4"
//               required
//             ></textarea>
//           </div>

//           {/* Location */}
//           <div>
//             <label className="block text-gray-700 font-medium">Location</label>
//             <input
//               type="text"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               placeholder="Enter location"
//               className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="text-center">
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition font-medium"
//             >
//               {loading ? "Submitting..." : "Submit Complaint"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ComplaintForm;


import React, { useState } from "react";
import axios from "axios";

function ComplaintForm() {
  const id = localStorage.getItem("id"); // Assuming the user ID is stored in localStorage

  // Separate useState for each field
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Prepare the payload as a JSON object
      const payload = {
        title,
        description,
        location,
        user: id,
      };

      // Send a POST request with JSON data
      const response = await axios.post(
        "http://localhost:4000/createComplaint",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Complaint Submitted:", response.data);

      // Clear form fields after successful submission
      setTitle("");
      setDescription("");
      setLocation("");
    } catch (error) {
      console.error("Error submitting complaint:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          File a Complaint
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter complaint title"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the issue"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 font-medium">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              {loading ? "Submitting..." : "Submit Complaint"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ComplaintForm;
