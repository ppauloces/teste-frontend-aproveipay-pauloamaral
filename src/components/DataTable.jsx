import { useEffect, useState } from "react";

const DataTable = ({ products, setProducts }) => {
  const [editingProductId, setEditingProductId] = useState(null);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleEdit = (id, field, value) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, [field]: value } : product
    );
    
    const recalculatedProducts = updatedProducts.map((product) => ({
      ...product,
      totalPrice: product.quantity * product.price,
    }));

    setProducts(recalculatedProducts);
  };

  const handleSave = () => {
    setEditingProductId(null);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Produtos Comprados</h2>

      {products.length === 0 ? (
        <p className="text-gray-500 text-center">Nenhum produto adicionado ainda.</p>
      ) : (
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm tracking-wide">
                <th className="p-4 text-left w-32">Produto</th>
                <th className="p-4 text-center w-24">Quantidade</th>
                <th className="p-4 text-center w-28">Preço Unitário</th>
                <th className="p-4 text-center w-28">Total</th>
                <th className="p-4 text-center w-36">Status</th>
                <th className="p-4 text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                  <td className="p-4">
                    {editingProductId === product.id ? (
                      <input
                        type="text"
                        value={product.name}
                        onChange={(e) => handleEdit(product.id, "name", e.target.value)}
                        onBlur={handleSave}
                        className="w-full bg-white border border-gray-300 rounded p-2 focus:ring-2 focus:ring-gray-400"
                      />
                    ) : (
                      <span>{product.name}</span>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {editingProductId === product.id ? (
                      <input
                        type="number"
                        value={product.quantity}
                        onChange={(e) =>
                          handleEdit(product.id, "quantity", parseInt(e.target.value, 10) || 1)
                        }
                        onBlur={handleSave}
                        className="w-16 bg-white border border-gray-300 rounded p-2 text-center focus:ring-2 focus:ring-gray-400"
                      />
                    ) : (
                      <span>{product.quantity}</span>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {editingProductId === product.id ? (
                      <input
                        type="number"
                        value={product.price}
                        onChange={(e) =>
                          handleEdit(product.id, "price", parseFloat(e.target.value) || 0)
                        }
                        onBlur={handleSave}
                        className="w-20 bg-white border border-gray-300 rounded p-2 text-center focus:ring-2 focus:ring-gray-400"
                      />
                    ) : (
                      <span>R$ {(product.price || 0).toFixed(2)}</span>
                    )}
                  </td>
                  <td className="p-4 text-center font-semibold">
                    R$ {(product.totalPrice || 0).toFixed(2)}
                  </td>
                  <td className="p-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.status === "Entregue"
                          ? "bg-green-100 text-green-600"
                          : product.status === "Em Transporte"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  {/* hidden no botão de salvar. daqui a pouco removo */}
                  <td className="p-4 text-center space-x-2">
                    {editingProductId === product.id ? (
                        
                      <button
                        onClick={handleSave}
                        className="hidden bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition"
                      >
                        Salvar
                      </button>
                    ) : (
                      <button
                        onClick={() => setEditingProductId(product.id)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
                      >
                        Editar
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-100 font-bold text-gray-800">
                <td colSpan="3" className="p-4 text-right text-lg">Total Geral:</td>
                <td className="p-4 text-center text-lg font-semibold">
                  R$ {products.reduce((sum, p) => sum + (p.totalPrice || 0), 0).toFixed(2)}
                </td>
                <td colSpan="2"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};

export default DataTable;
