import Icon from "@/components/ui/icon";

const TEAM = [
  { name: "Алексей Петров", role: "Генеральный директор", exp: "18 лет в отрасли" },
  { name: "Марина Соколова", role: "Директор по продажам", exp: "12 лет в B2B" },
  { name: "Дмитрий Козлов", role: "Руководитель склада", exp: "15 лет логистики" },
];

const MILESTONES = [
  { year: "2012", event: "Основание компании, первые 50 клиентов" },
  { year: "2015", event: "Расширение склада до 5 000 м²" },
  { year: "2018", event: "Партнёрство с Castrol и Shell" },
  { year: "2021", event: "Запуск B2B личных кабинетов" },
  { year: "2024", event: "Более 850 активных оптовых клиентов" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-12 bg-orange-500" />
            <span className="section-tag">О нас</span>
          </div>
          <h1 className="font-oswald font-bold text-white text-4xl md:text-5xl mb-4" style={{ letterSpacing: '0.02em' }}>
            КТО МЫ <span style={{ color: 'var(--neon-orange)' }}>ТАКИЕ</span>
          </h1>
          <p className="text-gray-400 font-ibm text-lg max-w-2xl leading-relaxed">
            ОйлПро — федеральный оптовый дистрибьютор автомасел и автохимии с 2012 года. Работаем напрямую с ведущими мировыми производителями и предлагаем выгодные условия для B2B клиентов по всей России.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="rounded-2xl p-8 relative overflow-hidden" style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)' }}>
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #FF8C00, #FFB300)' }} />
            <Icon name="Target" size={32} style={{ color: 'var(--neon-orange)' }} className="mb-4" />
            <h2 className="font-oswald font-bold text-white text-2xl mb-3">НАША МИССИЯ</h2>
            <p className="text-gray-400 font-ibm leading-relaxed">
              Обеспечить каждый автосервис и авторынок России качественными смазочными материалами по честным оптовым ценам с максимально удобным сервисом.
            </p>
          </div>
          <div className="rounded-2xl p-8 relative overflow-hidden" style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)' }}>
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(to right, #FF8C00, #FFB300)' }} />
            <Icon name="Eye" size={32} style={{ color: 'var(--neon-orange)' }} className="mb-4" />
            <h2 className="font-oswald font-bold text-white text-2xl mb-3">НАШИ ЦЕННОСТИ</h2>
            <div className="space-y-2">
              {["Честность и прозрачность цен", "Сертифицированное качество товаров", "Партнёрский подход к каждому клиенту", "Скорость и надёжность поставок"].map(v => (
                <div key={v} className="flex items-center gap-2">
                  <Icon name="Check" size={14} style={{ color: 'var(--neon-orange)' }} />
                  <span className="text-gray-300 font-ibm text-sm">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-12 bg-orange-500" />
            <span className="section-tag">История компании</span>
          </div>
          <h2 className="font-oswald font-bold text-white text-3xl md:text-4xl mb-12" style={{ letterSpacing: '0.02em' }}>
            НАШ <span style={{ color: 'var(--neon-orange)' }}>ПУТЬ</span>
          </h2>

          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px" style={{ background: 'var(--dark-border)' }} />
            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <div key={i} className="flex items-start gap-8">
                  <div className="w-32 flex-shrink-0 text-right">
                    <span className="font-oswald font-bold text-lg" style={{ color: 'var(--neon-orange)' }}>{m.year}</span>
                  </div>
                  <div className="relative flex-shrink-0">
                    <div className="w-3 h-3 rounded-full -ml-[6px] mt-1.5" style={{ background: 'var(--neon-orange)', boxShadow: '0 0 8px rgba(255,140,0,0.5)' }} />
                  </div>
                  <div className="pb-2">
                    <p className="text-gray-300 font-ibm">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-12 bg-orange-500" />
            <span className="section-tag">Команда</span>
          </div>
          <h2 className="font-oswald font-bold text-white text-3xl md:text-4xl mb-12" style={{ letterSpacing: '0.02em' }}>
            РУКОВОДСТВО <span style={{ color: 'var(--neon-orange)' }}>КОМПАНИИ</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <div key={i} className="rounded-xl p-6 text-center card-hover" style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)' }}>
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                     style={{ background: 'rgba(255,140,0,0.1)', border: '2px solid rgba(255,140,0,0.2)' }}>
                  <Icon name="User" size={32} style={{ color: 'rgba(255,140,0,0.6)' }} />
                </div>
                <h3 className="font-oswald font-semibold text-white text-lg mb-1">{member.name}</h3>
                <div className="text-orange-400 font-ibm text-sm mb-1">{member.role}</div>
                <div className="text-gray-500 font-ibm text-xs">{member.exp}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div className="rounded-2xl p-8" style={{ background: 'var(--dark-surface)', border: '1px solid var(--dark-border)' }}>
          <div className="flex items-center gap-4 mb-6">
            <Icon name="Award" size={28} style={{ color: 'var(--neon-orange)' }} />
            <h2 className="font-oswald font-bold text-white text-2xl">СЕРТИФИКАТЫ И ЛИЦЕНЗИИ</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {["ISO 9001:2015 — система менеджмента качества", "Официальный дистрибьютор Castrol", "Официальный партнёр Shell Lubricants", "Сертификат соответствия ГОСТ Р", "Лицензия на оптовую торговлю", "Партнёрский статус Liqui Moly"].map((cert, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl" style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)' }}>
                <Icon name="BadgeCheck" size={18} style={{ color: 'var(--neon-orange)' }} className="flex-shrink-0" />
                <span className="text-sm text-gray-300 font-ibm">{cert}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
