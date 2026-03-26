import { useState } from "react";
import Icon from "@/components/ui/icon";

const FILTERS = ["Все", "Моторные масла", "Трансмиссионные", "Антифризы", "Автокосметика", "Смазки", "Присадки"];

const PRODUCTS = [
  { id: 1, name: "Castrol EDGE 5W-40", category: "Моторные масла", brand: "Castrol", volume: "4 л", price: "1 250", priceWholesale: "980", sku: "CAS-E5W40-4", inStock: true },
  { id: 2, name: "Mobil 1 0W-40", category: "Моторные масла", brand: "Mobil", volume: "4 л", price: "1 480", priceWholesale: "1 150", sku: "MOB-1-0W40-4", inStock: true },
  { id: 3, name: "Shell Helix Ultra 5W-30", category: "Моторные масла", brand: "Shell", volume: "5 л", price: "1 390", priceWholesale: "1 080", sku: "SHE-HU5W30-5", inStock: true },
  { id: 4, name: "Liqui Moly Top Tec 5W-30", category: "Моторные масла", brand: "Liqui Moly", volume: "4 л", price: "1 620", priceWholesale: "1 290", sku: "LM-TT5W30-4", inStock: false },
  { id: 5, name: "Total Quartz INEO 5W-40", category: "Моторные масла", brand: "Total", volume: "4 л", price: "1 180", priceWholesale: "920", sku: "TOT-QI5W40-4", inStock: true },
  { id: 6, name: "Mannol ATF Dexron III", category: "Трансмиссионные", brand: "Mannol", volume: "1 л", price: "320", priceWholesale: "240", sku: "MAN-ATF-D3-1", inStock: true },
  { id: 7, name: "Shell Spirax S5 ATF", category: "Трансмиссионные", brand: "Shell", volume: "1 л", price: "580", priceWholesale: "440", sku: "SHE-SP5ATF-1", inStock: true },
  { id: 8, name: "Антифриз G12+ красный", category: "Антифризы", brand: "Mannol", volume: "5 л", price: "680", priceWholesale: "520", sku: "MAN-G12-5", inStock: true },
  { id: 9, name: "FELIX антифриз G11 зелёный", category: "Антифризы", brand: "Felix", volume: "5 л", price: "420", priceWholesale: "320", sku: "FEL-G11-5", inStock: true },
  { id: 10, name: "Liqui Moly полироль кузова", category: "Автокосметика", brand: "Liqui Moly", volume: "500 мл", price: "890", priceWholesale: "680", sku: "LM-POL-500", inStock: true },
  { id: 11, name: "Смазка литиевая Castrol", category: "Смазки", brand: "Castrol", volume: "400 г", price: "340", priceWholesale: "260", sku: "CAS-GR-400", inStock: false },
  { id: 12, name: "Присадка в топливо Liqui Moly", category: "Присадки", brand: "Liqui Moly", volume: "300 мл", price: "760", priceWholesale: "590", sku: "LM-FUEL-300", inStock: true },
];

