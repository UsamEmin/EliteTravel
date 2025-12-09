import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, History, Users, Star, Map, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  
  // Animasyon varyasyonları
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* --- 1. HERO BÖLÜMÜ (Parallax Etkili) --- */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Arkaplan Resmi - İstanbul Silüeti */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541432901042-2d8bd64b4a6b?q=80&w=1920&auto=format&fit=crop")' }}
        >
          {/* Karartma Perdesi */}
          <div className="absolute inset-0 bg-[#163a58]/80 mix-blend-multiply"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <span className="text-[#dca725] font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-4 block">
            Bir Turdan Fazlası
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Tarihin İzinde <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dca725] to-[#fcd34d]">Elite Bir Yolculuk</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Sadece gezmiyoruz; Dr. Ahmet Anapalı rehberliğinde medeniyetimizin köklerine iniyor, taşların fısıldadığı hikayeleri dinliyoruz.
          </p>
        </motion.div>
      </div>

      {/* --- 2. BİZ KİMİZ & HİKAYEMİZ --- */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Sol: Metin */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-[#163a58]/5 text-[#163a58] font-bold text-sm">
              Elite Travel Hikayesi
            </div>
            <h2 className="text-4xl font-bold text-[#163a58] leading-tight">
              Misafir Değil, <span className="text-[#dca725] underline decoration-4 underline-offset-4 decoration-[#dca725]/30">Ecdadın Torunlarını</span> Ağırlıyoruz.
            </h2>
            <div className="text-gray-600 space-y-4 leading-relaxed text-lg">
              <p>
                Elite Travel olarak yola çıkarken tek bir gayemiz vardı: Avrupa'da yaşayan vatandaşlarımızı, sıradan turistik gezilerin ötesine taşıyıp, kendi öz medeniyetleriyle buluşturmak.
              </p>
              <p>
                Düsseldorf ve Köln merkezli başladığımız bu yolculukta, klasik rehberlik anlayışını yıktık. Bizim turlarımızda "şurada şu bina var" denilip geçilmez; o binanın harcındaki gözyaşı, dua ve zafer anlatılır.
              </p>
              <p className="font-semibold text-[#163a58] border-l-4 border-[#dca725] pl-4 italic">
                "Bizimle Kudüs'e gidenler Mescid-i Aksa'nın kokusunu, Bursa'ya gidenler Osman Gazi'nin duasını yüreklerinde hissederler."
              </p>
            </div>
          </motion.div>

          {/* Sağ: Görsel Kolaj */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1527838832700-5059252407fa?w=600&q=80" 
                className="rounded-2xl shadow-xl w-full h-64 object-cover transform translate-y-8" 
                alt="İstanbul"
              />
              <img 
                src="https://images.unsplash.com/photo-1564998708761-a831e5f08577?w=600&q=80" 
                className="rounded-2xl shadow-xl w-full h-64 object-cover" 
                alt="Kudüs"
              />
            </div>
            {/* Dekoratif Daire */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#dca725]/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. REHBERİMİZ (ÖZEL BÖLÜM) --- */}
      <section className="py-20 bg-[#163a58] text-white relative overflow-hidden">
        {/* Arkaplan Deseni */}
        <div className="absolute top-0 right-0 p-8 opacity-5">
           <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Rehber Fotosu */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#dca725] rounded-3xl transform rotate-6 transition-transform group-hover:rotate-3"></div>
              {/* NOT: Buraya Dr. Ahmet Anapalı'nın gerçek fotosunu koymalısın. Şimdilik placeholder var. */}
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" 
                alt="Dr. Ahmet Anapalı" 
                className="relative rounded-3xl w-full h-[450px] object-cover shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl text-[#163a58] text-center shadow-lg">
                <h3 className="font-bold text-xl">Dr. Ahmet Anapalı</h3>
                <span className="text-sm font-medium text-[#dca725]">Tarihçi Yazar & Rehber</span>
              </div>
            </div>
          </div>

          {/* Rehber Yazısı */}
          <div className="md:col-span-7 lg:col-span-8 space-y-6">
            <h2 className="text-4xl font-bold">Taşları Konuşturan Adam</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Tarih kitaplarında yazan soğuk bilgileri unutun. Elite Travel turlarında, Dr. Ahmet Anapalı ile birlikteyken bir çeşmenin başında durup o çeşmeyi yaptıran sultanın hüznüne ortak olursunuz.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Televizyon programlarından ve kitaplarından tanıdığınız o eşsiz anlatım, şimdi seyahatlerinizde size eşlik ediyor. Her adımda bir hikaye, her hikayede bir ibret...
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                <History className="text-[#dca725]" size={32} />
                <div>
                  <h4 className="font-bold">Derin Tarih</h4>
                  <p className="text-xs text-gray-400">Yüzeyde kalmayan anlatımlar</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                <Map className="text-[#dca725]" size={32} />
                <div>
                  <h4 className="font-bold">Özel Rotalar</h4>
                  <p className="text-xs text-gray-400">Kitaplarda olmayan detaylar</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- 4. DEĞERLERİMİZ (GRID KARTLAR) --- */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#163a58]">Neden Elite Travel?</h2>
          <p className="text-gray-500 mt-2">Bizi diğerlerinden ayıran, işimize duyduğumuz aşk ve detaylara verdiğimiz önemdir.</p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Kart 1 */}
          <motion.div variants={fadeInUp} className="bg-[#f8fafc] p-8 rounded-2xl border border-gray-100 hover:border-[#dca725] hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-[#163a58] group-hover:bg-[#163a58] group-hover:text-[#dca725] transition-colors">
              <Star size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#163a58] mb-3">Premium Hizmet</h3>
            <p className="text-gray-500 leading-relaxed">
              5 yıldızlı oteller, lüks transfer araçları ve en seçkin restoranlar. Konforunuzdan ödün vermeden tarihe yolculuk yapın.
            </p>
          </motion.div>

          {/* Kart 2 */}
          <motion.div variants={fadeInUp} className="bg-[#f8fafc] p-8 rounded-2xl border border-gray-100 hover:border-[#dca725] hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-[#163a58] group-hover:bg-[#163a58] group-hover:text-[#dca725] transition-colors">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#163a58] mb-3">Güven ve Tecrübe</h3>
            <p className="text-gray-500 leading-relaxed">
              Yılların verdiği turizm tecrübesi ve %100 misafir memnuniyeti odaklı çalışma prensibi. Sürprizlere yer yok.
            </p>
          </motion.div>

          {/* Kart 3 */}
          <motion.div variants={fadeInUp} className="bg-[#f8fafc] p-8 rounded-2xl border border-gray-100 hover:border-[#dca725] hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-[#163a58] group-hover:bg-[#163a58] group-hover:text-[#dca725] transition-colors">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#163a58] mb-3">Aile Sıcaklığı</h3>
            <p className="text-gray-500 leading-relaxed">
              Butik tur anlayışımızla, kalabalık gruplar içinde kaybolmazsınız. Her misafirimizle özel ilgileniriz.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* --- 5. CTA (ALT BÖLÜM) --- */}
      <section className="container mx-auto px-6">
        <div className="bg-[#dca725] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Dekorasyon */}
          <div className="absolute top-0 left-0 w-full h-full bg-white/10 rotate-12 scale-150 transform origin-top-left"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-[#163a58] mb-6">
              Bu Eşsiz Deneyime Hazır Mısınız?
            </h2>
            <p className="text-[#163a58]/80 text-xl max-w-2xl mx-auto mb-10 font-medium">
              Kontenjanlarımız sınırlıdır. Yerini ayırtmak ve tarihin canlı şahidi olmak için hemen bize ulaş.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/turlar" className="px-8 py-4 bg-[#163a58] text-white font-bold rounded-xl shadow-lg hover:bg-white hover:text-[#163a58] transition-all">
                Turları İncele
              </Link>
              <Link to="/iletisim" className="px-8 py-4 bg-white/20 border-2 border-[#163a58] text-[#163a58] font-bold rounded-xl hover:bg-[#163a58] hover:text-white transition-all">
                Bize Ulaşın
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}