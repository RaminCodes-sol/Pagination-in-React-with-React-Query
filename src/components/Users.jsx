import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import PageButton from "./PageButton"
import { FcNext, FcPrevious } from "react-icons/fc"
import { getUsers } from "../api/users"
import User from './User'




const Users = () => {
    const [page, setPage] = useState(1)

    const { data: users, isLoading, isError, error, isFetching, isPreviousData } = useQuery({
      queryKey: ['users', page],
      queryFn: () => getUsers(page),
      keepPreviousData: true,
    })
    
  
    if (isLoading) return <h1 className="text-white text-center mt-5">Loading...</h1>
    if (isError) return <h1 className="text-white text-center mt-5">Error: {error.message}</h1>
    
    const content = users?.map(user => <User key={user.id} user={user} />)
  
  
    const nextPage = () => setPage(prevPage => prevPage + 1)
    const prevPage = () => setPage(prevPage => prevPage - 1)
  
  
    const pagesArray = Array(Math.ceil(24 / 10)).fill().map((_, index) => index + 1)



  return (
    <div>

      {/*-----Pagination-Buttons------*/} 
      <div className="flex justify-center gap-3 text-white py-5 mt-5">
        <button className=' w-[37px] h-[37px] text-2xl' disabled={isPreviousData || page === 1} onClick={prevPage}>
            <FcPrevious />
        </button>
        { 
            pagesArray?.map((pgNumber) => <PageButton key={pgNumber} pgNumber={pgNumber} setPage={setPage} isPreviousData={isPreviousData} />)
        }
        <button className="w-[37px] h-[37px] text-2xl " disabled={page === 3} onClick={nextPage}>
            <FcNext />
        </button>
      </div>


      {/*----------Users-----------*/}
      { 
        isFetching 
          ? <span className="inline-block mx-auto text-white p-2">Loading...</span>
          : <div>{content}</div>
      }

    </div>
  )
}

export default Users