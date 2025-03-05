"use client";

import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Criação de sites",
    description:
      "Criação de interfaces responsivas e performáticas com Next.js e Tailwind CSS. Do protótipo no Figma à implementação final, garanto experiências de usuário fluidas e alinhadas às melhores práticas de mercado.",
    href: "",
  },
  {
    num: "02",
    title: "Engenharia de Backend",
    description:
      "Construção de APIs RESTful escaláveis com Java e Spring Boot. Sistemas seguros, documentados e preparados para integrações complexas.",
    href: "",
  },
  {
    num: "03",
    title: "Modernização de Sistemas",
    description:
      "Modernização de aplicações herdadas: performance tuning, refatoração de código e migração para arquiteturas cloud-ready. Transformo sistemas obsoletos em ativos competitivos.",
    href: "",
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
