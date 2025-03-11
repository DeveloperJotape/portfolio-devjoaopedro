"use client";

import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Desenvolvimento Frontend",
    description:
      "Criação de interfaces responsivas e performáticas. Do protótipo à implementação final, garanto experiências de usuário fluidas e alinhadas às melhores práticas de mercado.",
    href: "https://wa.me/5561986530748?text=Olá,%20gostaria%20de%20contratar%20seus%20serviços%20de%20desenvolvedor%20frontend",
  },
  {
    num: "02",
    title: "Desenvolvimento Backend",
    description:
      "Construção de APIs RESTful escaláveis. Sistemas seguros, documentados e preparados para integrações complexas.",
    href: "https://wa.me/5561986530748?text=Olá,%20gostaria%20de%20contratar%20seus%20serviços%20de%20desenvolvedor%20backend",
  },
  {
    num: "03",
    title: "Desenvolvimento Fullstack",
    description:
      "Desenvolvimento completo de sistemas, desde o layout atrativo à segurança da sua aplicação.",
    href: "https://wa.me/5561986530748?text=Olá,%20gostaria%20de%20contratar%20seus%20serviços%20de%20desenvolvedor%20fullstack",
  },
];

import { motion } from "framer-motion";
import { MoveDownRight } from "lucide-react";
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 cursor-pointer">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <MoveDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* Título */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 cursor-pointer">
                  {service.title}
                </h2>
                {/* Subtitulo */}
                <p className="text-white/60">{service.description}</p>
                {/* Borda */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
