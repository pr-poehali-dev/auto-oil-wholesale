import { useState } from "react";
import Icon from "@/components/ui/icon";

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "catalog", label: "Каталог" },
  { id: "about", label: "О компании" },
  { id: "terms", label: "Условия" },
  { id: "contacts", label: "Контакты" },
];

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cabinetOpen, setCabinetOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(15,15,20,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,140,0,0.1)' }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => setActivePage("home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded flex items-center justify-center animate-pulse-glow" style={{ background: 'linear-gradient(135deg, #FF8C00, #FFB300)' }}>
              <span className="text-black font-bold text-sm" style={{ fontFamily: 'Oswald, sans-serif' }}>ОП</span>
            </div>
            <div>
              <span className="font-oswald font-bold text-lg text-white tracking-wider">ОЙЛПРО</span>
              <span className="hidden sm:block text-xs text-gray-500 leading-none" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>оптовые поставки</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`nav-link ${activePage === item.id ? "active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCabinetOpen(true)}
              className="hidden sm:flex items-center gap-2 btn-outline px-4 py-2 rounded-lg text-sm"
            >
              <Icon name="User" size={14} />
              <span>Кабинет</span>
            </button>
            <button
              className="btn-primary px-4 py-2 rounded-lg text-sm hidden sm:block"
            >
              <span>Прайс-лист</span>
            </button>
            <button
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4" style={{ borderTop: '1px solid rgba(255,140,0,0.1)' }}>
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => { setActivePage(item.id); setMobileOpen(false); }}
                className={`nav-link text-left py-1 ${activePage === item.id ? "active" : ""}`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-3 pt-2">
              <button onClick={() => { setCabinetOpen(true); setMobileOpen(false); }} className="btn-outline px-4 py-2 rounded-lg text-sm flex-1">Кабинет</button>
              <button className="btn-primary px-4 py-2 rounded-lg text-sm flex-1"><span>Прайс-лист</span></button>
            </div>
          </div>
        )}
      </nav>

      {/* Cabinet Modal */}
      {cabinetOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}>
          <div className="w-full max-w-md rounded-2xl p-8 animate-fade-in" style={{ background: 'var(--dark-card)', border: '1px solid rgba(255,140,0,0.2)' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-oswald text-2xl text-white tracking-wide">ЛИЧНЫЙ КАБИНЕТ</h2>
              <button onClick={() => setCabinetOpen(false)} className="text-gray-400 hover:text-white">
                <Icon name="X" size={20} />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs text-gray-400 mb-1 font-ibm">Email</label>
                <input
                  type="email"
                  placeholder="company@mail.ru"
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-600 font-ibm text-sm focus:outline-none focus:border-orange-500"
                  style={{ background: 'var(--dark-surface)', border: '1px solid var(--dark-border)' }}
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-1 font-ibm">Пароль</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-600 font-ibm text-sm focus:outline-none focus:border-orange-500"
                  style={{ background: 'var(--dark-surface)', border: '1px solid var(--dark-border)' }}
                />
              </div>
            </div>

            <button className="btn-primary w-full py-3 rounded-lg text-sm mb-4">
              <span>Войти в кабинет</span>
            </button>
            <p className="text-center text-xs text-gray-500 font-ibm">Нет аккаунта? <button className="text-orange-400 hover:text-orange-300">Зарегистрироваться</button></p>
          </div>
        </div>
      )}
    </>
  );
}
