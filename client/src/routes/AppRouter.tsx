/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter } from "react-router";

// Lazy-loaded Pages: Each route is code-split into its own chunk
// Layouts
const MainLayout = lazy(() => import("@/layouts/PublicLayout"));
const AuthLayout = lazy(() => import("@/layouts/AuthLayouts"));

// Public pages
const Landing = lazy(() => import("@/pages/landing"));
const Manifesto = lazy(() => import("@/pages/Manifesto"));
const Methods = lazy(() => import("@/pages/methods"));
const ComingSoon = lazy(() => import("@/pages/ComingSoon"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Auth pages
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const SignupPage = lazy(() => import("@/pages/SignupPage"));

// App pages

// ── Router ──────────────────────────────────────────

const AppRouter = createBrowserRouter([
  // Public Routes
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "/methods", element: <Methods /> },
      { path: "/Manifesto", element: <Manifesto /> },
      { path: "/documentation", element: <ComingSoon /> },
      { path: "/privacy-policy", element: <ComingSoon /> },
      { path: "/terms", element: <ComingSoon /> },
      // 404 fallback
      { path: "*", element: <NotFound /> },
    ],
  },

  // Auth routes
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
    ],
  },
  
  // App routes (sidebar layout)
]);

export default AppRouter;
