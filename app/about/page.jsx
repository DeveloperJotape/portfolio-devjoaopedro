"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  SiSpringboot,
  SiPhp,
  SiNestjs,
  SiJavascript,
  SiGithub,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiJavaLine,
  RiHtml5Fill,
  RiCss3Fill,
} from "react-icons/ri";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// Experiências profissionais
const experience = {
  icon: "",
  title: "Minhas experiências",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, eum? Earum neque asperiores magnam aut velit voluptatibus voluptate repudiandae blanditiis.",
  items: [
    {
      company: "ASSEMDF",
      position: "Auxiliar de TI",
      duration: "2024 - Atualmente",
    },
    {
      company: "GPTech Training & Media",
      position: "Web Designer",
      duration: "2022 - 2023",
    },
  ],
};

// Educação
const education = {
  icon: "",
  title: "Formação",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, eum? Earum neque asperiores magnam aut velit voluptatibus voluptate repudiandae blanditiis.",
  items: [
    {
      institution: "UNICEPLAC",
      course: "Engenharia de Software",
      duration: "2021 - 2025",
    },
    {
      institution: "Escola Técnica de Brasília",
      course: "Técnico de Informática",
      duration: "2019 - 2020",
    },
    {
      institution: "UNICEPLAC",
      course: "Desenvolvimento de API's REST",
      duration: "2022",
    },
  ],
};

// Skills
const skills = {
  title: "Tecnologias",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, eum? Earum neque asperiores magnam aut velit voluptatibus voluptate repudiandae blanditiis.",
  items: [
    {
      icon: <SiSpringboot />,
      name: "Springboot",
    },
    {
      icon: <RiNextjsFill />,
      name: "Next.js",
    },
    {
      icon: <RiTailwindCssFill />,
      name: "TailwindCss",
    },
    {
      icon: <RiJavaLine />,
      name: "Java",
    },
    {
      icon: <SiPhp />,
      name: "PHP",
    },
    {
      icon: <SiNestjs />,
      name: "NestJS",
    },
    {
      icon: <RiHtml5Fill />,
      name: "HTML5",
    },
    {
      icon: <RiCss3Fill />,
      name: "CSS3",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiPostgresql />,
      name: "Postgresql",
    },
    {
      icon: <SiGithub />,
      name: "Github",
    },
  ],
};

// Sobre
const about = {
  title: "Sobre mim",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, eum? Earum neque asperiores magnam aut velit voluptatibus voluptate repudiandae blanditiis.",
  info: [
    {
      fieldName: "Nome",
      fieldValue: "João Pedro",
    },
    {
      fieldName: "Email",
      fieldValue: "joaopedronascimento.contato@gmail.com",
    },
    {
      fieldName: "Whatsapp",
      fieldValue: "(61) 98653-0748",
    },

    {
      fieldName: "Experiência",
      fieldValue: "+6 anos",
    },
    {
      fieldName: "Contratações",
      fieldValue: "Disponível",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Português, Inglês",
    },
  ],
};
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">
              Experiências Profissionais
            </TabsTrigger>
            <TabsTrigger value="education">Educação</TabsTrigger>
            <TabsTrigger value="skills">Tecnologias</TabsTrigger>
            <TabsTrigger value="about">Sobre mim</TabsTrigger>
          </TabsList>

          {/* Conteúdo */}
          <div className="min-h-[70vh] w-full">
            {/* Experiência profissional */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Educação */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.course}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Tecnologias */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.items.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center  items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* Sobre */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}:</span>
                        <span className="">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
