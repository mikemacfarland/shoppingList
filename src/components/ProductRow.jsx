
function ProductRow({price,name,isStocked}) {
  const productRowStyle={
    color: isStocked === false ? 'red' : ''
  }
  
  return (
    <div style={productRowStyle} className="flexRow productRow">
      <p>{name}</p>
      <p>{price}</p>  
    </div>
  )
}

export default ProductRow