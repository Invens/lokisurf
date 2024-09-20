"use client";
import { useParams } from 'next/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head'; // Import Head for meta tags
import Header from '@/components/header/page';
import Bfooter from '@/components/footer/b-footer';
import Image from 'next/image';

const CategoryPage = () => {
  const { category } = useParams(); // Use useParams to access the dynamic route parameters
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGamesByCategory = async () => {
      try {
        const response = await axios.get('https://api.lokisurf.com/api/games');  // Fetch all games
        const allGames = response.data;
        const filteredGames = allGames.filter(game => game.category === category); // Filter games by category
        setGames(filteredGames);  // Set filtered games in state
      } catch (error) {
        console.error("Error fetching games", error);
      } finally {
        setLoading(false); // Set loading to false once the fetch is complete
      }
    };

    if (category) fetchGamesByCategory(); // Fetch games only if the category is available
  }, [category]);

  // Generate meta tags dynamically
  const metaTitle = `Games in ${category} - Loki Surf`;
  const metaDescription = `Explore a wide range of games in the ${category} category on Loki Surf. Find your next favorite game now!`;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="/lokisurf.png" /> {/* Adjust the path to an appropriate default image */}
        <meta property="og:url" content={`https://lokisurf.com/category/${category}`} />
      </Head>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mt-[150px]">
        <div className="mt-4 top-4 left-4 bg-gray-500 text-white px-4 py-2 rounded-lg shadow-lg">
          <h1 className="text-xl font-semibold">Games in: {category}</h1>
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-[60vh]">
            {/* Loading Animation */}
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4 p-4">
            {games.map((game, index) => (
              <Link key={index} href={`/game/${game.guid}`}>
                <div
                  className={`relative p-1 rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 ${index % 7 === 0 ? 'col-span-2 row-span-2' : ''} hover:scale-105 hover:rotate-3d`}
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                  >
                    <h3 className="text-sm">{game.title}</h3>
                  </div>
                  <Image
                  width={1000}
                  height={1000}
                    src={game.thumb}
                    alt={game.title}
                    className="rounded-md mb-0 w-full h-full object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        )}
        <style jsx>{`
          .rotate-3d {
            transform: rotateY(0deg) rotateX(0deg);
            transition: transform 0.5s ease-in-out;
          }
          .hover\\:rotate-3d:hover {
            transform: rotateY(15deg) rotateX(15deg);
          }
          @keyframes backgroundAnimation {
            0% { background-color: #ffffff; }
            50% { background-color: #f0f0f0; }
            100% { background-color: #ffffff; }
          }
          .hover\\:animate-background:hover {
            animation: backgroundAnimation 1s ease-in-out infinite;
          }
        `}</style>
      </div>
      <Bfooter />
    </>
  );
};

export default CategoryPage;
