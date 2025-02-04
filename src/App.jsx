import { useState, useEffect } from "react";
import CheckoutForm from "./components/CheckoutForm";
import DataTable from "./components/DataTable";
import Kanban from "./components/Kanban";
import Footer from "./components/Footer";

const App = () => {
  const [products, setProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("products")) || [];
  });

  const [view, setView] = useState("table");

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Desafio técnico - Aprovei Pay</h1>
        <button
          onClick={() => setView(view === "table" ? "kanban" : "table")}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          {view === "table" ? "Ver Kanban" : "Ver Tabela"}
        </button>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/3">
          <CheckoutForm onAddProduct={addProduct} />
        </div>
        <div className="lg:w-2/3">
          {view === "table" ? (
            <DataTable products={products} setProducts={setProducts} />
          ) : (
            <Kanban products={products} setProducts={setProducts} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
