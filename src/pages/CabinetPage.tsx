import { useState } from "react";
import Icon from "@/components/ui/icon";

const ORDERS = [
  { id: "OP-2024-1847", date: "15.03.2024", status: "Доставлен", total: "84 500 ₽", items: 12, manager: "Соколова М.А." },
  { id: "OP-2024-1723", date: "28.02.2024", status: "В пути", total: "127 300 ₽", items: 18, manager: "Соколова М.А." },
  { id: "OP-2024-1601", date: "12.02.2024", status: "Доставлен", total: "56 800 ₽", items: 8, manager: "Петров К.В." },
  { id: "OP-2024-1488", date: "25.01.2024", status: "Доставлен", total: "203 100 ₽", items: 31, manager: "Соколова М.А." },
];

const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  "Доставлен": { bg: "rgba(34,197,94,0.15)", color: "#4ade80" },
  "В пути": { bg: "rgba(251,191,36,0.15)", color: "#fbbf24" },
  "Обрабатывается": { bg: "rgba(96,165,250,0.15)", color: "#60a5fa" },
};

export default function CabinetPage() {
  const [activeTab, setActiveTab] = useState("orders");

  const TABS = [
    { id: "orders", label: "История заказов", icon: "Package" },
    { id: "profile", label: "Профиль компании", icon: "Building2" },
    { id: "conditions", label: "Мои условия", icon: "Tag" },
    { id: "documents", label: "Документы", icon: "FileText" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-start justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px w-12 bg-orange-500" />
              <span className="section-tag">B2B Платформа</span>
            </div>
            <h1 className="font-oswald font-bold text-white text-4xl" style={{ letterSpacing: '0.02em' }}>
              ЛИЧНЫЙ <span style={{ color: 'var(--neon-orange)' }}>КАБИНЕТ</span>
            </h1>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,140,0,0.15)' }}>
              <Icon name="Building2" size={18} style={{ color: 'var(--neon-orange)' }} />
            </div>
            <div>
              <div className="font-oswald font-semibold text-white text-sm">ООО «АвтоТехнология»</div>
              <div className="text-xs text-gray-500 font-ibm">Клиент Бизнес · скидка 15%</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Заказов всего", value: "47", icon: "Package" },
            { label: "Сумма за год", value: "1.2 млн ₽", icon: "TrendingUp" },
            { label: "Моя скидка", value: "15%", icon: "Tag" },
            { label: "Кредитный лимит", value: "200 000 ₽", icon: "CreditCard" },
          ].map((stat, i) => (
            <div key={i} className="rounded-xl p-5 card-hover" style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)' }}>
              <div className="flex items-center gap-3 mb-2">
                <Icon name={stat.icon as "Package"} size={16} style={{ color: 'var(--neon-orange)' }} />
                <span className="text-xs text-gray-500 font-ibm">{stat.label}</span>
              </div>
              <div className="font-oswald font-bold text-white text-2xl">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 flex-wrap mb-8">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-oswald transition-all duration-200"
              style={{
                background: activeTab === tab.id ? 'linear-gradient(135deg, #FF8C00, #FFB300)' : 'var(--dark-card)',
                color: activeTab === tab.id ? '#0F0F14' : '#A0A09B',
                border: `1px solid ${activeTab === tab.id ? 'transparent' : 'var(--dark-border)'}`,
                fontWeight: '500',
              }}
            >
              <Icon name={tab.icon as "Package"} size={14} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div>
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--dark-border)' }}>
              <div className="px-6 py-4 flex items-center justify-between" style={{ background: 'var(--dark-surface)' }}>
                <h2 className="font-oswald font-semibold text-white text-lg">История заказов</h2>
                <button className="btn-outline px-4 py-2 rounded-lg text-xs flex items-center gap-2">
                  <Icon name="Download" size={12} />
                  Экспорт
                </button>
              </div>

              <div className="divide-y" style={{ borderColor: 'var(--dark-border)' }}>
                {ORDERS.map((order) => (
                  <div key={order.id} className="px-6 py-5 flex items-center gap-4 hover:bg-opacity-50 transition-colors flex-wrap" style={{ background: 'var(--dark-card)' }}>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <span className="font-oswald font-semibold text-white">{order.id}</span>
                        <span
                          className="px-2 py-0.5 rounded text-xs font-oswald"
                          style={{ background: STATUS_COLORS[order.status]?.bg, color: STATUS_COLORS[order.status]?.color }}
                        >
                          {order.status}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 font-ibm">
                        {order.date} · {order.items} позиций · Менеджер: {order.manager}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-oswald font-bold text-orange-400 text-lg">{order.total}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110" style={{ background: 'var(--dark-surface)', border: '1px solid var(--dark-border)' }}>
                        <Icon name="Eye" size={14} className="text-gray-400" />
                      </button>
                      <button className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110" style={{ background: 'var(--dark-surface)', border: '1px solid var(--dark-border)' }}>
                        <Icon name="Download" size={14} className="text-gray-400" />
                      </button>
                      <button className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110" style={{ background: 'var(--dark-surface)', border: '1px solid var(--dark-border)' }}>
                        <Icon name="RotateCcw" size={14} className="text-gray-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 text-center">
              <button className="btn-outline px-6 py-3 rounded-xl text-sm">Загрузить ещё</button>
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="rounded-2xl p-8" style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)' }}>
            <h2 className="font-oswald font-bold text-white text-2xl mb-6">РЕКВИЗИТЫ <span style={{ color: 'var(--neon-orange)' }}>КОМПАНИИ</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Название компании", value: "ООО «АвтоТехнология»" },
                { label: "ИНН", value: "7701234567" },
                { label: "КПП", value: "770101001" },
                { label: "Юридический адрес", value: "г. Москва, ул. Примерная, д. 1" },
                { label: "Контактное лицо", value: "Иванов Иван Иванович" },
                { label: "Телефон", value: "+7 (495) 000-00-00" },
              ].map(({ label, value }) => (
                <div key={label} className="p-4 rounded-xl" style={{ background: 'var(--dark-surface)' }}>
                  <div className="text-xs text-gray-500 font-ibm mb-1">{label}</div>
                  <div className="font-ibm text-white text-sm">{value}</div>
                </div>
              ))}
            </div>
            <button className="btn-primary mt-6 px-6 py-3 rounded-xl text-sm">
              <span>Редактировать реквизиты</span>
            </button>
          </div>
        )}

        {/* Conditions Tab */}
        {activeTab === "conditions" && (
          <div className="space-y-4">
            <div className="rounded-2xl p-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(255,140,0,0.1), rgba(255,140,0,0.04))', border: '1px solid rgba(255,140,0,0.3)' }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(255,140,0,0.5), transparent)' }} />
              <h2 className="font-oswald font-bold text-white text-2xl mb-6">ПЕРСОНАЛЬНЫЕ <span style={{ color: 'var(--neon-orange)' }}>УСЛОВИЯ</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: "Уровень клиента", value: "Бизнес" },
                  { label: "Персональная скидка", value: "15%" },
                  { label: "Отсрочка платежа", value: "21 день" },
                  { label: "Кредитный лимит", value: "200 000 ₽" },
                  { label: "Минимальный заказ", value: "30 000 ₽" },
                  { label: "Личный менеджер", value: "Соколова М.А." },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="text-xs text-gray-500 font-ibm mb-1">{label}</div>
                    <div className="font-oswald font-bold text-white text-xl">{value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-6 text-center" style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)' }}>
              <p className="text-gray-400 font-ibm text-sm mb-4">Хотите улучшить условия? Увеличьте ежемесячный объём закупок до 600 000 ₽ и получите уровень Премиум со скидкой 20%.</p>
              <button className="btn-outline px-6 py-2 rounded-lg text-sm">Связаться с менеджером</button>
            </div>
          </div>
        )}

        {/* Documents Tab */}
        {activeTab === "documents" && (
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--dark-border)' }}>
            <div className="px-6 py-4" style={{ background: 'var(--dark-surface)' }}>
              <h2 className="font-oswald font-semibold text-white text-lg">Документы</h2>
            </div>
            <div className="divide-y" style={{ borderColor: 'var(--dark-border)', background: 'var(--dark-card)' }}>
              {["Договор поставки №1234 от 01.06.2023", "Дополнительное соглашение №1 от 01.01.2024", "Акт сверки взаиморасчётов за Q1 2024", "Спецификация цен 2024 (Конфиденциально)"].map((doc, i) => (
                <div key={i} className="flex items-center gap-4 px-6 py-4">
                  <Icon name="File" size={18} style={{ color: 'var(--neon-orange)' }} />
                  <span className="flex-1 text-gray-300 font-ibm text-sm">{doc}</span>
                  <button className="flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 font-ibm">
                    <Icon name="Download" size={12} /> Скачать
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
