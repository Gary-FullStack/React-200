import React from "react";
import Header from "./Header";
import Player from "./Player";

const App = () => {
  const [players, setPlayers] = React.useState([
    {
      name: "Bob",
      score: 0,
      id: 1,
    },
    {
      name: "Tom",
      score: 0,
      id: 2,
    },
    {
      name: "Jen",
      score: 0,
      id: 3,
    },
    {
      name: "Bubba",
      score: 0,
      id: 4,
    },
  ]);

  const handleRemovePlayer = (id) => {
    setPlayers((prevPlayers) => prevPlayers.filter((p) => p.id !== id));
  };

  const handleScoreChange = (id, delta) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) => {
        if (player.id === id) {
          return {
            name: player.name,
            score: player.score + delta,
            id: player.id,
          };
        }
        return player;
      })
    );
  };

  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={players.length} />

      {/* Players list */}
      {players.map((player) => (
        <Player
          name={player.name}
          score={player.score}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
          changeScore={handleScoreChange}
        />
      ))}
    </div>
  );
};

export default App;
