import { NextSeo } from 'next-seo'

import { axesOfKnowledge } from '@utils/selectValues'
import { Select, Heading, Searchbar, CourseCard } from '@components/index'

import { CoursesContainer, FilterContainer } from './styles'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Cursos | PLACUR"
        description="Escolha um curso para se inscrever, ou consulte um curso que já tenha sido finalizado."
      />

      <FilterContainer>
        <Searchbar placeholder="Buscar curso" />
        <Select
          emptyValue="Filtrar por eixo de conhecimento"
          content={axesOfKnowledge}
        />
      </FilterContainer>

      <Heading>Cursos com inscrições abertas</Heading>

      <CoursesContainer>
        <CourseCard
          image="/course_image_placeholder.png"
          title="Formação Continuada Multiprofissional da equipe de visitadores dos Programas Bem-Estar da Família e Criança Feliz MODULO XVII"
          firstDate="16/11/2022"
          lastDate="16/11/2022"
          category="Workshop"
        />
        <CourseCard
          image="/course_image_placeholder.png"
          title="Assistência Farmacêutica no Município de Balneário Camboriú - II"
          firstDate="26/08/2022"
          lastDate="25/11/2022"
          category="Workshop"
        />
        <CourseCard
          image="/course_image_placeholder.png"
          title="Primeiras intervenções nas urgências e emergências no ambiente escolar - SEDUC"
          firstDate="26/08/2022"
          lastDate="23/11/2022"
          category="Capacitação"
        />
        <CourseCard
          image="/course_image_placeholder.png"
          title="Boas Práticas nos Serviços de Alimentação na Execução do PNAE no Município de Balneário Camboriú/SC"
          firstDate="1/03/2022"
          lastDate="1/12/2023"
          category="EAD"
        />
      </CoursesContainer>

      <Heading>Cursos Finalizados</Heading>

      <CoursesContainer>
        <CourseCard
          image="/course_image_placeholder.png"
          title="Primeiras intervenções nas urgências e emergências no ambiente laboral - Inclusão Social"
          firstDate="24/10/2022"
          lastDate="24/10/2022"
          finished
          category="Capacitação"
        />
        <CourseCard
          image="/course_image_placeholder.png"
          title="Anestesiologia"
          firstDate="29/09/22"
          lastDate="29/09/22"
          finished
          category="Palestra"
        />
        <CourseCard
          image="/course_image_placeholder.png"
          title="Formação Continuada Multiprofissional da equipe de visitadores dos Programas Bem-Estar da Família e Criança Feliz MODULO XVI"
          firstDate="27/10/2022"
          lastDate="27/10/2022"
          finished
          category="Workshop"
        />
      </CoursesContainer>
    </>
  )
}
