import { Separator } from "@/components/ui/separator";
import { ProfileContainer } from "./styles";
import {
  Book,
  Frown,
  Github,
  Linkedin,
  Mail,
  Phone,
  StickyNote,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Initial() {
  return (
    <div className="space-y-3">
      <ProfileContainer className="backdrop-brightness-150 bg-zinc-500 bg-opacity-15 backdrop-blur-md rounded-xl flex p-2 space-x-3">
        <img
          src="https://i.imgur.com/MhkgpUH.png"
          alt=""
          className="w-[10rem] rounded-full ring dark:ring-zinc-50 ring-zinc-900"
        />
        <Separator orientation="vertical" />
        <div className="space-y-4 flex-1">
          <p className="font-bold text-2xl">Eduardo Henrique Lima Silva</p>
          <p className="opacity-75">Desenvolvedor FullStack</p>
          <div className="flex space-x-3 *:bg-zinc-300 *:dark:bg-zinc-700 *:px-3 *:py-1 ">
            <Badge variant={"outline"}>Java</Badge>
            <Badge variant={"outline"}>JavaScript</Badge>
          </div>
        </div>
        <Separator orientation="vertical" />
        <div className="grid grid-cols-2 *:size-20 *:flex *:items-center *:justify-center items-center">
          <div>
            <Github />
          </div>
          <div>
            <Linkedin />
          </div>
          <div>
            <Mail />
          </div>
          <div>
            <Phone />
          </div>
        </div>
      </ProfileContainer>

      <div className="backdrop-brightness-150 bg-zinc-500 bg-opacity-15 backdrop-blur-md rounded-xl text-justify p-5 ">
        Olá, me chamo Eduardo Henrique, tenho 21 anos de idade, resido em uma
        cidade próxima a Brasília no Goiás, sou um jovem estudioso, criativo e
        que gosta ou sente-se desafiado a resolver problemas. Estou sempre
        estudando esta área (TI) e buscando aprimorar minhas habilidades.
        Atualmente, dezembro de 2023, estou cursando engenharia de software no
        Centro Universitário do Planalto Central Apparecido dos Santos
        (UNICEPLAC), Gama-DF, finalizando o 6 semestre de 8 ao todo.
        <div className="hidden md:block">
          Nesta graduação pude adquirir conhecimentos acerca do ciclo de vida
          completo de um software e questões gerenciais e econômicas. Sendo mais
          específico, pude ver algoritmos, arquiteturas de rede e computadores,
          arquiteturas de software, sistemas operacionais, Scrum, Levantamento
          de requisitos, UML, POO (programação orientada a objetos), Programação
          (java, estrutura de dados, design patterns), Programação Web (Tomcat,
          Rest, HTML - CSS, Bootstrap...), Banco de dados, engenharia econômica
          e inovação, ainda não finalizei o curso, mas posso listar estes
          conhecimentos.
          <br />
          Meus estudos não focam ou estão concentrados somente no curso
          superior, em casa busco constantemente participar de eventos, cursos,
          palestras e comunidades, a fim de acompanhar inovações das
          tecnologias. Com isso possuo certificações em Scrum (emitido pelo
          ScrumStudy), java (emitidos por Rocketseat e Digital innovation one),
          SpringBoot (emitidos por Rocketseat e Digital innovation one), React
          (em estudo pela Rocketseat), Linux (emitido por curso em vídeo).
        </div>
      </div>

      <div className="flex flex-col md:flex-row transition-all gap-3 *:flex-1 *:backdrop-brightness-150 *:bg-zinc-500 *:bg-opacity-15 *:backdrop-blur-md *:rounded-xl *:p-2">
        <div className="flex flex-col">
          <p className="text-2xl font-bold mb-5">Experiencia</p>
          <div className="flex-1 flex flex-col items-center justify-center ">
            <div className="flex flex-col items-center justify-center gap-2 my-5">
              <Frown size={30} />
              Sem experiencia profissional
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold mb-5">Formações / Certificações</p>
          <div className="space-y-2">
            <Accordion type="single" collapsible>
              <AccordionItem value="item1">
                <AccordionTrigger>
                  <div className="flex gap-3 items-center">
                    <Book />
                    Engenharia de software
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="*:flex *:items-center *:gap-2 space-y-2">
                    <div className="font-bold text-[1.2rem]">
                      Graduação em Engenharia de software
                    </div>
                    <div>Local: UNICEPLAC - Gama, DF</div>
                    <p>Status: Cursando</p>
                    <div>
                      Inicio: Jan/2021
                      <Separator orientation="vertical" />
                      Terminio: Dez/2024
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item1">
                <AccordionTrigger>
                  <div className="flex gap-3 items-center">
                    <StickyNote />
                    Scrum
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="*:flex *:items-center *:gap-2 space-y-2">
                    <div className="font-bold text-[1.2rem]">
                      Certificação em fundamentos Scrum
                    </div>
                    <div>Local: ScrumStudy</div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item1">
                <AccordionTrigger>
                  <div className="flex gap-3 items-center">
                    <StickyNote />
                    Bootcamp em backend Java
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="*:flex *:items-center *:gap-2 space-y-2">
                    <div className="font-bold text-[1.2rem]">
                      Bootcamp em backend Java
                    </div>
                    <div>Local: ScrumStudy</div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item1">
                <AccordionTrigger>
                  <div className="flex gap-3 items-center">
                    <StickyNote />
                    Java
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="*:flex *:items-center *:gap-2 space-y-2">
                    <div className="font-bold text-[1.2rem]">Backend Java</div>
                    <div>Local: Rocketseat</div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="backdrop-brightness-150 bg-zinc-500 bg-opacity-15 backdrop-blur-md rounded-xl text-justify p-2">
        <div className="text-2xl font-bold mb-5">Projetos</div>
      </div>
    </div>
  );
}
