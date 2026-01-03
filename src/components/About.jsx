import React from "react";
import Abdullo from "../assets/Abdullo.jpg";
import jamoa from "../assets/jamoa.png";
import ielts from "../assets/ielts.png";
import image from "../assets/image.png";
import kurs from "../assets/kurs.jpg";
import kurs2 from "../assets/kurs2.jpg";
import sert from "../assets/sert.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaJsSquare,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,    
      offset: 100,
      easing: "ease-in-out",
    
      
    });
  }, []);
  const skills = [
    {
      name: "React",
      icon: <FaReact className="text-[#61DAFB]" />,
      level: "90%",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-[#339933]" />,
      level: "85%",
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-[#F7DF1E]" />,
      level: "95%",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
      level: "90%",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-[#47A248]" />,
      level: "80%",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-[#000000]" />,
      level: "85%",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-[#E34F26]" />,
      level: "98%",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-[#7952B3]" />,
      level: "85%",
    },
  ];
  return (
    <div className="bg-white text-gray-900 min-h-screen pt-24">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-black text-gray-900  mb-4">
          O'zim haqimda
        </h1>

        <p className="text-sm text-gray-500 mb-10">
          Abdullo · Shaxsiy blog
          <br />
          03.01.2026
        </p>

        <div className="w-full max-w-3xl mx-auto overflow-hidden rounded-3xl border border-gray-100 shadow-sm my-10 group">
          <div className="aspect-[16/10] w-full overflow-hidden bg-gray-50">
            <img
              src={Abdullo}
              alt="Abduqodirov Abdullajon"
              className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
            />
            {/* object-top — rasmni tepasini ko'rsatadi va ortiqcha qismini pastdan kesib tashlaydi */}
          </div>

          <div className="py-3 bg-gray-50/50 border-t border-gray-100 text-center">
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-medium">
              Abduqodirov Abdullajon — 2025 YIL
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            Mening ismim Abdullo. Men O‘zbekistonda tug‘ilganman va hozirda
            axborot texnologiyalari sohasida oqib o‘zimni rivojlantirib
            kelayotgan yosh dasturchiman. Har doim texnologiyalar sohasiga
            qiziqqanim uchun bu sohani organib kelmoqdaman.
          </p>
          

          <p>
            Men <strong>2006-yil</strong>da <strong>Namangan viloyati</strong>da
            tug‘ilganman. Bolaligimdan texnika va kompyuterga qiziqishim kuchli
            bo‘lgan. Aynan shu qiziqish meni IT sohasiga olib kirdi.
          </p>
          <div className="w-full max-w-3xl mx-auto overflow-hidden rounded-3xl border border-gray-100 shadow-lg mt-10 mb-10">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                src={image}
                alt="Learning English"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </div>
          <p>
            Dasturlash bilan universitega kirishimdan bilan astoydil
            shug‘ullanishni boshladim. Avvaliga oddiy algoritmlar va veb
            sahifalar yaratishdan boshladim. Vaqt o‘tishi hozir murakkab
            algoritmlar va toliq veb ilovalar arxhitekturasini o‘rganishga
            o‘tdim.Shu davrda 6 oy davomida Html css js no sertifikat olganman
          </p>
          <img
            src={sert}
            alt="ser"
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105 my-10 rounded-2xl"
          />
          <p>
            Dasturlash bilan universitega kirishimdan bilan astoydil
            shug‘ullanishni boshladim. Avvaliga oddiy algoritmlar va veb
            sahifalar yaratishdan boshladim. Vaqt o‘tishi hozir murakkab
            algoritmlar va toliq veb ilovalar arxhitekturasini o‘rganishga
            o‘tdim.Shu davrda 6 oy davomida Html css js no sertifikat olganman
          </p>

          <div className="max-w-3xl mx-auto px-4 py-16 font-sans antialiased text-gray-800">
            <div className="mb-16">
              <h2 className="text-2xl font-black text-gray-900  mb-4">
                Ta'lim va O'sish Yo'li
              </h2>
              <p className="text-gray-500 text-lg">
                Namangandan boshlangan muhandislik sari intilishlarim
                xronologiyasi.
              </p>
            </div>

            <div className="relative space-y-12">
              <div className="absolute left-[39px] top-2 bottom-2 w-0.5 bg-gray-100 hidden md:block"></div>

              <div className="relative flex flex-col md:flex-row md:gap-12 group">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="z-10 flex items-center justify-center w-20 h-20 rounded-2xl bg-white border-2 border-gray-100 group-hover:border-black transition-all duration-500 shadow-sm">
                    <span className="text-sm font-bold text-gray-400 group-hover:text-black">
                      2013
                    </span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    9-sonli umumiy o'rta ta'lim maktabi
                  </h3>
                  <p className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-wider">
                    Namangan viloyati, Uychi tumani
                  </p>
                  <p className="leading-relaxed text-gray-600">
                    2013-yildan 2022-yilgacha bo'lgan bu davrda aniq fanlar va
                    informatika olamiga bo'lgan ilk qiziqishlarim uyg'ondi.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row md:gap-12 group">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="z-10 flex items-center justify-center w-20 h-20 rounded-2xl bg-black border-2 border-black shadow-xl shadow-black/10 transition-transform group-hover:scale-105">
                    <span className="text-sm font-bold text-white">2022</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    Akademik Litsey
                  </h3>
                  <p className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-wider">
                Namangan Shahar
                  </p>
                  <p className="leading-relaxed text-gray-600">
                    2022-yildan 2024-yilgacha litseyda o'qish davomida
                    dunyoqarashim kengaydi. Bu davrda dasturlashga bo'lgan
                    qiziqishim yanada oshdi.Afsuski bu vaqrda dasturlash bilan
                    shugullangani vaqt bomasdi.Chunki litseyda Matemetaika
                    Fizika fanlaridan tayyorlanib Universitetga kirish birinchi
                    maqsad bolgan
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row md:gap-12 group">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="z-10 flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-50 border-2 border-blue-500 shadow-lg shadow-blue-500/20 animate-pulse">
                    <span className="text-sm font-bold text-blue-600">
                      2024
                    </span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-2">
                    Hozirda o'qimoqda
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Namangan davlat texnika universiteti
                  </h3>
                  <p className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-wider">
                    Oliy ta'lim
                  </p>
                  <p className="leading-relaxed text-gray-700 font-medium">
                    2024-yildan boshlab zamonaviy texnologiyalar va dasturiy
                    muhandislikni professional darajada o'rganib kelmoqdaman.
                    Universitedagi muhit menga hozirda umuman yoqmayabdi chunki
                    o'qituvchilar eski metodda o'qitishyapti va amaliyotga juda
                    kam o'rin berilyapti.Shuning uchun men o'zim mustaqil
                    ravishda onlayn kurslar orqali bilimlarimni oshiryapman.
                  </p>
                </div>
              </div>
            </div>
            <section className="max-w-3xl mx-auto px-4 py-16 font-sans">
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                  Hozirda o'rganmoqdaman
                </div>
                <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-4">
                  Organish jarayoni
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg break-words">
                  Ingliz tilini organishdan maqsad dunyo korish va dasturlash
                  sohasida Uzinfocom yoki Epam oxshagan Katta IT kompaniylarga
                  ishga kirish — buning uchun IELTS imtihonidan kamida 7.0+ ball
                  olish kerak.Ingliz tilini organmasdan turib buni iloji yoqday
                  korinmoqda
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="relative group overflow-hidden rounded-2xl bg-gray-100 aspect-video md:aspect-auto md:row-span-2">
                  <img
                    src={ielts}
                    alt="Learning English"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>

                <div className="relative group overflow-hidden rounded-2xl bg-gray-100 aspect-video">
                  <img
                    src={kurs}
                    alt="Course atmosphere"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="relative group overflow-hidden rounded-2xl bg-gray-100 aspect-video">
                  <img
                    src={kurs2}
                    alt="Classroom"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl flex flex-wrap gap-6 justify-between items-center border border-gray-100">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 uppercase font-bold tracking-widest">
                    O'quv markazi
                  </span>
                  <span className="text-gray-900 font-bold italic">
                    Top-level English Academy
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 uppercase font-bold tracking-widest">
                    Maqsad
                  </span>
                  <span className="text-gray-900 font-bold italic">
                    IELTS 7.5+
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 uppercase font-bold tracking-widest">
                    Holat
                  </span>
                  <span className="text-green-600 font-bold italic">
                    Aktiv izlanishda
                  </span>
                </div>
              </div>
            </section>
          </div>

          <p>
            Hozirgi kunda web dasturlash, frontend va backend texnologiyalari
            bilan organib amaliyotgaqollab kelmoqdaman Har kuni yangi bilim
            olish, o‘zimni rivojlantirish va real loyihalar ustida ishlashni
            maqsad qilganman.
          </p>

          <p>
            Ushbu blog — mening bilimlarim, tajribalarim va o‘sish yo‘limni
            hujjatlashtirib boradigan shaxsiy platformam. Bu yerda o‘rganayotgan
            mavzularim, fikrlarim va xulosalarimni baham ko‘raman.
          </p>
        </div>
        <section className="max-w-4xl mx-auto px-4 py-20 font-sans">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-black text-gray-900 tracking-tighter mb-4 uppercase">
              Katta g'oyalar, kichik jamoa
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Hozirda biz uch kishi bo'lib, kelajakni o'zgartiradigan yangi
              loyiha ustida ishlayapmiz. Har birimizning o'z o'rnimiz va umumiy
              maqsadimiz bor.
            </p>
          </div>

          <div className="relative group mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative bg-white ring-1 ring-gray-900/5 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={jamoa}
                alt="Team members"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white font-medium text-xl italic">
                  "Birlik bor joyda, natija bor."
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all">
              <div className="text-blue-600 font-black text-3xl mb-2">01.</div>
              <h4 className="font-bold text-gray-900 mb-2 italic">
                Ideologiya
              </h4>
              <p className="text-sm text-gray-600">
                Muammoni aniqladik va yechim ustida strategiya qurdik.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all">
              <div className="text-blue-600 font-black text-3xl mb-2">02.</div>
              <h4 className="font-bold text-gray-900 mb-2 italic">
                MVP bosqichi
              </h4>
              <p className="text-sm text-gray-600">
                Hozirda loyihaning ilk versiyasini (Minimum Viable Product)
                kodlamoqdamiz.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all">
              <div className="text-blue-600 font-black text-3xl mb-2">03.</div>
              <h4 className="font-bold text-gray-900 mb-2 italic">Launch</h4>
              <p className="text-sm text-gray-600">
                Tez orada birinchi foydalanuvchilarga taqdim etishni
                rejalashtirganmiz.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="max-w-4xl mx-auto px-4 py-20 font-sans">
        <div className="mb-12">
          <h2 className="text-2xl font-black text-gray-900 tracking-tighter uppercase italic">
            Texnologiyalar to'plamim
          </h2>
          <p className="text-gray-500 mt-2 font-medium">
            Mening doimiy ish qurollarim va texnologiyalarim.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative p-6 bg-white border border-gray-100 rounded-[2rem] hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Icon va Nomi */}
              <div className="flex flex-col items-center">
                <div data-aos="zoom-in" className="text-5xl mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  {skill.icon}
                </div>
                <h4 data-aos="fade-up" className="font-bold text-gray-900 text-sm tracking-tight">
                  {skill.name}
                </h4>
              </div>

              <div className="absolute inset-x-6 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gray-900 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: skill.level }}
                  ></div>
                </div>
                <p className="text-[10px] text-right mt-1 font-black text-gray-400">
                  {skill.level}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gray-50 rounded-[2.5rem] border border-dashed border-gray-200 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-bold text-gray-700">
              Frontend Development
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-bold text-gray-700">
              Backend & Database
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
