"use client";
import { useState, useEffect } from "react";
import NameForm from "./game/NameForm";
import MenuScreen from "./game/game-components/MenuScreen";

const PetGame: React.FC = () => {
  const [player, setPlayer] = useState({
    name: "",
    horses: 0,
    money: 100,
  });
  const [hasStarted, setHasStarted] = useState(false);

  const handleStartGame = (e) => {
    e.preventDefault();
    console.log("Player created:", player);
    setHasStarted(true);
  };

  console.log(player);
  return (
    <section className="border-2 border-sky-100 min-w-fit h-fit p-5">
      <h5 className="text-2xl font-bold text-sky-400 text-center">
        Mini Pet Game
      </h5>
      {hasStarted ? (
        <MenuScreen />
      ) : (
        <NameForm
          player={player}
          setPlayer={setPlayer}
          handleStartGame={handleStartGame}
        />
      )}
    </section>
  );
};

export default PetGame;
