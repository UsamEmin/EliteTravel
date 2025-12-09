/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 1. ELITE GRUBU (Eski yapıyı bozmamak için ama YENİ RENKLERLE)
     
        // 2. GARANTİ LİNKLER (Benim attığım kodlar bazen direkt burayı arıyor)
        // Bu sayede 'bg-elite-dark' yazdığında kesinlikle çalışacak.
       'elite-dark': '#163a58',  // Lacivert
        'elite-gold': '#dca725',  // Altın
        'elite-base': '#f8fafc',  // Açık Gri
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}