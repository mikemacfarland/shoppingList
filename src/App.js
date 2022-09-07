import { useState } from "react";
import FilterableProductTable from "./components/FilterableProductTable";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";
import ItemList from './assets/ItemList'


function App() {

  const [inStock,setInstock] = useState(false)
  const [searchTerm,setSearchTerm] = useState('')

  // use both states to check over ItemList in a function
  
  // const checkList =()=>{
  //   const searchItems = ItemList.filter(item=>{
  //     if(item.name.toUpperCase() === searchTerm){
  //       return(item)
  //     }
  //   })
  //   if (inStock === true){
  //     searchItems.filter(item=>{
  //       if(item.stocked === true){
  //         return(item)
  //       }
  //     })
  //   }
  //   else{
  //     return(searchItems)
  //   }
  // }

  return (
    <FilterableProductTable>
      <SearchBar setInstock={setInstock} setSearchTerm={setSearchTerm}/>
      <ProductTable itemList={ItemList}/>
    </FilterableProductTable>
  )
}

export default App;

// use state on checkbox and search bar
// mutate original itemlist by using state.
// update the props in the app with mutated array

// project idea/concept:
// https://reactjs.org/docs/thinking-in-react.html