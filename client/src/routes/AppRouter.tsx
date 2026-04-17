/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter } from "react-router";

// Lazy-loaded Pages:
// Each route is code-split into its own chunk
// Layouts
const MainLayout = lazy(() => import("@/layouts/PublicLayout"));

// Public pages
const Landing = lazy(() => import("@/pages/landing"));
const Manifesto = lazy(() => import("@/pages/Manifesto"));
const Methods = lazy(() => import("@/pages/methods"));
const ComingSoon = lazy(() => import("@/pages/ComingSoon"));
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
        element: <ComingSoon />,
      },
      {
        path: "/Manifesto",
        element: <Manifesto />,
      },
      // 404 fallback
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  // Auth routes

  // App routes (sidebar layout)

]);

export default AppRouter;
