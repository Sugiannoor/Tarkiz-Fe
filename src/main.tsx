import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

import { ThemeProvider } from "@material-tailwind/react";
import { AppRoutes } from "./routes";
import Loading from "./Components/Loading";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Suspense fallback={<Loading />}>
        <AppRoutes />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
