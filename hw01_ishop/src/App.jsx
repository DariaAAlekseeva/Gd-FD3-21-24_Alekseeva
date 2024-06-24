import './App.css';

function ProductTable(props) {
  const shopName = props.shopName;
  
  let resTable = props.productsArray.map(function (elem, index) {
    return <tr key={index}>
      <td>{elem.name}</td>
      <td>{elem.price}</td>
      <td><img src={elem.pic} alt="" /></td>
      <td>{elem.count}</td>
    </tr>;
  });

  return <table>
   <caption><h1>{shopName}</h1></caption>
    <thead>
      <tr>
        <td>Product</td>
        <td>Price</td>
        <td>Pic</td>
        <td>Count</td>
      </tr>
    </thead>
    <tbody>
      {resTable}
    </tbody>
  </table>
}

function App() {
  return (
    <div className="App">
      <ProductTable
      shopName = "Tutti Frutti"
      productsArray = {[
        { name: "apple", price: 4, pic: "/images/apple.jpg", count: 115 },
        { name: "lemon", price: 5, pic: "/images/lemon.jpeg", count: 210 },
        { name: "watermelon", price: 10, pic: "/images/watermelon.jpeg", count: 67 },
        { name: "pear", price: 4, pic: "http://via.placeholder.com/360x360", count: 301 }, 
      ]}

      
      />
    </div>
  );
}

export default App;
