/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter } from "react-router";

// Lazy-loaded Pages:
// Each route is code-split into its own chunk
// Layouts
const MainLayout = lazy(() => import("@/layouts/PublicLayout"));

// Public pages
const Landing = lazy(() => import("@/pages/landing"));
const Methods = lazy(() => import("@/pages/Methods"));
const Philosophy = lazy(() => import("@/pages/Philosophy"));
const Documentation = lazy(() => import("@/pages/Documentation"));
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
        path: "/methods",
        element: <Methods />,
      },
      {
        path: "/documentation",
        element: <Documentation />,
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
