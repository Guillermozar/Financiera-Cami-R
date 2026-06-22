import { 
  CreditCard, 
  TrendingUp, 
  Smartphone, 
  CheckCircle2, 
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Star
} from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

/**
 * Dedicated Products Page.
 * Displays interactive list of products (Cuentas, Ahorros, Créditos) with a comparison table.
 * 
 * @param {object} props
 * @param {Function} props.onNavigate - Navigation callback.
 */
export default function ProductsPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all'); // 'all' | 'cuentas' | 'ahorros' | 'creditos'
  const { language, t } = useLanguage();

  const products = [
    {
      id: 'cuentas',
      category: 'cuentas',
      icon: <CreditCard size={28} />,
      title: t('productsPage.list.cuentas.title'),
      description: t('productsPage.list.cuentas.description'),
      features: t('productsPage.list.cuentas.features') || [],
      ctaText: t('productsPage.list.cuentas.cta'),
      onCtaClick: () => onNavigate('solicitud')
    },
    {
      id: 'ahorros',
      category: 'ahorros',
      icon: <TrendingUp size={28} />,
      title: t('productsPage.list.ahorros.title'),
      description: t('productsPage.list.ahorros.description'),
      features: t('productsPage.list.ahorros.features') || [],
      ctaText: t('productsPage.list.ahorros.cta'),
      onCtaClick: () => onNavigate('simular-ahorro'),
      featured: true
    },
    {
      id: 'creditos',
      category: 'creditos',
      icon: <Smartphone size={28} />,
      title: t('productsPage.list.creditos.title'),
      description: t('productsPage.list.creditos.description'),
      features: t('productsPage.list.creditos.features') || [],
      ctaText: t('productsPage.list.creditos.cta'),
      onCtaClick: () => onNavigate('simular-credito')
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="pt-28 pb-20 px-6 max-w-6xl mx-auto min-h-[85vh] flex flex-col justify-center animate-fade-in text-left">
      {/* Back Button */}
      <button 
        onClick={() => onNavigate('home')}
        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-100 mb-8 self-start text-sm font-bold group cursor-pointer"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform duration-100" />
        <span>{t('common.backToHome')}</span>
      </button>

      {/* Header */}
      <div className="mb-12 space-y-3">
        <h1 className="text-4xl font-serif font-normal text-white tracking-tight">
          {t('productsPage.title')}
        </h1>
        <p className="text-slate-400 text-sm md:text-base font-light max-w-xl">
          {t('productsPage.desc')}
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-10 border-b border-white/5 pb-6">
        {[
          { id: 'all', label: t('productsPage.categories.all') },
          { id: 'cuentas', label: t('productsPage.categories.cuentas') },
          { id: 'ahorros', label: t('productsPage.categories.ahorros') },
          { id: 'creditos', label: t('productsPage.categories.creditos') }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-100 cursor-pointer ${
              activeCategory === tab.id
                ? 'bg-brand-gold text-brand-dark shadow-md shadow-brand-gold/10'
                : 'bg-brand-card/60 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-16">
        {filteredProducts.map((p) => (
          <div 
            key={p.id}
            className={`group p-8 rounded-4xl border transition-all duration-100 flex flex-col justify-between relative shadow-xl ${
              p.featured 
                ? 'bg-brand-card border-brand-gold shadow-brand-gold/5' 
                : 'bg-brand-card/40 border-white/5 hover:border-brand-gold/40 hover:bg-[#121E33]/70'
            }`}
          >
            {p.featured && (
              <div className="absolute -top-4 left-8 bg-linear-to-r from-brand-gold to-brand-gold-light text-brand-dark text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                <Star size={10} className="fill-brand-dark" />
                <span>{t('productsPage.recommended')}</span>
              </div>
            )}

            <div>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-100 ${
                p.featured 
                  ? 'bg-brand-gold/10 text-brand-gold' 
                  : 'bg-white/5 text-white group-hover:bg-brand-gold group-hover:text-brand-dark'
              }`}>
                {p.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                {p.description}
              </p>

              <ul className="space-y-3 mb-8" aria-label={`Beneficios de ${p.title}`}>
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs font-bold text-slate-300">
                    <CheckCircle2 size={16} className="text-brand-gold shrink-0 mt-0.5" />
                    <span className="leading-tight font-sans font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={p.onCtaClick}
              className={`w-full py-3.5 rounded-xl font-bold text-xs active:scale-[0.98] transition-all duration-100 cursor-pointer text-center flex items-center justify-center gap-1.5 ${
                p.featured
                  ? 'bg-linear-to-r from-brand-gold to-brand-gold-light text-brand-dark shadow-lg shadow-brand-gold/10'
                  : 'bg-white/5 text-slate-200 border border-white/10 hover:bg-brand-gold hover:text-brand-dark hover:border-transparent'
              }`}
            >
              <span>{p.ctaText}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="bg-brand-card/40 border border-white/5 rounded-3xl p-6 lg:p-8 space-y-6">
        <h3 className="text-xl font-serif font-normal text-white">{t('productsPage.comparisonTitle')}</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-slate-400 uppercase tracking-widest font-extrabold">
                <th className="pb-4 font-bold">{t('productsPage.table.feature')}</th>
                <th className="pb-4 font-bold">{t('productsPage.table.digital')}</th>
                <th className="pb-4 font-bold">{t('productsPage.table.savings')}</th>
                <th className="pb-4 font-bold">{t('productsPage.table.credits')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr>
                <td className="py-4 font-bold text-white">{t('productsPage.table.maintenance')}</td>
                <td className="py-4">{t('productsPage.table.maintenanceVal')}</td>
                <td className="py-4">Gs. 0</td>
                <td className="py-4">Gs. 0</td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-white">{t('productsPage.table.rate')}</td>
                <td className="py-4">—</td>
                <td className="py-4 text-emerald-400">{t('productsPage.table.rateSavingsVal')}</td>
                <td className="py-4 text-brand-gold-light">{t('productsPage.table.rateCreditsVal')}</td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-white">{t('productsPage.table.terms')}</td>
                <td className="py-4">{t('productsPage.table.termsDigitalVal')}</td>
                <td className="py-4">12, 24, 36, 60 {language === 'es' ? 'meses' : 'months'}</td>
                <td className="py-4">6, 12, 24, 36, 48 {language === 'es' ? 'meses' : 'months'}</td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-white">{t('productsPage.table.requirements')}</td>
                <td className="py-4">{t('productsPage.table.requirementsVal')}</td>
                <td className="py-4">{t('productsPage.table.requirementsVal')}</td>
                <td className="py-4">{t('productsPage.table.requirementsCreditsVal')}</td>
              </tr>
              <tr>
                <td className="py-4 font-bold text-white">{t('productsPage.table.channel')}</td>
                <td className="py-4 text-brand-gold-light">{t('productsPage.table.channelDigitalVal')}</td>
                <td className="py-4 text-brand-gold-light">{t('productsPage.table.channelVal')}</td>
                <td className="py-4 text-brand-gold-light">{t('productsPage.table.channelVal')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
