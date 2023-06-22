import { useState } from 'react'

function SearchBar(props: { handleSearch: (arg0: any, arg1: any) => any }){
    let [searchTerm, setSearchTerm] = useState('')

    return (
            <form onSubmit={(e: any) => props.handleSearch(e, searchTerm)}>
                <input type="text" placeholder="Search Here" onChange={(e: { target: { value: any } }) => setSearchTerm(e.target.value)} />
                <input type="submit" />
            </form>
    )
}

export default SearchBar
