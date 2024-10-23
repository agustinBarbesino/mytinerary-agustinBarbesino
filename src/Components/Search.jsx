import React from 'react'

function Search({search, setSearch}) {

    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    return(
        <>
        <div className='w-3/5'>
            <input className='w-full border-2 border-black p-1 rounded-lg shadow-lg hover:border-blue-700' value= {search} type="search" placeholder='Search cities here!' onChange={handleChangeSearch}/>
        </div>  
        </>
    )
}

export default Search
