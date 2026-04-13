import { Navbar } from "./navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function PageLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          marginTop: "64px",
          flex: 1,
        }}
        className="px-4 sm:px-8"
      >
        <Outlet />
      </main>
      <footer
        style={{
          width: "100%",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          justifyContent: "center",
          padding: "40px 32px",
        }}
      >
        <p className="text-sm text-text-muted text-center">
          Praktikumsbericht Nr. 3 &mdash; Arseni &amp; Bohdan &mdash; 2025/2026
        </p>
      </footer>
    </>
  );
}
