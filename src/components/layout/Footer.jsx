import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // ZEMİN: #163a58 (Lacivert), ÇİZGİ: #dca725 (Altın)
    <footer className="bg-[#163a58] text-white pt-16 pb-8 border-t-4 border-[#dca725] mt-auto">
      <div className="container mx-auto px-6">
        
        {/* ÜST KISIM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* 1. KOLON: MARKA */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <div className="flex flex-col">
                {/* Logo Hover: Beyazdan Altına Dönüş */}
                <h2 className="text-4xl font-bold tracking-tight text-white group-hover:text-[#dca725] transition-colors duration-300">
                  Elite <span className="text-[#dca725] group-hover:text-white transition-colors duration-300">Travel</span>
                </h2>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mt-1 ml-1">
                  BİR TURDAN FAZLASI
                </span>
              </div>
            </Link>
            
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Dr. Ahmet Anapalı rehberliğinde, tarih ve maneviyat dolu özel rotalarla konforlu bir keşif deneyimi sunuyoruz.
            </p>
            
            {/* SOSYAL MEDYA İKONLARI (Hover Efektleri Düzeltildi) */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-[#dca725] hover:text-[#163a58]">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-[#dca725] hover:text-[#163a58]">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover:bg-[#dca725] hover:text-[#163a58]">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* 2. KOLON: HIZLI LİNKLER */}
          <div>
            <h3 className="text-lg font-bold text-[#dca725] mb-6 border-b border-white/10 inline-block pb-2">Hızlı Erişim</h3>
            <ul className="space-y-3">
              {/* Link Hover: Gri'den Altına Dönüş */}
              <li><Link to="/" className="text-gray-300 hover:text-[#dca725] transition-colors duration-300 flex items-center gap-2"><ArrowRight size={14} className="text-[#dca725]"/> Ana Sayfa</Link></li>
              <li><Link to="/turlar" className="text-gray-300 hover:text-[#dca725] transition-colors duration-300 flex items-center gap-2"><ArrowRight size={14} className="text-[#dca725]"/> Turlarımız</Link></li>
              <li><Link to="/hakkimizda" className="text-gray-300 hover:text-[#dca725] transition-colors duration-300 flex items-center gap-2"><ArrowRight size={14} className="text-[#dca725]"/> Kurumsal</Link></li>
              <li><Link to="/iletisim" className="text-gray-300 hover:text-[#dca725] transition-colors duration-300 flex items-center gap-2"><ArrowRight size={14} className="text-[#dca725]"/> İletişim</Link></li>
            </ul>
          </div>

          {/* 3. KOLON: İLETİŞİM */}
          <div>
            <h3 className="text-lg font-bold text-[#dca725] mb-6 border-b border-white/10 inline-block pb-2">Bize Ulaşın</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <div className="shrink-0 mt-1"><MapPin size={18} className="text-[#dca725]" /></div>
                <span className="text-sm">Fuar Alanı: Salon 3, Stant B-12<br/>İstanbul / Türkiye</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="shrink-0"><Phone size={18} className="text-[#dca725]" /></div>
                {/* Telefon Hover */}
                <a href="tel:+31621525757" className="text-sm hover:text-white transition-colors duration-300">+31 6 21525757</a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="shrink-0"><Mail size={18} className="text-[#dca725]" /></div>
                {/* Mail Hover */}
                <a href="mailto:info@elitetravel.com" className="text-sm hover:text-white transition-colors duration-300">info@elitetravel.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* ALT KISIM */}
        <div className="border-t border-white/10 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Elite Travel. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-3">
             <span className="w-2 h-2 rounded-full bg-[#dca725] animate-pulse"></span>
             <span className="text-xs text-gray-400 uppercase tracking-widest">Premium Tourism</span>
          </div>
        </div>
      </div>
    </footer>
  );
}