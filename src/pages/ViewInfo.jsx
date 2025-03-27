import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewInfo() {
  const userId = localStorage.getItem("id"); // assuming user id is stored in localStorage
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // Adjust the endpoint as per your backend API
        const response = await axios.get(
          `http://localhost:4000/getUserInfo?userId=${userId}`
        );
        setUser(response.data);
      } catch (err) {
        setError(err.response?.data?.error || "Error fetching user information.");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserInfo();
    } else {
      setError("User not logged in.");
      setLoading(false);
    }
  }, [userId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500 text-xl">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            User Information
          </h2>
          <div className="mb-2">
            <span className="font-medium text-gray-700">Name: </span>
            <span className="text-gray-600">{user.name}</span>
          </div>
          <div className="mb-2">
            <span className="font-medium text-gray-700">Email: </span>
            <span className="text-gray-600">{user.email}</span>
          </div>
          {user.phone && (
            <div className="mb-2">
              <span className="font-medium text-gray-700">Phone: </span>
              <span className="text-gray-600">{user.phone}</span>
            </div>
          )}
          {user.address && (
            <div className="mb-2">
              <span className="font-medium text-gray-700">Address: </span>
              <span className="text-gray-600">{user.address}</span>
            </div>
          )}
          {/* Add additional user fields as needed */}
        </div>
      </div>
    </div>
  );
}

export default ViewInfo;
