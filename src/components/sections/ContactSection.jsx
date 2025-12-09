import Swal from 'sweetalert2';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // SweetAlert ile Premium Bildirim
    Swal.fire({
      title: '<span class="text-elite-dark">Mesajınız Alındı!</span>',
      html: `
        <p class="text-gray-600 text-lg mb-2">Teşekkürler, formunuz bize ulaştı.</p>
        <p class="text-gray-500">Ekibimiz en kısa sürede sizinle iletişime geçecektir.</p>
      `,
      icon: 'success',
      iconColor: '#dca725', // elite-gold
      background: '#fff',
      confirmButtonText: 'Tamamdır',
      confirmButtonColor: '#163a58', // elite-dark
      customClass: {
        popup: 'rounded-2xl border border-gray-100 shadow-2xl',
        confirmButton: 'px-6 py-2 rounded-lg font-bold'
      }
    });

    e.target.reset();
  };

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* --- SOL TARAF: İLETİŞİM FORMU --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 relative overflow-hidden"
          >
            {/* Dekoratif Arkaplan */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-elite-gold/5 rounded-full blur-2xl translate-x-10 -translate-y-10"></div>

            <h3 className="text-3xl font-bold text-elite-dark mb-2">Bize Yazın</h3>
            <p className="text-gray-500 mb-8">
              Tur programları, fiyatlar veya aklınıza takılan her şey için...
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-elite-dark ml-1">Adınız Soyadınız</label>
                <input 
                  required 
                  type="text" 
                  placeholder="Ahmet Yılmaz" 
                  className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-elite-gold focus:ring-4 focus:ring-elite-gold/10 transition-all placeholder-gray-400" 
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-elite-dark ml-1">Telefon</label>
                  <input 
                    required 
                    type="tel" 
                    placeholder="+90 555..." 
                    className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-elite-gold focus:ring-4 focus:ring-elite-gold/10 transition-all placeholder-gray-400" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-elite-dark ml-1">E-Posta</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="mail@ornek.com" 
                    className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-elite-gold focus:ring-4 focus:ring-elite-gold/10 transition-all placeholder-gray-400" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-elite-dark ml-1">Mesajınız</label>
                <textarea 
                  required 
                  rows="4" 
                  placeholder="Merhabalar, Kasım ayındaki Kudüs turu hakkında..." 
                  className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:border-elite-gold focus:ring-4 focus:ring-elite-gold/10 transition-all resize-none placeholder-gray-400"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#dca725] text-[#163a58] font-bold py-4 rounded-xl hover:bg-[#c59620] transition-all shadow-lg shadow-[#dca725]/20 flex items-center justify-center gap-2 group"
>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                Mesajı Gönder
              </motion.button>
            </form>
          </motion.div>


          {/* --- SAĞ TARAF: BİLGİ & HARİTA --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* 1. İLETİŞİM KARTLARI */}
            <div className="grid sm:grid-cols-2 gap-4">
               {/* Adres Kutusu */}
               <div className="bg-elite-base p-6 rounded-2xl border border-gray-100 hover:border-elite-gold/30 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm mb-4 text-elite-gold group-hover:bg-elite-gold group-hover:text-white transition-colors">
                    <MapPin size={20} />
                  </div>
                  <h4 className="font-bold text-elite-dark mb-1">Merkez Ofis</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Fuar Alanı: Salon 3<br/>Stant B-12, İstanbul
                  </p>
               </div>

               {/* Telefon Kutusu */}
               <div className="bg-elite-base p-6 rounded-2xl border border-gray-100 hover:border-elite-gold/30 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm mb-4 text-elite-gold group-hover:bg-elite-gold group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <h4 className="font-bold text-elite-dark mb-1">Telefon & WhatsApp</h4>
                  <p className="text-sm text-gray-500 mb-2">+31 6 21525757</p>
                  <a href="https://wa.me/31621525757" target="_blank" rel="noreferrer" className="text-xs font-bold text-green-600 flex items-center gap-1 hover:underline">
                    <MessageCircle size={12}/> Hızlı Mesaj
                  </a>
               </div>
            </div>

            {/* 2. GOOGLE MAPS (HARİTA) */}
            <div className="flex-grow bg-gray-100 rounded-[2rem] overflow-hidden shadow-lg border border-gray-200 relative h-[300px] lg:h-auto group">
               {/* Harita Yükleniyor Efekti */}
               <div className="absolute inset-0 bg-gray-200 animate-pulse z-0"></div>
               
               {/* Gerçek İframe */}
               <iframe 
                 title="Elite Travel Location"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2457.8433436957807!2d5.949565077182977!3d51.97328077192289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7a40dc19b323b%3A0x725e5c549d8fd064!2sLeemansweg%2027%20G%2C%206827%20BX%20Arnhem%2C%20Hollanda!5e0!3m2!1str!2str!4v1765302038602!5m2!1str!2str"
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen="" 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="relative z-10 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
               ></iframe>

               {/* Harita Üstü Badge */}
               <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg text-xs font-bold text-elite-dark flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Ofisimiz Açık
               </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}