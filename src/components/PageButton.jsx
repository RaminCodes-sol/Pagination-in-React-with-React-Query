

const PageButton = ({ pgNumber, setPage, isPreviousData }) => {
  
  return (
    <button 
        className="bg-white w-[37px] h-[37px] text-lg text-black"
        onClick={() => setPage(pgNumber)}
        disabled={isPreviousData}
        >
        {pgNumber}
    </button>
  )
}

export default PageButton