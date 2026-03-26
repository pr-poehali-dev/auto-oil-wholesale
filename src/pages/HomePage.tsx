import Icon from "@/components/ui/icon";

interface HomePageProps {
  setActivePage: (page: string) => void;
}

const STATS = [
  { value: "2 400+", label: "Позиций в каталоге" },
  { value: "850+", label: "B2B клиентов" },
  { value: "12 лет", label: "На рынке" },
  { value: "48ч", label: "Срок доставки" },
];

const CATEGORIES = [
  { icon: "Droplets", label: "Моторные масла", count: "320 позиций", color: "#FF8C00" },
  { icon: "Zap", label: "Трансмиссионные", count: "180 позиций", color: "#FFB300" },
  { icon: "Shield", label: "Антифризы", count: "95 позиций", color: "#FF6B00" },
  { icon: "Wind", label: "Автокосметика", count: "240 позиций", color: "#FFA500" },
  { icon: "Settings", label: "Смазки и масла", count: "156 позиций", color: "#FF8C00" },
  { icon: "Flame", label: "Присадки", count: "112 позиций", color: "#FFB300" },
];

const BRANDS = ["Castrol", "Mobil", "Shell", "Liqui Moly", "Total", "Mannol", "Motul", "Pennzoil"];

export default function HomePage({ setActivePage }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: '64px' }}>
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/7823cb92-3029-44b3-a577-dfa2aa9f0273/files/55420512-cd1f-4c8d-bbcd-3d298073311f.jpg)`,
            filter: 'brightness(0.25) saturate(0.7)',
          }}
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-60" />
        {/* Orange gradient bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-64" style={{ background: 'linear-gradient(to top, var(--dark-base), transparent)' }} />
        {/* Orange side glow */}
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full -translate-y-1/2" style={{ background: 'radial-gradient(circle, rgba(255,140,0,0.2) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-up">
              <div className="h-px w-12 bg-orange-500" />
              <span className="section-tag">B2B Оптовая платформа</span>
            </div>

            <h1 className="font-oswald font-bold text-white mb-6 animate-fade-up delay-100 opacity-0-init"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', lineHeight: '1.05', letterSpacing: '0.02em' }}>
              АВТОМАСЛА &{" "}
              <span style={{ color: 'var(--neon-orange)' }}>АВТОХИМИЯ</span>
              <br />ДЛЯ ВАШЕГО БИЗНЕСА
            </h1>

            <p className="font-ibm text-gray-300 mb-10 text-lg leading-relaxed animate-fade-up delay-200 opacity-0-init" style={{ maxWidth: '540px' }}>
              Прямые поставки от производителей. Персональные условия для каждого B2B клиента. Свыше 2400 позиций в наличии на складе.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-300 opacity-0-init">
              <button
                onClick={() => setActivePage("catalog")}
                className="btn-primary px-8 py-4 rounded-xl text-base flex items-center gap-3"
              >
                <span>Открыть каталог</span>
                <Icon name="ArrowRight" size={18} />
              </button>
              <button
                onClick={() => setActivePage("contacts")}
                className="btn-outline px-8 py-4 rounded-xl text-base"
              >
                Получить прайс-лист
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-12 animate-fade-up delay-400 opacity-0-init">
              {["Официальный дистрибьютор", "Сертифицированная продукция", "Доставка по всей России"].map(badge => (
                <div key={badge} className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={14} className="text-orange-400 flex-shrink-0" />
                  <span className="text-xs text-gray-400 font-ibm">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product image floating */}
        <div className="absolute right-0 bottom-0 top-16 hidden lg:flex items-center pr-12 animate-fade-in delay-500 opacity-0-init" style={{ width: '45%' }}>
          <img
            src="https://cdn.poehali.dev/projects/7823cb92-3029-44b3-a577-dfa2aa9f0273/files/0464903a-7b5c-4a0c-afc7-8c70a616fdb9.jpg"
            alt="Автомасла"
            className="w-full h-full object-cover rounded-2xl"
            style={{ maxHeight: '600px', boxShadow: '0 0 80px rgba(255,140,0,0.15)', border: '1px solid rgba(255,140,0,0.15)' }}
          />
          <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(to right, var(--dark-base) 0%, transparent 30%)' }} />
        </div>
      </section>

      {/* Stats Strip */}
      <section style={{ background: 'var(--dark-surface)', borderTop: '1px solid var(--dark-border)', borderBottom: '1px solid var(--dark-border)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="stat-counter">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-1 font-ibm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-orange-500" />
          <span className="section-tag">Ассортимент</span>
        </div>
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <h2 className="font-oswald font-bold text-white text-4xl md:text-5xl" style={{ letterSpacing: '0.02em' }}>
            КАТЕГОРИИ <span style={{ color: 'var(--neon-orange)' }}>ТОВАРОВ</span>
          </h2>
          <button onClick={() => setActivePage("catalog")} className="btn-outline px-6 py-3 rounded-lg text-sm flex items-center gap-2">
            Весь каталог <Icon name="ArrowRight" size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActivePage("catalog")}
              className="card-hover rounded-xl p-6 text-left group flex items-center gap-5"
              style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)' }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                   style={{ background: `rgba(255, 140, 0, 0.1)`, border: `1px solid ${cat.color}30` }}>
                <Icon name={cat.icon as "Droplets"} size={26} style={{ color: cat.color }} />
              </div>
              <div>
                <div className="font-oswald font-semibold text-white text-lg mb-1">{cat.label}</div>
                <div className="text-xs text-gray-500 font-ibm">{cat.count}</div>
              </div>
              <Icon name="ChevronRight" size={16} className="ml-auto text-gray-600 group-hover:text-orange-500 transition-colors" />
            </button>
          ))}
        </div>
      </section>

      {/* Brands Marquee */}
      <section style={{ background: 'var(--dark-surface)', borderTop: '1px solid var(--dark-border)', borderBottom: '1px solid var(--dark-border)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-orange-500" />
            <span className="section-tag">Наши бренды</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {BRANDS.map((brand, i) => (
              <div key={i} className="px-5 py-3 rounded-lg font-oswald font-medium text-sm tracking-wider text-gray-400 hover:text-orange-400 transition-colors cursor-default"
                   style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)' }}>
                {brand.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Benefits */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-orange-500" />
          <span className="section-tag">Для оптовых клиентов</span>
        </div>
        <h2 className="font-oswald font-bold text-white text-4xl md:text-5xl mb-16" style={{ letterSpacing: '0.02em' }}>
          ПРЕИМУЩЕСТВА <span style={{ color: 'var(--neon-orange)' }}>B2B</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "Tag", title: "Персональные цены", desc: "Индивидуальная скидка в зависимости от объёма закупок" },
            { icon: "Truck", title: "Быстрая доставка", desc: "Отгрузка в течение 24 часов, доставка по всей России" },
            { icon: "CreditCard", title: "Отсрочка платежа", desc: "Кредитный лимит и отсрочка до 30 дней для постоянных клиентов" },
            { icon: "HeadphonesIcon", title: "Личный менеджер", desc: "Персональный менеджер на всех этапах сотрудничества" },
          ].map((item, i) => (
            <div key={i} className="rounded-xl p-6 card-hover" style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                   style={{ background: 'rgba(255,140,0,0.1)', border: '1px solid rgba(255,140,0,0.2)' }}>
                <Icon name={item.icon as "Tag"} size={22} style={{ color: 'var(--neon-orange)' }} />
              </div>
              <h3 className="font-oswald font-semibold text-white text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 font-ibm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative rounded-2xl overflow-hidden p-12 text-center" style={{ background: 'linear-gradient(135deg, #1a1208 0%, #1c1408 100%)', border: '1px solid rgba(255,140,0,0.3)' }}>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(255,140,0,0.1) 0%, transparent 70%)' }} />
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(255,140,0,0.5), transparent)' }} />
          <div className="relative z-10">
            <h2 className="font-oswald font-bold text-white text-3xl md:text-4xl mb-4">СТАТЬ ОПТОВЫМ КЛИЕНТОМ</h2>
            <p className="text-gray-400 font-ibm mb-8 max-w-xl mx-auto">Оставьте заявку — менеджер свяжется с вами в течение 2 часов и подготовит персональное коммерческое предложение.</p>
            <button onClick={() => setActivePage("contacts")} className="btn-primary px-10 py-4 rounded-xl text-base inline-flex items-center gap-3">
              <span>Подать заявку</span>
              <Icon name="ArrowRight" size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}