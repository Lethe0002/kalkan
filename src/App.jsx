
import { motion } from "framer-motion";
import { Menu, X, Shield, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 }
};

export default function App() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: "Ana Sayfa", href: "#home" },
    { label: "Çalışma Alanları", href: "#services" },
    { label: "Büro", href: "#about" },
    { label: "İletişim", href: "#contact" }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <a href="#home" className="font-cormorant text-xl tracking-widest">
              KALKAN HUKUK
            </a>
            <nav className="hidden md:flex items-center gap-8 font-josefin text-sm">
              {navItems.map((i) => (
                <a key={i.label} href={i.href} className="text-neutral-700 hover:text-neutral-950 transition">
                  {i.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold border border-neutral-800 hover:bg-neutral-100 transition shadow-sm">
                Randevu Al
              </a>
            </nav>
            <button className="md:hidden p-2 rounded-xl border" onClick={() => setOpen(!open)}>
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden pb-4 font-josefin">
              <div className="grid gap-2">
                {navItems.map((i) => (
                  <a key={i.label} href={i.href} className="px-2 py-2 rounded-xl hover:bg-neutral-100" onClick={() => setOpen(false)}>
                    {i.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm border border-neutral-800 hover:bg-neutral-100 transition">
                  Randevu Al
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[var(--bg)]" />
        {/* Decor shapes */}
        <div className="pointer-events-none absolute -top-10 -right-10 w-64 h-64 rounded-full" style={{ backgroundColor: 'var(--shape1)', border: '1px solid var(--shape-border)' }} />
        <div className="pointer-events-none absolute -bottom-16 -left-16 w-80 h-80 rounded-3xl rotate-6" style={{ backgroundColor: 'var(--shape2)', border: '1px solid var(--shape-border)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <motion.div {...fadeUp} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium bg-white shadow-sm font-josefin">
              <Shield className="size-3" /> Deneyimli • Güvenilir • Çözüm Odaklı
            </span>
            <div className="mt-3 font-josefin text-sm tracking-[0.25em]">ARABULUCULUK & DANIŞMANLIK</div>
            <h1 className="mt-6 text-4xl sm:text-5xl/tight font-cormorant tracking-widest">
              Hızlı ve Etkili <span style={{ color: 'var(--shape2)' }}>Hukuk</span> Çözümleri
            </h1>
            <p className="mt-4 font-josefin text-neutral-700 max-w-xl">
              Şeffaf süreç, hızlı dönüş ve sonuç odaklı yaklaşımla bireysel ve kurumsal müvekkillerimize hizmet veriyoruz.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 font-josefin">
              <a href="#contact" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold border border-neutral-900 hover:bg-neutral-100 transition">
                Ücretsiz Ön Görüşme
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold bg-neutral-900 text-white hover:bg-neutral-800 transition shadow-sm">
                Çalışma Alanlarımız
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact (short) */}
      <section id="contact" className="py-16 lg:py-24 font-josefin">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-cormorant tracking-widest">İletişim</h2>
            <p className="mt-2 text-neutral-600">Bizimle iletişime geçmekten çekinmeyin.</p>
          </motion.div>
          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3"><Mail className="size-5" /><a href="mailto:info@kalkanhukuk.org">info@kalkanhukuk.org</a></div>
              <div className="mt-3 flex items-center gap-3"><Phone className="size-5" /><a href="tel:+905068874574">+90 506 887 45 74</a></div>
              <div className="mt-3 flex items-center gap-3"><MapPin className="size-5" /><span>Mehmet Akif Ersoy Mah. 51/2 Sk. D-D İş Merkezi B Blok No:2B/15 Merkezefendi / Denizli</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Kalkan Hukuk. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-900">Aydınlatma Metni</a>
            <a href="#" className="hover:text-neutral-900">Çerez Politikası</a>
            <a href="#contact" className="hover:text-neutral-900">İletişim</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
