"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { Github, MoveUpRight } from "lucide-react";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "backend",
    title: "Sistema interno de chamados",
    description:
      "Sistema interno de chamados desenvolvido para a ASSEMDF. Será um sistema onde um colaborador poderá abrir um ticket e direcionar para outro colaborador.",
    stack: [
      {
        name: "Springboot",
      },
      {
        name: "NextJS",
      },
      {
        name: "Mysql",
      },
    ],
    image: "/assets/projects/chamados.jpg", //assets/criar pasta
    live: "https://github.com/DeveloperJotape/helpdesk-frontend",
    github: "https://github.com/DeveloperJotape/helpdesk",
  },
  {
    num: "02",
    category: "backend",
    title: "Plugin de consórcio",
    description:
      "Plugin desenvolvido para gerenciar cartas de consórcio de automóveis e imóveis no WordPress, com integração ao Elementor.",
    stack: [
      {
        name: "PHP",
      },
    ],
    image: "/assets/projects/mundoconsorcio.jpg", //assets/criar pasta
    live: "https://mundodoconsorcio.com.br/",
    github:
      "https://github.com/DeveloperJotape/Gerenciador-de-cartas-contempladas",
  },
  {
    num: "03",
    category: "frontend",
    title: "Site - ASSEMDF",
    description:
      "Site desenvolvido para a ASSEMDF. Conta com layout moderno e intuitivo, além de responsividade para todos os tipos de dispositivos.",
    stack: [
      {
        name: "Wordpress",
      },
      {
        name: "Elementor",
      },
    ],
    image: "/assets/projects/assemdf.jpg", //assets/criar pasta
    live: "https://assemdf.com/",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    {
      /* Slide atual */
    }
    const currentIndex = swiper.activeIndex;
    {
      /* Atualiza baseado no slide */
    }
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Número outline */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Categoria */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* Descrição */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* Remove o último traço */}
                      {index !== project.stack.length - 1 && " -"}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              {/* Botões */}
              <div className="flex items-center gap-4">
                {/* botão projeto */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <MoveUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Projeto</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* botão github */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <Github className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Repositório</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* imagem */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt="Imagem"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Botão slide*/}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
