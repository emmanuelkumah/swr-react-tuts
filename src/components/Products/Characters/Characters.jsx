import React, { useState } from "react";
import useSWR from "swr";
import SingleCharacter from "./SingleCharacter";
import "../../../App.css";

const Characters = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `https://rickandmortyapi.com/api/character/?page=${pageIndex}`,
    fetcher
  );

  console.log(data);

  if (error) return <h3>Failed to fetch characters</h3>;

  if (isLoading) return <h3>Loading characters...</h3>;

  return (
    <div>
      <section className="character_card">
        {data.results.map((character) => (
          <div className="character_card__item">
            <SingleCharacter key={character.id} character={character} />
          </div>
        ))}
      </section>
      <div>
        <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
        <button
          className="character_btn"
          onClick={() => setPageIndex(pageIndex + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Characters;
