interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
  goToPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPreviousPage,
  goToPage,
}) => {
  const displayedPages = () => {
    const pages: any[] = [];
    const siblings = 2;

    if (currentPage !== undefined && currentPage <= siblings) {
      for (let i = 1; i <= siblings * 2 + 1; i++) {
        pages.push(
          <button
            key={i}
            className={`py-3 w-[-moz-available] ${i === currentPage ? "bg-gray-400" : ""} hover:bg-gray-200 transition ease-in-out delay-50`}
            onClick={() => goToPage(i)}
          >
            {i}
          </button>
        );
      }
    } else if (currentPage !== undefined && currentPage > totalPages! - siblings) {
      for (let i = totalPages! - siblings * 2; i <= totalPages!; i++) {
        pages.push(
          <button
            key={i}
            className={`py-3 w-[-moz-available] ${i === currentPage ? "bg-gray-400" : ""} hover:bg-gray-200 transition ease-in-out delay-50`}
            onClick={() => goToPage(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      for (let i = currentPage! - siblings; i <= currentPage! + siblings; i++) {
        pages.push(
          <button
            key={i}
            className={`py-3 w-[-moz-available]  ${i === currentPage ? "bg-gray-400" : ""} hover:bg-gray-200 transition ease-in-out delay-50`}
            onClick={() => goToPage(i)}
          >
            {i}
          </button>
        );
      }
    }

    return pages;
  };

  return (
    <div className="w-full flex justify-center">
      <div className="text-xs flex justify-between my-8 mx-2 border-gray-200 border-2 w-full md:w-[500px]">
        <button className='py-3 w-[-moz-available] hover:bg-gray-200 transition ease-in-out delay-50' onClick={() => goToPage(1)} disabled={currentPage === 1}>
          &lt;&lt;
        </button>
        <button className='py-3 w-[-moz-available] hover:bg-gray-200 transition ease-in-out delay-50' onClick={onPreviousPage} disabled={currentPage === 1}>
          &lt;
        </button>
        {displayedPages()}
        <button className='py-3 w-[-moz-available] hover:bg-gray-200 transition ease-in-out delay-50' onClick={onNextPage} disabled={currentPage === totalPages}>
          &gt;
        </button>
        <button className='py-3 w-[-moz-available] hover:bg-gray-200 transition ease-in-out delay-50' onClick={() => goToPage(totalPages!)} disabled={currentPage === totalPages!}>
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
