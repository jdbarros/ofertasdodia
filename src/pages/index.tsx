/* eslint-disable @typescript-eslint/no-shadow */
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Header from '../components/Header';
import { HomeContainer } from '../styles/HomeStyles';
import HomeHero from '../components/HomeHero';
// import Experience from '../components/Experience';
import FormContatc from '../components/FormContact';
import Footer from '../components/Footer';
import { getPrismicClient } from '../services/prismic';
import Cards from '../components/Cards';

interface ICards {
  slug: string;
  description: string;
  link: string;
  thumbnail: string;
  title: string;
}

interface HomeCards {
  ofertas: ICards[];
}

export default function Home({ ofertas }: HomeCards) {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />

        <Cards ofertas={ofertas} />
        <FormContatc />
      </main>

      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'ofertas')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const ofertas = projectResponse.results.map(ofertas => ({
    slug: ofertas.uid,
    description: ofertas.data.description,
    title: ofertas.data.title,
    link: ofertas.data.link.url,
    thumbnail: ofertas.data.thumbnail.url
  }));

  return {
    props: {
      ofertas
    },
    revalidate: 1
  };
};
