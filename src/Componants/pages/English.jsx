import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaVideo, FaCalendarAlt, FaGoogleDrive } from "react-icons/fa";

const English = () => {
  const [activeTab, setActiveTab] = useState("Stream");

  return (
    <div className=" mt-5 w-100">
  <div className="border-bottom w-100 p-0">
    <div className="d-flex justify-content-around align-items-center py-2 w-100">
      <div className="d-flex gap-4">
        <a
          href="#"
          className={`text-decoration-none fw-medium ${activeTab === "Stream" ? "text-primary border-bottom border-3 pb-1" : "text-secondary"
            }`}
          onClick={() => setActiveTab("Stream")}
        >
          Stream
        </a>

        <a
          href="#"
          className={`text-decoration-none fw-medium ${activeTab === "Classwork" ? "text-primary border-bottom border-3 pb-1" : "text-secondary"
            }`}
          onClick={() => setActiveTab("Classwork")}
        >
          Classwork
        </a>

        <a
          href="#"
          className={`text-decoration-none fw-medium ${activeTab === "People" ? "text-primary border-bottom border-3 pb-1" : "text-secondary"
            }`}
          onClick={() => setActiveTab("People")}
        >
          People
        </a>
      </div>

      <div className="d-flex gap-3 align-items-center">
        <FaVideo className="text-secondary fs-5" />
        <FaCalendarAlt className="text-secondary fs-5" />
        <div className="rounded-circle bg-light d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px" }}>
          <FaGoogleDrive className="text-secondary fs-5" />
        </div>
      </div>
    </div>
  </div>
</div>

  
  );
};

export default English;



{/* <div>
        <div className="border rounded p-4 w-25 mt-3">
          <div className="flex items-center justify-between col-md-3 mb-4">
            <div className="flex items-center gap-2">
              <img
                src="https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-48dp/logo_meet_2020q4_color_1x_web_48dp.png"
                alt="Google Meet logo"
                className="h-6 w-6"
              />
              <span className="text-lg">Meet</span>
            </div>

          </div>
          <button className="bg-primary border-0 text-white py-2 rounded px-4">
            Join
          </button>
        </div>
      </div> */}