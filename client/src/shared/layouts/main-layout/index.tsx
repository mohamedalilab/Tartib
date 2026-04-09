import { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout() {
  return (
    <div className="flex flex-column h-screen overflow-hidden">
      <Header />
      <main className="flex-1 scroll-smooth">
        <Suspense fallback={<h2>loading....</h2>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
