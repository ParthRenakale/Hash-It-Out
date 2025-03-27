import React, { useState, useEffect } from "react";
import axios from "axios";

function MyComplaints() {
  const userId = localStorage.getItem("id"); // Get the user ID from localStorage
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        // Fetch complaints for the current user by passing userId as a query parameter
        const response = await axios.get(
          `http://localhost:4000/getComplaintsByUser?user=${userId}`
        );
        setComplaints(response.data);
      } catch (err) {
        setError(err.response?.data?.error || "Error fetching complaints");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchComplaints();
    } else {
      setError("User not found. Please log in.");
      setLoading(false);
    }
  }, [userId]);

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
      <h2 className="text-2xl font-bold mb-4">My Complaints</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {complaints.map((complaint) => (
          <div key={complaint._id} className="bg-white rounded-lg shadow p-4">
            <h3 className="text-xl font-semibold mb-2">{complaint.title}</h3>
            <p className="text-gray-700 mb-2">{complaint.description}</p>
            <p className="text-gray-500 text-sm">
              <strong>Location:</strong> {complaint.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyComplaints;
