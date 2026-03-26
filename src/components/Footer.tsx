interface FooterProps {
  setActivePage: (page: string) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  return (
    <footer style={{ background: 'var(--dark-surface)', borderTop: '1px solid var(--dark-border)' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FF8C00, #FFB300)' }}>
                <span className="text-black font-bold text-sm" style={{ fontFamily: 'Oswald, sans-serif' }}>ОП</span>
              </div>
              <span className="font-oswald font-bold text-lg text-white tracking-wider">ОЙЛПРО</span>
            </div>
            <p className="text-gray-500 font-ibm text-sm leading-relaxed">
              Оптовые поставки автомасел и автохимии с 2012 года.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-oswald font-semibold text-white text-sm tracking-widest uppercase mb-4">Навигация</h4>
            <div className="space-y-2">
              {[
                { id: "home", label: "Главная" },
                { id: "catalog", label: "Каталог" },
                { id: "about", label: "О компании" },
                { id: "terms", label: "Условия" },
                { id: "contacts", label: "Контакты" },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className="block text-gray-500 hover:text-orange-400 font-ibm text-sm transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-oswald font-semibold text-white text-sm tracking-widest uppercase mb-4">Бренды</h4>
            <div className="space-y-2">
              {["Castrol", "Mobil", "Shell", "Liqui Moly", "Total", "Mannol"].map(brand => (
                <div key={brand} className="text-gray-500 font-ibm text-sm">{brand}</div>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-oswald font-semibold text-white text-sm tracking-widest uppercase mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-500 font-ibm text-sm">
              <div>+7 (495) 123-45-67</div>
              <div>sales@oilpro.ru</div>
              <div>Пн–Пт: 9:00–18:00</div>
              <div className="pt-2 text-xs">г. Москва, ул. Складская, 15</div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--dark-border)' }}>
          <div className="text-xs text-gray-600 font-ibm">© 2024 ОйлПро. Все права защищены.</div>
          <div className="flex gap-6 text-xs text-gray-600 font-ibm">
            <button className="hover:text-gray-400 transition-colors">Политика конфиденциальности</button>
            <button className="hover:text-gray-400 transition-colors">Договор оферты</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
