"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

{
  /* Components */
}
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/cv/resume.pdf";

    link.download = "Joao_Pedro_Nascimento_Curriculo.pdf";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Texto */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Engenheiro de Software</span>
            <h1 className="h1">
              Olá, me chamo <br />{" "}
              <span className="text-accent">João Pedro</span>.
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Engenheiro de Software especializado em construir sistemas
              escaláveis e arquiteturas sustentáveis. Combino fundamentos
              acadêmicos sólidos com experiência prática em desenvolvimento
              FullStack para entregar soluções que equilibram requisitos
              técnicos e de negócio. <br />
              <span className="text-white">
                Java | Spring Boot | Next.js | MySQL.
              </span>
            </p>
            {/* Links e botões */}
            <div className=" flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
              >
                <span>Baixar Currículo </span>
                <Download className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 p-2"
                />
              </div>
            </div>
          </div>
          {/* Foto */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
