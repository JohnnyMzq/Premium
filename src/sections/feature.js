/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Rendimiento Rapido',
    title: 'Rendimiento Rapido',
    text:
      'Dejemos esto de lado: siempre habrá una versión en kit de Educacion. Las suscripciones pagas nos permiten continuar ayudando a los estudiantes de todo el mundo.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Suscripcion Pro ',
    title: 'Suscripcion Pro ',
    text:
      'Creemos que es importante que todos tengan acceso al software, especialmente cuando se trata de aprendizaje digital, navegar por teclado y lectores de pantalla.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'acuerdo de asociación',
    title: 'acuerdo de asociación',
    text:
      'Dejemos esto de lado: siempre habrá una versión en kit de Educacion. Las suscripciones pagas nos permiten continuar ayudando a los estudiantes de todo el mundo.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Soporte A Clientes',
    title: 'Soporte A Clientes',
    text:
      'Creemos que es importante que todos tengan acceso al software, especialmente cuando se trata de aprendizaje digital, navegar por teclado y lectores de pantalla.',
  },
];

export default function Feature() {
  return (
   <section sx={{variant: 'section.feature'}}>
     <Container >
      <SectionHeader
        slogan='Características de calidad'
        title='Programación increíble'
      />
      <Grid xs={styles.grid}>
        {data.map((item) => (
          <FeatureCard
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
          />
        ))}
      </Grid>  
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
