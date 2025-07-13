import { GithubLogoIcon } from '@phosphor-icons/react/dist/ssr';
import { ArrowRight, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { FunctionComponent } from 'react';
import personalImg from '@/assets/personal-image.png';
import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { details } from '@/data/details';
import { stacks } from '@/data/stacks';
import { dayjs } from '@/lib/dayjs';
import { rangeDate } from '@/utils/range-date';
import { DecorativeCircle } from '../_components/DecorativeCircle';
import { routes } from '../_components/Header';
import { PageTitle } from '../_components/PageTitle';
import { Socials } from '../_components/Socials';
import { AccordionDetailItem } from './_components/AccordionDetailItem';
import { AchievementDetail } from './_components/AchievementDetail';
import { Hero3D } from './_components/Hero3D';
import { Stack } from './_components/Stacks';

const Phrase: FunctionComponent = () => {
  return (
    <p className="text-balance text-center font-medium text-accent-light text-lg lg:text-start ">
      "Antes de tudo,{' '}
      <span className="text-text italic">um solucionador de problemas</span>{' '}
      através de código.{' '}
      <span className="text-text italic">Um aprendiz contínuo</span>. Dono da
      própria carreira."
    </p>
  );
};

const ArticlesButton: FunctionComponent = () => {
  return (
    <Link href={routes[3].path}>
      <Button
        className="!px-12 !py-6 cursor-pointer rounded-full bg-text font-medium text-main text-xl italic tracking-wider transition hover:bg-text hover:shadow-accent-light hover:shadow-md"
        size="lg"
      >
        {routes[3].title.pt} <ArrowRight className="size-6" />
      </Button>
    </Link>
  );
};

export default function Home() {
  const startDate = dayjs(details.wx3.startDateStr, 'DD/MM/YYYY');
  const end = dayjs().format('DD/MM/YYYY');
  const endDate = dayjs(end, 'DD/MM/YYYY');
  const durationMessage = rangeDate(startDate, endDate);

  return (
    <div>
      <section>
        <div className="flex w-full items-center justify-between lg:items-end">
          <h1 className="font-medium font-title text-5xl tracking-wide lg:text-8xl">
            Full-stack
          </h1>
          <div className="hidden lg:block">
            <ArticlesButton />
          </div>
        </div>

        <div className="mt-4 flex w-full items-center justify-between lg:mt-8 lg:flex-row lg:items-start">
          <div className="hidden lg:block">
            <Phrase />
          </div>
          <h2 className="ml-auto font-medium font-title text-5xl tracking-wide lg:ml-0 lg:text-8xl">
            Developer
          </h2>
        </div>

        <div className="my-8 flex flex-col items-center justify-center gap-8 lg:hidden">
          <Phrase />
          <ArticlesButton />
        </div>

        <div className="mt-0 lg:mt-12">
          <Socials />
        </div>
      </section>

      <section className="relative mt-12 lg:mt-24" id="about">
        <PageTitle title={routes[1].title.pt} />

        <h3 className="mt-8 mr-32 ml-auto w-full font-medium text-accent-light text-lg lg:mt-0 lg:w-[450px]">
          Olá! Meu nome é João, sou{' '}
          <span className="text-text italic">desenvolvedor full-stack</span>.
          Tenho mais de <span className="text-text italic">4 anos</span> de
          experiência.
        </h3>

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:gap-20">
          <div className="flex flex-col gap-4">
            <Stack title="Front-end" tools={stacks.frontend} />
            <div className="flex items-center justify-between gap-2">
              <div className="w-[220px] lg:w-[350px]">
                <Stack isDark title="Styles" tools={stacks.styles} />
              </div>
              <div className="relative bg-main">
                <div className="absolute right-8 z-10 flex size-12 items-center justify-center rounded-full border border-text">
                  <GithubLogoIcon className="size-6" />
                </div>
                <Link href={routes[2].path}>
                  <Button className="z-20 size-12 cursor-pointer rounded-full bg-text font-medium text-base text-main transition hover:bg-text hover:shadow-accent-light hover:shadow-md">
                    <MoveUpRight className="size-6" />
                  </Button>
                </Link>
              </div>
            </div>
            <Stack isDark title="Back-end" tools={stacks.backend} />
            <div className="flex items-center gap-2">
              <h5 className="text-balance font-medium text-accent-light text-sm leading-relaxed">
                Algumas das{' '}
                <span className="text-text italic">tecnologias</span> que gosto
                de trabalhar
              </h5>
              <div className="w-[450px]">
                <Stack isDark title="DevOps" tools={stacks.devops} />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-8 lg:w-[700px]">
            <Hero3D />

            <Image
              alt="Imagem do João"
              className="w-[300px] min-w-[300px] rounded-4xl shadow shadow-accent-light grayscale filter"
              src={personalImg}
            />
          </div>
        </div>

        <DecorativeCircle className="!size-[550px] !w-full lg:!w-[550px] top-40 left-0 lg:top-32" />
      </section>

      <section className="mt-12 lg:mt-24">
        <h4 className="ml-auto w-max font-bold font-title text-4xl tracking-tighter lg:text-6xl">
          Experiência
        </h4>
        <div className="mt-3 ml-auto flex w-max flex-col items-end gap-px font-medium">
          <h6 className="text-accent-light text-sm">Tempo de Experiência</h6>
          <span className="italic">{durationMessage}</span>
        </div>
        <div className="mt-10">
          <Accordion collapsible type="single">
            <AccordionDetailItem detail={details.parisi} hastTopBorder>
              <div className="flex flex-col gap-5 text-sm lg:text-base">
                <p>
                  A SS Parisi é uma empresa brasileira que desenvolve softwares
                  pra área contábil. Ela tem como objetivo eliminar processos
                  manuais e repetitivos que não agregam valor e que impedem o
                  crescimento acelerado dos negócios. A empresa possui uma
                  equipe especializada no setor contábil, contando com mais de
                  80 colaboradores nas mais diversas áreas. Grandes contadores
                  optam pelos serviços prestados por ela, como por exemplo a
                  Mônica Porto, considerada a 4ª contadora mais influente do
                  Brasil. A empresa conta com mais de 2500 clientes espalhados
                  pelo Brasil.
                </p>
                <p>
                  Minhas principais contribuições como Desenvolvedor Full-stack:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li className="leading-relaxed">
                    Ajudo na manutenção do código referente a alguns produtos
                    digitais, incluindo a implementação de novas
                    funcionalidades;
                  </li>
                  <li className="leading-relaxed">
                    Participo de forma ativa na tomada de decisão, junto aos
                    líderes, quanto a construção de projetos que usam React.JS e
                    Nest.JS;
                  </li>
                </ul>
                <p>
                  As principais tecnologias usadas são: React.js, Typescript,
                  Material UI, Jest, Cypress.io, Nest.js, Microsserviços e
                  Docker.
                </p>
              </div>
            </AccordionDetailItem>
            <AccordionDetailItem detail={details.wx3} hastTopBorder={false}>
              <div className="flex flex-col gap-5 text-sm lg:text-base">
                <p>
                  A Wx3 E-commerce é uma empresa brasileira que desenvolve
                  soluções digitais inovadoras para e-commerces. A empresa
                  possui uma equipe especializada em e-commerce, contando com
                  quase 100 colaboradores nas mais diversas áreas. Grandes
                  clientes de moda íntima e fitness optam pelos serviços
                  prestados por ela, como por exemplo a Donna Carioca.
                </p>
                <p>
                  Minhas principais contribuições como Desenvolvedor Front-end:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li className="leading-relaxed">
                    Otimizei o tempo de carregamento de um produto digital, de{' '}
                    <strong className="font-normal underline underline-offset-4">
                      15s para 500ms
                    </strong>
                    , adotando estratégias de cache e proxy, através do
                    framework Next.JS;
                  </li>
                  <li className="leading-relaxed">
                    Participei de forma ativa na tomada de decisão, junto aos
                    líderes, quanto a construção de projetos que usam React.JS e
                    Next.JS;
                  </li>
                  <li className="leading-relaxed">
                    Ajudei na migração de tecnologias legadas usando tecnologias
                    como: React.JS, Next.JS, Typescript, Styled Components,
                    Chakra UI, Tailwind CSS, Jest, Vitest e Cypress.io;
                  </li>
                  <li className="leading-relaxed">
                    Ajudei na manutenção do código legado presente em alguns
                    projetos;
                  </li>
                </ul>
                <p>
                  As principais tecnologias usadas foram: React.js, Next.js,
                  Typescript, Styled Components, Chakra UI, Tailwind CSS, Jest,
                  Vitest, Cypress.io; Javascript, SASS, PHP e Twig
                </p>
              </div>
            </AccordionDetailItem>
          </Accordion>
        </div>
      </section>

      <section className="mt-12 lg:mt-24">
        <div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
          <h4 className="font-bold font-title text-4xl tracking-tighter lg:text-6xl">
            Conquistas
          </h4>
          <div className="mt-5 flex flex-col items-start gap-px font-medium">
            <h6 className="text-accent-light text-sm lg:ml-auto">
              Principal Conquista
            </h6>
            <span className="italic">
              Vice-campeão do IV Hackathon da Deco.cx
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:mt-10 lg:grid-cols-2">
          <AchievementDetail title="🥈 Vice-campeão do IV Hackathon da Deco.cx">
            <p className="text-sm lg:text-base">
              Em Outube de 2023, participei do IV Hackathon da Deco.cx. Junto
              com meus colegas, formamos uma equipe chamada de Trinity Force. O
              tempo era escasso para todo mundo, porém estávamos focados em dar
              o nosso melhor. Além da experiência do projeto em si, pude
              aprender ainda mais a trabalhar em equipe.
            </p>
            <p className="text-sm lg:text-base">
              Desenvolvemos um projeto simples, porém altamente customizável,
              usando a técnica FOMO (Fear Of Missing Out) aplicada em um
              e-commerce - esse foi o nosso diferencial. Com muito esforço e
              dedicação de todos, conseguimos o nosso 2º lugar, disputando com
              quase 40 equipes espalhadas pelo Brasil.
            </p>
            <p className="text-sm lg:text-base">
              As principais tecnologias usadas foram: React.js, Typescript e
              Deno.
            </p>
          </AchievementDetail>
          <AchievementDetail
            isDark
            title="🚀 (10/10) Projeto TCC - Patas Peludas "
          >
            <p className="text-sm lg:text-base">
              No segundo semestre de 2023, desenvolvi, de ponta a ponta, um
              projeto integrando NodeJS no Back End com NextJS no Front End,
              para meu TCC (Trabalho de Conclusão de Curso), da graduação de
              Bacharel em Sistemas de Informação do CEFET-RJ/Nova Friburgo. Esse
              trabalho recebeu a nota máxima (10/10) da banca avaliadora.
            </p>
            <p className="text-sm lg:text-base">
              O nome do projeto era Patas Peludas. Tinha como objetivo ajudar
              animais regatados a encontrarem um lar, facilitando a adoção de
              animais de rua. Fiz parceria com algumas ONGs e grupos de
              protetores independentes para cadastrado dos animais que estavam
              sob seus cuidados.
            </p>
            <p className="text-sm lg:text-base">
              As principais tecnologias usadas foram: React.js, Next.js,
              Typescript, Tailwind CSS, Node.js, Fastify, Prisma, PostgreSQL,
              Clerk, Vitest e Docker.
            </p>
          </AchievementDetail>
        </div>
      </section>

      <section className="mt-12 lg:mt-24">
        <div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
          <h4 className="font-bold font-title text-4xl tracking-tighter lg:text-6xl">
            Formação
          </h4>
          <div className="mt-5 flex flex-col items-start gap-px font-medium">
            <h6 className="text-accent-light text-sm lg:ml-auto">
              Principal Formação
            </h6>
            <span className="italic">Bacharel em Sistemas de Informação</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:mt-10 lg:grid-cols-2">
          <AchievementDetail
            isDark
            title="🎓 Bacharelado em Sistemas de Informação (CEFET/RJ - Nova Friburgo)"
          >
            <ul className="list-disc space-y-2 pl-5">
              <li className="leading-relaxed">Modelo Presencial;</li>
              <li className="leading-relaxed">
                Conclusão da gradução em 2024;
              </li>
            </ul>
          </AchievementDetail>

          <AchievementDetail
            isDark
            title="🚀💺 Curso Ignite ReactJS (Rocketseat)"
          >
            <ul className="list-disc space-y-2 pl-5">
              <li className="leading-relaxed">Modelo Online;</li>
              <li className="leading-relaxed">100h de duração;</li>
              <li className="leading-relaxed">Conclusão em 2022;</li>
            </ul>
          </AchievementDetail>
        </div>
      </section>
    </div>
  );
}
