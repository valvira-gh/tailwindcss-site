interface NameFormProps {
  player: Player;
  setPlayer: (player: Player) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

interface Player {
  name: string;
  horses: number;
  money: number;
}

const NameForm: React.FC<NameFormProps> = ({
  player,
  setPlayer,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleStartGame} className="flex flex-col items-center">
      <h5 className="text-2xl font-bold text-sky-400 text-center">
        Create a player
      </h5>
      <input
        type="text"
        placeholder="Name"
        value={player.name}
        onChange={(e) => setPlayer({ ...player, name: e.target.value })}
        className="border-2 border-sky-100 rounded p-2 m-2"
      />
      <button type="submit" className="bg-sky-400 text-white p-2 rounded">
        Start Game
      </button>
    </form>
  );
};

export default NameForm;
