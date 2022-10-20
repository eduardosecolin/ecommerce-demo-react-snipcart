import "./index.css"
import "./App.css"
import products from "./assets/products.json"
import Product from "./components/Product";

export default function App() {
  return (
      <div className={"container"}>
        <main className={"main"}>
          <h1>
            E-Commerce in React and SnipCart
          </h1>

          <div className={"grid"}>
            {
              products.map((product, i) => <Product {...product} key={i}/>)
            }
          </div>
        </main>
        <div
            id="snipcart"
            data-api-key="MzdkYmQ3YjMtNmNhZi00MjI5LWIzZjctZWZhNTcxY2UzMjQzNjM4MDE4OTcyMTE3ODYyMTA3" hidden
        >
        </div>
      </div>
  );
}
