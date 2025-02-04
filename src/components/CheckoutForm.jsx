import { useState } from "react";

const CheckoutForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({ name: "", quantity: 1, price: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("Processando pagamento...");
  
    setTimeout(() => {
      setLoading(false);
      setMessage("Pagamento aprovado!");
  
      const quantity = parseInt(product.quantity, 10) || 1;
      const price = parseFloat(product.price) || 0;
      const totalPrice = quantity * price;
  
      onAddProduct({ 
        ...product, 
        id: Date.now(), 
        quantity, 
        price, 
        totalPrice, 
        status: "Pendente" 
      });
  
      setProduct({ name: "", quantity: 1, price: "" });
  
      setTimeout(() => setMessage(""), 3000);
    }, 3000);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Checkout
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Nome do Produto</label>
          <input
            type="text"
            placeholder="Digite o nome do produto"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            required
          />
        </div>

        <div className="flex space-x-2">
          <div className="flex-1">
            <label className="block text-gray-700 font-medium">Quantidade</label>
            <input
              type="number"
              placeholder="1"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500"
              value={product.quantity}
              onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
              required
            />
          </div>

          <div className="flex-1">
            <label className="block text-gray-700 font-medium">Preço</label>
            <input
              type="number"
              placeholder="0.00"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-500"
              value={product.price}
              onChange={(e) => setProduct({ ...product, price: e.target.value })}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-900 disabled:bg-gray-400 transition flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              Processando...
            </>
          ) : (
            "Finalizar Compra"
          )}
        </button>

        {message && (
          <p className="text-center text-gray-700 font-medium mt-2">{message}</p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
