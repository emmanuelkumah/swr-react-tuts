import "./App.css";
import Characters from "./components/Products/Characters/Characters";
import useSWR from "swr";

//fetcher
const fetcher = (...args) => fetch(...args).then((res) => res.json());
//api endpoint
const url = "https://fakestoreapi.com/products";

function App() {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <p>Error loading data</p>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <main>
        <h1>Pagination with useSWR</h1>
        <Characters />
      </main>
    </>
  );
}

export default App;
