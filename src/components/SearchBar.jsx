
function SearchBar({setInstock,setSearchTerm}) {
  //create state for check box
  

  // sets search term state to a string value
  const handleSearch=(e)=>{
    setSearchTerm(e.target.value.toUpperCase())
  }

  // sets instock state to a boolean value
  const handleCheckbox=(e)=>{
    e.target.checked ? setInstock(true) : setInstock(false)
  }
  

  return (
    <div className='searchBar flexColumn'>
        <input id='search'onChange={handleSearch}type="text" />
        <div className="flexRow">
            <input onChange={handleCheckbox} id='instock'type="checkbox"/>
            <label htmlFor='instock'>Only show products in stock</label>
        </div>
    </div>
  )
}

export default SearchBar