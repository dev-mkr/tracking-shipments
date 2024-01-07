import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { QueryClientContext } from "./libs/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Layout } from "./layout";

import App from "./App.tsx";
import { GlobalLoadingSpinner } from "@/shared/GlobalLoadingSpinner";
import { GlobalError } from "@/shared/GlobalError";
import "@/styles/index.css";
import "virtual:svg-icons-register";
import "@/libs/i18n.ts";
import "@/libs/axios.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<GlobalError />}>
      <Suspense fallback={<GlobalLoadingSpinner />}>
        <QueryClientContext>
          <Layout>
            <App />
          </Layout>
        </QueryClientContext>
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);
