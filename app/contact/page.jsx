"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefone",
    description: "(61) 98653-0748",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "joaopedronascimento.contato@gmail.com",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Formulário */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Vamos trabalhar juntos</h3>
              <p className="text-white/60">
                Preencha o formulário ou me envie uma mensagem por Whatsapp /
                Email.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="name" placeholder="Nome" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Número de telefone" />
              </div>
              {/* select 
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Escolha um serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Escolha um serviço</SelectLabel>
                    <SelectItem value="front">
                      Desenvolvimento de site
                    </SelectItem>
                    <SelectItem value="api">Desenvolvimento de API</SelectItem>
                    <SelectItem value="system">
                      Desenvolvimento de Sistema
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              */}
              {/* Textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Deixe sua mensagem aqui."
              />
              {/* Botão */}
              <Button size="md" className="max-w-60">
                Enviar mensagem
              </Button>
            </form>
          </div>
          {/* Informações */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] rounded-md text-accent flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-lg">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
