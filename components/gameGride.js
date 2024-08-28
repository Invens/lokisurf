import Link from 'next/link';
import { useState } from 'react';
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const GameGrid = ({ games }) => {
const [bgColor, setBgColor] = useState(getRandomColor());

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4 p-4"style={{ backgroundColor: bgColor }} >
       <div className="bg-white rounded-lg flex w-[10vw] h-[20vh]">
            <div className="flex justify-center items-center">
              <Link href="/">
                <h1 className="text-2xl w-[10vw] ml-[12%] font-extrabold">
                  LOki Surf
                </h1>
              </Link>
            </div>
          </div>
      {games.map((game, index) => (
        <Link key={index} href={`/game/${game.guid}`}>
          <div
            className={`relative p-1 rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 ${
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
