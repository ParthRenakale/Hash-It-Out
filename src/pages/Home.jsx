// // import React from "react";
// // // Replace the path with your actual image file location


// // function Home() {
// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
// //       {/* Huge centered image */}
// //       <img
// //         src={'./background.jpeg'}
// //         alt="Smart Complaint Management System"
// //         className="w-full max-w-5xl object-cover rounded-lg shadow-lg mb-8"
// //       />

// //       {/* Text description */}
// //       <div className="max-w-4xl text-center">
// //         <h1 className="text-4xl font-bold text-orange-700 mb-4">
// //           Smart Complaint Management System
// //         </h1>
// //         <p className="text-xl text-white text-center mb-4">
// //         Empowering citizens to file and track complaints quickly and transparently.
// //       </p>
// //       <p className="text-xl text-white text-center">
// //         Bridging the gap between the community and municipal services with real-time updates.
// //       </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Home;
// import React from "react";

// function Home() {
//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 p-6">
//       <div className="relative w-full max-w-5xl">
//         {/* Background image with hover scale animation */}
//         <img
//           src={'./background.jpeg'}
//           alt="Smart Complaint Management System"
//           className="w-full h-auto object-cover rounded-xl shadow-2xl transform transition duration-500 hover:scale-105"
//         />
//         {/* Dark overlay for improved text readability */}
//         <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
//         {/* Centered content overlay */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
//           <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4">
//             Smart Complaint Management System
//           </h1>
//           <p className="text-xl text-gray-200 mb-6 text-center">
//             Empowering citizens to file and track complaints quickly and transparently.
//           </p>
//           <p className="text-xl text-gray-200 mb-8 text-center">
//             Bridging the gap between the community and municipal services with real-time updates.
//           </p>
//           <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-full shadow-lg transform transition duration-300 hover:bg-orange-500 hover:scale-105">
//             File a Complaint
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 p-6 overflow-hidden">
        <div className="relative w-full max-w-5xl">
          {/* Background image with hover scale animation */}
          <img
            src={"./background.jpeg"}
            alt="Smart Complaint Management System"
            className="w-full h-auto object-cover rounded-xl shadow-2xl transform transition duration-500 hover:scale-105"
          />
          {/* Dark overlay for improved text readability */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
          {/* Centered content overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4 fadeInDown">
              Smart Complaint Management System
            </h1>
            <p className="text-xl text-gray-200 mb-6 text-center fadeIn">
              Empowering citizens to file and track complaints quickly and transparently.
            </p>
            <p className="text-xl text-gray-200 mb-8 text-center fadeIn delay-200">
              Bridging the gap between the community and municipal services with real-time updates.
            </p>
            <Link to="/user">
            <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-full shadow-lg transform transition duration-300 hover:bg-orange-500 hover:scale-105 pulse">
              File a Complaint
            </button></Link>
            
          </div>
        </div>
      </div>

      {/* Inline custom animations using Tailwind-friendly class names */}
      <style>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes pulseCustom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .fadeInDown {
          animation: fadeInDown 1s ease-out forwards;
        }
        .fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .pulse {
          animation: pulseCustom 2s infinite;
        }
      `}</style>
    </>
  );
}

export default Home;
