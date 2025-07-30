import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {HeroUIProvider} from '@heroui/react'
import App from "./App.jsx";

import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
     <HeroUIProvider>
      <main className="purple-dark text-foreground bg-background">
        <App />
      </main>
     </HeroUIProvider>
   

    </BrowserRouter>

);
