import React from "react";
import AppRoutes from "./routes/AppRoutes";
import "./index.css";

function App() {
  console.log("✅ VITE_API_URL:", import.meta.env.VITE_API_URL);

  return (
    <div> 
    
      <AppRoutes />
    </div>
  );
}

export default App;
