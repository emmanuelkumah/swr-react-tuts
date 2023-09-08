import React from "react";

const SingleCharacter = ({ character }) => {
  return (
    <>
      <section>
        <div>
          <img src={character.image} alt={character.img} />
          <h3>{character.name}</h3>
        </div>
      </section>
    </>
  );
};

export default SingleCharacter;
