import { Navbar } from "./navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { SparklesCore } from "@/components/ui/sparkles";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export function PageLayout() {
  const isMobile = useIsMobile();

  return (
    <>
      <BackgroundPaths />
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true">
        <SparklesCore
          id="global-sparkles"
          background="transparent"
          minSize={isMobile ? 0.3 : 0.6}
          maxSize={isMobile ? 0.8 : 1.6}
          particleDensity={isMobile ? 5 : 10}

          className="h-full w-full"
          particleColor="#c7d2fe"
          speed={1.5}
        />
      </div>
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
          position: "relative",
          zIndex: 1,
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
          position: "relative",
          zIndex: 1,
          backgroundColor: "rgba(15, 15, 26, 0.2)",
          backdropFilter: "blur(16px)",
        }}
      >
        <p className="text-sm text-text-muted text-center">
          Praktikumsbericht Nr. 3 &mdash; Arseni &amp; Bohdan &mdash; 2025/2026
        </p>
      </footer>
    </>
  );
}
