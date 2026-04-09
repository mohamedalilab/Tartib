/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter } from "react-router";

// Lazy-loaded Pages:
// Each route is code-split into its own chunk
// Layouts
const MainLayout = lazy(() => import("@/shared/layouts/main-layout"));

// Public pages
const Landing = lazy(() => import("@/pages/Landing"));
const Methods = lazy(() => import("@/pages/Methods"));
const Philosophy = lazy(() => import("@/pages/Philosophy"));
const Documents = lazy(() => import("@/pages/Documents"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// App pages


// ── Router ──────────────────────────────────────────

const AppRouter = createBrowserRouter([
  // Public Landing Page
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/Methods",
        element: <Methods />,
      },
      {
        path: "/Documents",
        element: <Documents />,
      },
      {
        path: "/philosophy",
        element: <Philosophy />,
      },
    ],
  },

  // Auth routes

  // App routes (sidebar layout)

  // 404 fallback
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default AppRouter;