export default function CatalogPage() {
  const [activeFilter, setActiveFilter] = useState("Все");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);

  const filtered = PRODUCTS.filter(p => {
    const matchFilter = activeFilter === "Все" || p.category === activeFilter;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                        p.brand.toLowerCase().includes(search.toLowerCase()) ||
                        p.sku.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-12 bg-orange-500" />
            <span className="section-tag">Оптовый ассортимент</span>
          </div>
          <h1 className="font-oswald font-bold text-white text-4xl md:text-5xl mb-2" style={{ letterSpacing: '0.02em' }}>
            КАТАЛОГ <span style={{ color: 'var(--neon-orange)' }}>ТОВАРОВ</span>
          </h1>
          <p className="text-gray-400 font-ibm">Цены указаны для оптовых закупок. Для розничных уточняйте у менеджера.</p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Icon name="Search" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Поиск по названию, бренду, артикулу..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl font-ibm text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-colors"
              style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)' }}
            />
          </div>
          <button className="btn-primary px-6 py-3 rounded-xl text-sm flex items-center gap-2 whitespace-nowrap">
            <span>Скачать прайс</span>
            <Icon name="Download" size={14} />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 flex-wrap mb-8">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-4 py-2 rounded-lg text-sm font-oswald transition-all duration-200"
              style={{
                background: activeFilter === f ? 'linear-gradient(135deg, #FF8C00, #FFB300)' : 'var(--dark-card)',
                color: activeFilter === f ? '#0F0F14' : '#A0A09B',
                border: `1px solid ${activeFilter === f ? 'transparent' : 'var(--dark-border)'}`,
                fontWeight: activeFilter === f ? '600' : '400',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map(product => (
            <div
              key={product.id}
              className="rounded-xl overflow-hidden card-hover cursor-pointer"
              style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)' }}
              onClick={() => setSelectedProduct(product)}
            >
              {/* Product image placeholder */}
              <div className="h-40 flex items-center justify-center relative" style={{ background: 'var(--dark-surface)' }}>
                <div className="w-16 h-20 rounded-lg flex items-center justify-center"
                     style={{ background: 'rgba(255,140,0,0.08)', border: '1px solid rgba(255,140,0,0.15)' }}>
                  <Icon name="Droplets" size={32} style={{ color: 'rgba(255,140,0,0.5)' }} />
                </div>
                {!product.inStock && (
                  <div className="absolute top-3 right-3 px-2 py-1 rounded text-xs font-oswald"
                       style={{ background: 'rgba(220,38,38,0.2)', color: '#f87171', border: '1px solid rgba(220,38,38,0.3)' }}>
                    Под заказ
                  </div>
                )}
                {product.inStock && (
                  <div className="absolute top-3 right-3 px-2 py-1 rounded text-xs font-oswald"
                       style={{ background: 'rgba(34,197,94,0.15)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.2)' }}>
                    В наличии
                  </div>
                )}
              </div>

              <div className="p-4">
                <div className="text-xs text-gray-500 font-ibm mb-1">{product.brand} · {product.sku}</div>
                <h3 className="font-oswald font-semibold text-white text-base mb-1 leading-tight">{product.name}</h3>
                <div className="text-xs text-gray-400 font-ibm mb-3">{product.volume} · {product.category}</div>

                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-xs text-gray-500 font-ibm">Опт от 10 шт.</div>
                    <div className="font-oswald font-bold text-orange-400 text-xl">{product.priceWholesale} ₽</div>
                  </div>
                  <button
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{ background: 'rgba(255,140,0,0.1)', border: '1px solid rgba(255,140,0,0.2)' }}
                    onClick={e => { e.stopPropagation(); }}
                  >
                    <Icon name="ShoppingCart" size={16} style={{ color: 'var(--neon-orange)' }} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <Icon name="SearchX" size={48} className="text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 font-ibm">По вашему запросу ничего не найдено</p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }} onClick={() => setSelectedProduct(null)}>
          <div className="w-full max-w-lg rounded-2xl overflow-hidden animate-fade-in" style={{ background: 'var(--dark-card)', border: '1px solid rgba(255,140,0,0.2)' }} onClick={e => e.stopPropagation()}>
            <div className="h-48 flex items-center justify-center" style={{ background: 'var(--dark-surface)' }}>
              <div className="w-20 h-28 rounded-xl flex items-center justify-center"
                   style={{ background: 'rgba(255,140,0,0.08)', border: '1px solid rgba(255,140,0,0.2)' }}>
                <Icon name="Droplets" size={40} style={{ color: 'rgba(255,140,0,0.6)' }} />
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xs text-gray-500 font-ibm mb-1">{selectedProduct.brand} · {selectedProduct.sku}</div>
                  <h2 className="font-oswald font-bold text-white text-2xl">{selectedProduct.name}</h2>
                </div>
                <button onClick={() => setSelectedProduct(null)} className="text-gray-500 hover:text-white ml-4">
                  <Icon name="X" size={20} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { label: "Категория", value: selectedProduct.category },
                  { label: "Объём", value: selectedProduct.volume },
                  { label: "Розничная цена", value: `${selectedProduct.price} ₽` },
                  { label: "Оптовая цена", value: `${selectedProduct.priceWholesale} ₽` },
                ].map(({ label, value }) => (
                  <div key={label} className="rounded-lg p-3" style={{ background: 'var(--dark-surface)' }}>
                    <div className="text-xs text-gray-500 font-ibm mb-1">{label}</div>
                    <div className="font-oswald font-semibold text-white">{value}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="btn-primary flex-1 py-3 rounded-xl text-sm flex items-center justify-center gap-2">
                  <span>Добавить в заказ</span>
                  <Icon name="ShoppingCart" size={14} />
                </button>
                <button className="btn-outline px-4 py-3 rounded-xl text-sm">
                  Запрос КП
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
