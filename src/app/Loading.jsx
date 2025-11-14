"use client";

import { useState, useEffect } from "react";

export default function LoadingWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#000",
        // color: "#2391fb",
        color: "#ff6600",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2.2rem",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: "600",
        zIndex: 9999,
        letterSpacing: "1.5px",
        padding: "0 20px",
        textAlign: "center",
        animation: "fadeIn 1s ease-in-out"
      }}>
        <span className="fade-text">
          THE POWER TO GO BEYOND<br />
          <span style={{ color: "#ffffff" , fontSize:"30px"}}>Welcome to<span style={{color:"#ff6600"}}> EVNTIO </span></span>
        </span>
        <style jsx>{`
          @keyframes fadeIn {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}</style>
      </div>
    );
  }

  return children;
}