import styled from "styled-components";
import { gql } from "@apollo/client";
import client from "../../apollo-client";

// getStaticProps (Static Generation): Fetch data at build time.
// getStaticPaths (Static Generation): Specify dynamic routes to pre-render pages based on data.
// getServerSideProps (Server-side Rendering): Fetch data on each request.

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Characters {
        characters(page: 2, filter: { name: "rick" }) {
          info {
            count
          }
          results {
            id
            name
          }
        }
        location(id: 1) {
          id
        }
        episodesByIds(ids: [1, 2]) {
          id
        }
      }
    `,
  });

  return {
    props: {
      data: data.characters.results.slice(0, 4),
    },
 };
}

export default function HomePage({ data }) {

  return (
    <> 
      <Title>Loaded Data</Title>
      {data.map((character) => (
        <div key={character.id}>
          <h3><a href="#character-name" aria-hidden="true" id="character-name"></a>{character.name}</h3>
          <p>
            {character.id} - {character.name}
          </p>
        </div>
      ))} 
    </>
  );
}

const Title = styled.h1`
  color: crimson;
`;
