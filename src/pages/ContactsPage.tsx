import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function ContactsPage() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-12 bg-orange-500" />
            <span className="section-tag">Связаться с нами</span>
          </div>
          <h1 className="font-oswald font-bold text-white text-4xl md:text-5xl mb-4" style={{ letterSpacing: '0.02em' }}>
            КОНТАКТНАЯ <span style={{ color: 'var(--neon-orange)' }}>ИНФОРМАЦИЯ</span>
          </h1>
          <p className="text-gray-400 font-ibm text-lg max-w-2xl leading-relaxed">
            Оставьте заявку или свяжитесь с нами напрямую. Отвечаем в течение 2 часов в рабочее время.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="font-oswald font-bold text-white text-2xl mb-6">ЗАЯВКА НА <span style={{ color: 'var(--neon-orange)' }}>СОТРУДНИЧЕСТВО</span></h2>

            {sent ? (
              <div className="rounded-2xl p-10 text-center" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.08), rgba(34,197,94,0.03))', border: '1px solid rgba(34,197,94,0.2)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(34,197,94,0.15)' }}>
                  <Icon name="CheckCircle" size={32} style={{ color: '#4ade80' }} />
                </div>
                <h3 className="font-oswald font-bold text-white text-xl mb-2">ЗАЯВКА ОТПРАВЛЕНА</h3>
                <p className="text-gray-400 font-ibm">Менеджер свяжется с вами в течение 2 часов</p>
                <button onClick={() => setSent(false)} className="mt-6 btn-outline px-6 py-2 rounded-lg text-sm">Отправить ещё</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-ibm">Ваше имя *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 font-ibm text-sm focus:outline-none transition-colors"
                      style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-ibm">Компания *</label>
                    <input
                      required
                      type="text"
                      value={form.company}
                      onChange={e => setForm({...form, company: e.target.value})}
                      placeholder="ООО «АвтоСервис»"
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 font-ibm text-sm focus:outline-none transition-colors"
                      style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)' }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-ibm">Телефон *</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({...form, phone: e.target.value})}
                      placeholder="+7 (999) 000-00-00"
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 font-ibm text-sm focus:outline-none transition-colors"
                      style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-ibm">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      placeholder="info@company.ru"
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 font-ibm text-sm focus:outline-none transition-colors"
                      style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)' }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1.5 font-ibm">Сообщение</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    rows={4}
                    placeholder="Расскажите о ваших объёмах закупок, интересующих брендах..."
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 font-ibm text-sm focus:outline-none transition-colors resize-none"
                    style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)' }}
                  />
                </div>
                <button type="submit" className="btn-primary w-full py-4 rounded-xl text-sm flex items-center justify-center gap-2">
                  <span>Отправить заявку</span>
                  <Icon name="Send" size={14} />
                </button>
                <p className="text-xs text-gray-600 font-ibm text-center">Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных</p>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-oswald font-bold text-white text-2xl mb-6">НАШИ <span style={{ color: 'var(--neon-orange)' }}>РЕКВИЗИТЫ</span></h2>
            <div className="space-y-4 mb-8">
              {[
                { icon: "MapPin", label: "Адрес склада", value: "г. Москва, ул. Складская, д. 15, стр. 2" },
                { icon: "Phone", label: "Телефон отдела продаж", value: "+7 (495) 123-45-67" },
                { icon: "MessageSquare", label: "WhatsApp / Telegram", value: "+7 (926) 987-65-43" },
                { icon: "Mail", label: "Email", value: "sales@oilpro.ru" },
                { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–18:00, Сб: 10:00–15:00" },
              ].map((contact, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl card-hover" style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                       style={{ background: 'rgba(255,140,0,0.1)', border: '1px solid rgba(255,140,0,0.2)' }}>
                    <Icon name={contact.icon as "MapPin"} size={18} style={{ color: 'var(--neon-orange)' }} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-ibm mb-0.5">{contact.label}</div>
                    <div className="text-white font-ibm text-sm">{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--dark-surface)', border: '1px solid var(--dark-border)', height: '240px' }}>
              <div className="h-full flex flex-col items-center justify-center gap-3">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,140,0,0.1)' }}>
                  <Icon name="MapPin" size={28} style={{ color: 'var(--neon-orange)' }} />
                </div>
                <div className="text-center">
                  <div className="font-oswald font-semibold text-white mb-1">Склад на Складской, 15</div>
                  <div className="text-xs text-gray-500 font-ibm">г. Москва — схема проезда</div>
                </div>
                <button className="btn-outline px-4 py-2 rounded-lg text-xs flex items-center gap-2 mt-2">
                  <Icon name="ExternalLink" size={12} />
                  Открыть карту
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
