const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

const Pagination = () => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProducts.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-8">
      <nav>
        <ul className="flex list-none">
          {pageNumbers.map(number => (
            <li key={number} className="mx-1">
              <button
                onClick={() => paginate(number)}
                className={`px-3 py-1 rounded ${
                  currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};