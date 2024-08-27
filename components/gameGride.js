import Link from 'next/link';

const GameGrid = ({ games }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 p-4">
      {games.map((game, index) => (
        <Link key={index} href={`/game/${game.guid}`}>
          <div
            className={`relative bg-gray-700 p-1 rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 ${
              index % 7 === 0 ? 'col-span-2 row-span-2' : ''
            }`}
          >
            <div
              className="absolute bottom-0 left-0 right-0 inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300"
            >
              <h3 className="text-sm">{game.title}</h3>
            </div>
            <img
              src={game.thumb}
              alt={game.title}
              className="rounded-md mb-0 w-full h-full object-cover"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GameGrid;
