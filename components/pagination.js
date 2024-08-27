const Pagination = ({ gamesPerPage, totalGames, paginate, currentPage }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav className="flex justify-center mt-4">
        <ul className="flex">
          {pageNumbers.map((number) => (
            <li key={number} className={`mx-1 ${currentPage === number ? 'font-bold' : ''}`}>
              <button
                onClick={() => paginate(number)}
                className={`px-4 py-2 border border-gray-700 rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-400'}`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Pagination;
  