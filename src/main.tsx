import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "filepond/dist/filepond.min.css";
import { ThemeProvider } from "@material-tailwind/react";
import Loading from "./Components/Loading";
import { AppRoutes } from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ErrorProvider } from "./provider/ErrorProvider";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./provider/AuthProvider";

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
    <ErrorProvider>
      <ThemeProvider>
        <Suspense fallback={<Loading />}>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <AppRoutes />
              <Toaster position="top-center" containerStyle={{ zIndex: 100 }} />
            </AuthProvider>
          </QueryClientProvider>
        </Suspense>
      </ThemeProvider>
    </ErrorProvider>
  </React.StrictMode>
);
