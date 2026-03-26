import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import CatalogPage from "@/pages/CatalogPage";
import AboutPage from "@/pages/AboutPage";
import TermsPage from "@/pages/TermsPage";
import ContactsPage from "@/pages/ContactsPage";
import CabinetPage from "@/pages/CabinetPage";

export default function Index() {
  const [activePage, setActivePage] = useState("home");

  const handleSetPage = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--dark-base)' }}>
      <Navbar activePage={activePage} setActivePage={handleSetPage} />

      <main>
        {activePage === "home" && <HomePage setActivePage={handleSetPage} />}
        {activePage === "catalog" && <CatalogPage />}
        {activePage === "about" && <AboutPage />}
        {activePage === "terms" && <TermsPage />}
        {activePage === "contacts" && <ContactsPage />}
        {activePage === "cabinet" && <CabinetPage />}
      </main>

      <Footer setActivePage={handleSetPage} />
    </div>
  );
}
