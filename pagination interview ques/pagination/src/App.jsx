import { useState } from 'react';
function App() {
  const data = [
    { id: 1, name: 'Application 1' },
    { id: 2, name: 'Application 2' },
    { id: 3, name: 'Application 3' },
    { id: 4, name: 'Application 4' },
    { id: 5, name: 'Application 5' },
    { id: 6, name: 'Application 6' },
    { id: 7, name: 'Application 7' },
    { id: 8, name: 'Application 8' },
    { id: 9, name: 'Application 9' },
    { id: 10, name: 'Application 10' },
    { id: 11, name: 'Application 11' },
    { id: 12, name: 'Application 12' },
  ];

  const [currpage, setCurrpage] = useState(1);
  const perpage = 5;

  // Calculate indexes of items to display on the current page
  const indexOfLastItem = currpage * perpage;
  const indexOfFirstItem = indexOfLastItem - perpage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(data.length / perpage);

  // Function to handle page changes
  const handlePageChange = (page) => {
    setCurrpage(page);
  };

  return (
    <>
      <div>
        <h1>Applications</h1>
        <ul>
          {currentItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>

        {/* Pagination Controls */}
        <div>
          <button
            onClick={() => handlePageChange(1)}
            disabled={currpage === 1}
          >
            First
          </button>
          <button
            onClick={() => handlePageChange(currpage - 1)}
            disabled={currpage === 1}
          >
            Previous
          </button>
          <span>
            Page {currpage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currpage + 1)}
            disabled={currpage === totalPages}
          >
            Next
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currpage === totalPages}
          >
            Last
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
