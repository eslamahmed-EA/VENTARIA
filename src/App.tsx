import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import CaseStudies from "./components/CaseStudies";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);
  const [lang, setLang] = useState<"en" | "ar">("en");

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const renderActivePage = () => {
    switch (currentPage) {
      case "home":
        return (
          <Home
            setCurrentPage={setCurrentPage}
            setSelectedServiceId={setSelectedServiceId}
            setSelectedCaseStudyId={setSelectedCaseStudyId}
            lang={lang}
          />
        );
      case "services":
        return (
          <Services
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
            setCurrentPage={setCurrentPage}
            lang={lang}
          />
        );
      case "portfolio":
        return (
          <Portfolio
            setCurrentPage={setCurrentPage}
            setSelectedCaseStudyId={setSelectedCaseStudyId}
            lang={lang}
          />
        );
      case "case-studies":
        return (
          <CaseStudies
            selectedCaseStudyId={selectedCaseStudyId}
            setSelectedCaseStudyId={setSelectedCaseStudyId}
            setCurrentPage={setCurrentPage}
            lang={lang}
          />
        );
      case "about":
        return <About setCurrentPage={setCurrentPage} lang={lang} />;
      case "pricing":
        return <Pricing setCurrentPage={setCurrentPage} lang={lang} />;
      case "blog":
        return <Blog lang={lang} />;
      case "contact":
        return <Contact lang={lang} />;
      default:
        return (
          <Home
            setCurrentPage={setCurrentPage}
            setSelectedServiceId={setSelectedServiceId}
            setSelectedCaseStudyId={setSelectedCaseStudyId}
            lang={lang}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between selection:bg-accent selection:text-black font-sans antialiased" id="ventaria-app-shell">
      {/* Dynamic Global Navbar */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} lang={lang} setLang={setLang} />

      {/* Main Agency Viewport Wrapper */}
      <main className="flex-grow">
        {renderActivePage()}
      </main>

      {/* Dynamic Global Footer */}
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} lang={lang} />
    </div>
  );
}
