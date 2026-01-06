import { useState,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaTelegramPlane,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Contact = () => {
  useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: false,    
        offset: 100,
        easing: "ease-in-out",
      
        
      });
    }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  
 const botToken = import.meta.env.VITE_BOT_TOKEN;
const chatId = import.meta.env.VITE_CHAT_ID;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Yuborilmoqda...");

    const text = `🚀 *Yangi xabar!*\n\n👤 *Ism:* ${formData.name}\n📧 *Email:* ${formData.email}\n💬 *Xabar:* ${formData.message}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
            parse_mode: "Markdown",
          }),
        }
      );

      if (response.ok) {
        setStatus("✅ Xabar botga yuborildi!");
        setFormData({ name: "", email: "", message: "" }); 
      } else {
        setStatus("❌ Xatolik yuz berdi.");
      }
    } catch (error) {
      setStatus("🌐 Tarmoqda xatolik.");
    }
  };
  const socials = [
    {
      name: "Telegram",
      user: "@abdullo2309",
      link: "https://t.me/abdullo2309",
      icon: <FaTelegramPlane />,
      color: "hover:bg-[#229ED9]",
      shadow: "hover:shadow-[#229ED9]/40",
    },
    {
      name: "LinkedIn",
      user: "Abdullo Abduqodirov",
      link: "linkedin.com/in/abdullo-abduqodirov-6257b6354", // O'zingizning to'liq havolangizni qo'ying
      icon: <FaLinkedinIn />,
      color: "hover:bg-[#0077B5]",
      shadow: "hover:shadow-[#0077B5]/40",
    },
    {
      name: "Instagram",
      user: "abdullo_php",
      link: "https://instagram.com/abdullo_php",
      icon: <FaInstagram />,
      color:
        "hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      shadow: "hover:shadow-[#ee2a7b]/40",
    },
    {
      name: "GitHub",
      user: "abdullo_0995",
      link: "https://github.com/abdulloCode",
      icon: <FaGithub />,
      color: "hover:bg-[#333]",
      shadow: "hover:shadow-black/40",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-24 font-sans antialiased pt-20">
     <section className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-12 md:py-20 font-sans antialiased">
  <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100">
    
    {/* Sarlavha qismi */}
    <div className="mb-8 md:mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-3">
        Abdullo bilan bog'lanish
      </h2>
      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-md">
        Loyihangiz bo'yicha takliflar yoki savollaringiz bo'lsa, quyidagi shaklni to'ldiring. 
        Xabaringiz <span className="text-black font-semibold">Telegramga</span> boradi.
      </p>
    </div>

    <form onSubmit={handleSubmit} className="space-y-6 md:y-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
       
        <div className="flex flex-col gap-1.5 md:gap-2">
          <label className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">
            Ismingiz
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Abdullo"
            className="w-full px-4 md:px-5 py-3.5 md:py-4 bg-gray-50 border border-transparent rounded-xl md:rounded-2xl focus:bg-white focus:border-gray-200 focus:ring-4 focus:ring-gray-100 outline-none transition-all text-sm font-medium text-gray-900"
            required
          />
        </div>

    
        <div className="flex flex-col gap-1.5 md:gap-2">
          <label className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="abduqodirov.com"
            className="w-full px-4 md:px-5 py-3.5 md:py-4 bg-gray-50 border border-transparent rounded-xl md:rounded-2xl focus:bg-white focus:border-gray-200 focus:ring-4 focus:ring-gray-100 outline-none transition-all text-sm font-medium text-gray-900"
            required
          />
        </div>
      </div>

      {/* Xabar */}
      <div className="flex flex-col gap-1.5 md:gap-2">
        <label className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-gray-400 ml-1">
          Xabaringiz
        </label>
        <textarea
          rows="4"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Loyiha haqida qisqacha..."
          className="w-full px-4 md:px-5 py-3.5 md:py-4 bg-gray-50 border border-transparent rounded-xl md:rounded-2xl focus:bg-white focus:border-gray-200 focus:ring-4 focus:ring-gray-100 outline-none transition-all text-sm font-medium text-gray-900 resize-none"
          required
        ></textarea>
      </div>

      <div className="pt-2 md:pt-4">
        <button
          type="submit"
          className="w-full md:w-auto px-10 py-4 bg-black text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] rounded-xl md:rounded-2xl hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 transition-all active:scale-95 shadow-md"
        >
          Xabarni yuborish
        </button>

        {status && (
          <p className={`mt-4 text-center md:text-left text-[10px] font-bold uppercase tracking-wider ${
            status.includes("✅") ? "text-green-600" : "text-red-500"
          }`}>
            {status}
          </p>
        )}
      </div>
    </form>
  </div>
</section>
      <div className="text-center mb-16">
        <h2 className="text-5xl font-black text-gray-900 tracking-tighter mb-4 uppercase italic">
          Bog'lanish
        </h2>
        <p className="text-gray-500 font-medium max-w-lg mx-auto leading-relaxed">
          Savollaringiz bormi yoki yangi g'oyalar ustida birga ishlashni
          xohlaysizmi? Men bilan bog'laning!
        </p>
      </div>

      {/* Asosiy ijtimoiy tarmoqlar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex flex-col items-center p-8 bg-white border border-gray-100 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 shadow-sm ${social.shadow} hover:shadow-2xl`}
          >
            <div
            data-aos="zoom-in"
              className={`text-3xl mb-4 p-4 rounded-2xl bg-gray-50 text-gray-700 transition-all duration-500 group-hover:text-white ${social.color}`}
            >
              {social.icon}
            </div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2" data-aos="fade-up">
              {social.name}
            </h4>
            <span className="text-gray-900 font-bold text-sm text-center">
              {social.user}
            </span>
          </a>
        ))}
      </div>
    
      <div className="relative group overflow-hidden bg-white border border-gray-100 rounded-[2.5rem] p-1 shadow-sm hover:shadow-xl transition-all duration-500">
        <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
          <div  className="flex items-center gap-6">
            <div  data-aos="fade-up" className="p-5 bg-red-50 text-red-600 rounded-3xl group-hover:bg-red-600 group-hover:text-white transition-all duration-500 text-3xl">
              <IoMailOutline />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1 text-center md:text-left">
                Email Manzilim
              </p>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                ghd7jd@gmail.com
              </h3>
            </div>
          </div>
          <a
            href="mailto:ghd7jd@gmail.com"
            className="w-full md:w-auto px-10 py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-red-600 transition-all duration-300 text-center tracking-widest"
          >
            XABAR YOLLASH
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
