import Icon from "@/components/ui/icon";

const DISCOUNT_TIERS = [
  { volume: "от 50 000 ₽", discount: "5%", label: "Старт" },
  { volume: "от 150 000 ₽", discount: "10%", label: "Базовый" },
  { volume: "от 300 000 ₽", discount: "15%", label: "Бизнес" },
  { volume: "от 600 000 ₽", discount: "20%", label: "Премиум" },
  { volume: "от 1 000 000 ₽", discount: "25%", label: "VIP" },
];

const DELIVERY = [
  { method: "Самовывоз со склада", time: "В день заказа", cost: "Бесплатно", icon: "Package" },
  { method: "Доставка по городу", time: "1-2 дня", cost: "от 500 ₽", icon: "Truck" },
  { method: "Доставка по России", time: "2-7 дней", cost: "По тарифам ТК", icon: "Globe" },
  { method: "Экспресс-доставка", time: "24 часа", cost: "Индивидуально", icon: "Zap" },
];

const PAYMENT = [
  { method: "Безналичный расчёт", desc: "Счёт на оплату, работаем с НДС и без НДС", icon: "Building2" },
  { method: "Банковская карта", desc: "Для физических лиц и ИП при самовывозе", icon: "CreditCard" },
  { method: "Отсрочка платежа", desc: "До 30 дней для постоянных клиентов по договору", icon: "Calendar" },
  { method: "Кредитный лимит", desc: "Устанавливается индивидуально после 3 месяцев работы", icon: "TrendingUp" },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-12 bg-orange-500" />
            <span className="section-tag">Условия работы</span>
          </div>
          <h1 className="font-oswald font-bold text-white text-4xl md:text-5xl mb-4" style={{ letterSpacing: '0.02em' }}>
            УСЛОВИЯ <span style={{ color: 'var(--neon-orange)' }}>СОТРУДНИЧЕСТВА</span>
          </h1>
          <p className="text-gray-400 font-ibm text-lg max-w-2xl leading-relaxed">
            Прозрачные условия, выгодные скидки и гибкий подход к каждому партнёру.
          </p>
        </div>

        {/* Discount Tiers */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="section-tag">Система скидок</span>
          </div>
          <h2 className="font-oswald font-bold text-white text-3xl mb-10">ПРОГРЕССИВНЫЕ <span style={{ color: 'var(--neon-orange)' }}>СКИДКИ</span></h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {DISCOUNT_TIERS.map((tier, i) => (
              <div
                key={i}
                className="rounded-xl p-5 text-center relative overflow-hidden card-hover"
                style={{
                  background: i === 4 ? 'linear-gradient(135deg, rgba(255,140,0,0.15), rgba(255,179,0,0.08))' : 'var(--dark-card)',
                  border: `1px solid ${i === 4 ? 'rgba(255,140,0,0.4)' : 'var(--dark-border)'}`,
                }}
              >
                {i === 4 && <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(255,140,0,0.6), transparent)' }} />}
                <div className="font-oswald text-xs tracking-widest text-gray-500 mb-2 uppercase">{tier.label}</div>
                <div className="font-oswald font-bold mb-1" style={{ fontSize: '2.5rem', color: 'var(--neon-orange)', lineHeight: 1 }}>{tier.discount}</div>
                <div className="text-xs text-gray-400 font-ibm mt-2">{tier.volume}</div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 font-ibm text-sm mt-4">* Скидки применяются к оптовым ценам прайс-листа. Расчёт по суммарному объёму за месяц.</p>
        </div>

        {/* Delivery */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="section-tag">Логистика</span>
          </div>
          <h2 className="font-oswald font-bold text-white text-3xl mb-10">ДОСТАВКА И <span style={{ color: 'var(--neon-orange)' }}>САМОВЫВОЗ</span></h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DELIVERY.map((item, i) => (
              <div key={i} className="rounded-xl p-6 flex items-start gap-4 card-hover" style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)' }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                     style={{ background: 'rgba(255,140,0,0.1)', border: '1px solid rgba(255,140,0,0.2)' }}>
                  <Icon name={item.icon as "Package"} size={22} style={{ color: 'var(--neon-orange)' }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-oswald font-semibold text-white text-lg mb-1">{item.method}</h3>
                  <div className="flex items-center gap-4 text-sm font-ibm">
                    <span className="text-gray-400">Срок: <span className="text-gray-200">{item.time}</span></span>
                    <span className="text-gray-400">Стоимость: <span className="text-orange-400">{item.cost}</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-orange-500" />
            <span className="section-tag">Финансы</span>
          </div>
          <h2 className="font-oswald font-bold text-white text-3xl mb-10">СПОСОБЫ <span style={{ color: 'var(--neon-orange)' }}>ОПЛАТЫ</span></h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PAYMENT.map((item, i) => (
              <div key={i} className="rounded-xl p-6 flex items-start gap-4 card-hover" style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)' }}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                     style={{ background: 'rgba(255,140,0,0.1)', border: '1px solid rgba(255,140,0,0.2)' }}>
                  <Icon name={item.icon as "Building2"} size={22} style={{ color: 'var(--neon-orange)' }} />
                </div>
                <div>
                  <h3 className="font-oswald font-semibold text-white text-lg mb-1">{item.method}</h3>
                  <p className="text-sm text-gray-400 font-ibm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Min Order */}
        <div className="rounded-2xl p-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(255,140,0,0.08), rgba(255,140,0,0.03))', border: '1px solid rgba(255,140,0,0.25)' }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(255,140,0,0.5), transparent)' }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "ShoppingCart", title: "Минимальный заказ", value: "от 10 000 ₽", desc: "Минимальная сумма первого заказа" },
              { icon: "RotateCcw", title: "Возврат товара", value: "14 дней", desc: "Приём возврата надлежащего качества" },
              { icon: "FileText", title: "Документооборот", value: "ЭДО", desc: "Работаем через электронный документооборот" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                     style={{ background: 'rgba(255,140,0,0.1)', border: '1px solid rgba(255,140,0,0.2)' }}>
                  <Icon name={item.icon as "ShoppingCart"} size={26} style={{ color: 'var(--neon-orange)' }} />
                </div>
                <div className="font-oswald font-bold text-2xl mb-1" style={{ color: 'var(--neon-orange)' }}>{item.value}</div>
                <div className="font-oswald font-semibold text-white text-sm mb-1">{item.title}</div>
                <div className="text-xs text-gray-400 font-ibm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
