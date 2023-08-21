import React, { useRef } from "react";

const AddPlayerForm = ({ addPlayer }) => {
  const playerInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    addPlayer(playerInput.current.value);
    event.currentTarget.reset();
  };
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        ref={playerInput}
        placeholder="Enter a player's name"
      />

      <input type="submit" value="Add Player" />
    </form>
  );
};

export default AddPlayerForm;
