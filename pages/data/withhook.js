import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";

const QUERY = gql`
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
`;

export default function Characters() {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2><a href="#loading" aria-hidden="true" class="aal_anchor" id="loading"></a>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }


  console.log(data.characters);

  const characters = data.characters.results.slice(0, 5);

  return (
    <>
        <Title>With HOOK</Title>
        <Container>
        {characters.map((character) => (
            <div key={character.id}>
            <h3><a href="#character-name" aria-hidden="true" class="aal_anchor" id="character-name"></a>{character.name}</h3>
            <p>
                {character.id} - {character.name}
            </p>
            </div>
        ))}
        </Container>
    </>
  );
}

const Container = styled.h1`
  border: 1px;
`;

const Title = styled.h1`
  color: blue;
  display: flex;
  justify-content: center;
`;
