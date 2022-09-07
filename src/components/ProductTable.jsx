import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

function ProductTable({itemList}) {

    //https:// stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
    const categories = itemList.map(item =>{
            return item.category
        })
        
        .filter((item,pos,self)=>{
            return self.indexOf(item) === pos
        })

  return (
    <div className="flexColumn">
        <div className='tableHeader flexRow'>
            <p>Name</p>
            <p>Price</p>
        </div>

        {/* refactor below into function? or into return statement
        (remove categoryHeaders,categoryItems)?
        */}

        {categories.map(category=>{
                const categoryHeaders = <ProductCategoryRow key={category} className="category">{category}</ProductCategoryRow>
                const categoryItems = itemList.map(item=>{
                    if(item.category.toUpperCase() === category.toUpperCase())
                    return (<ProductRow key={item.name} name={item.name} price={item.price} isStocked={item.stocked}></ProductRow>)
                })

                return(<>
                    {categoryHeaders}
                    {categoryItems}
                </>)
            })}
    </div>
  )
}

export default ProductTable