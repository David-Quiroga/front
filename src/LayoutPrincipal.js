import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";

const LayoutPrincipal = ({ children }) => {
  const [isSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar isOpen={isMobile ? isSidebarOpen : true} />
      <div
        style={{
          padding: "25px",
          paddingLeft: "17%",
          paddingRight: "2%",
          flex: 1,
          overflowY: "auto",
          background: "#E4E4E4FF",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default LayoutPrincipal;
