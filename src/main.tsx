import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

import { ThemeProvider } from "@material-tailwind/react";
import Loading from "./Components/Loading";
import { AppRoutes } from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Suspense fallback={<Loading />}>
        <QueryClientProvider client={queryClient}>
        <AppRoutes />
        </QueryClientProvider>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);  
