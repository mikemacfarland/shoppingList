import { useState,useEffect } from "react";
import FilterableProductTable from "./components/FilterableProductTable";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";
import ItemList from './assets/ItemList'


function App() {

  //  do i really need an "items" state here or should this 
  //  just be passed as a variable?
  const [items,setItems] = useState(ItemList)
  const [inStock,setInstock] = useState(false)
  const [searchTerm,setSearchTerm] = useState('')

  // use both states to check over ItemList in a function
  
  // use effect with inStock and searchTerm as dependencies to run code
  useEffect(()=>{
    const instockItems = ItemList.filter(item=>{
      return  inStock === true ? item.stocked : item
    })
    setItems(instockItems.filter(item=>{
      return item.name.includes(searchTerm) ? item : ''
    }))
  },[inStock,searchTerm])


  return (
    <FilterableProductTable>
      <SearchBar setInstock={setInstock} setSearchTerm={setSearchTerm}/>
      <ProductTable itemList={items}/>
    </FilterableProductTable>
  )
}

export default App;

// use state on checkbox and search bar
// mutate original itemlist by using state.
// update the props in the app with mutated array

// project idea/concept:
// https://reactjs.org/docs/thinking-in-react.html