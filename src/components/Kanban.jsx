import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { motion } from "framer-motion";

const Kanban = ({ products, setProducts }) => {
  const statuses = [
    { name: "Pendente", color: "bg-yellow-100", border: "border-yellow-400" },
    { name: "Em Transporte", color: "bg-blue-100", border: "border-blue-400" },
    { name: "Entregue", color: "bg-green-100", border: "border-green-400" }
  ];

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;
    const productId = draggableId;

    const updatedProducts = products.map((product) =>
      product.id.toString() === productId
        ? { ...product, status: statuses[destination.droppableId].name }
        : product
    );

    setProducts(updatedProducts);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <motion.div
        className="flex gap-6 p-6 bg-white rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {statuses.map((status, index) => (
          <Droppable key={status.name} droppableId={index.toString()}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`w-1/3 p-4 rounded-lg shadow-md min-h-[300px] flex flex-col border-2 ${status.color} ${status.border} ${
                  snapshot.isDraggingOver ? "bg-opacity-75" : ""
                }`}
              >
                <h2 className="text-lg font-semibold text-gray-700 text-center mb-4">
                  {status.name}
                </h2>
                <div className="space-y-2 flex-1">
                  {products
                    .filter((product) => product.status === status.name)
                    .map((product, index) => (
                      <Draggable
                        key={product.id.toString()}
                        draggableId={product.id.toString()}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`p-4 bg-white border border-gray-300 rounded-lg shadow-md transition-all duration-200 ${
                              snapshot.isDragging
                                ? "bg-gray-50 scale-105 shadow-xl z-50"
                                : ""
                            }`}
                          >
                            <p className="font-semibold">{product.name}</p>
                            <p className="text-sm text-gray-600">
                              Quantidade: {product.quantity}
                            </p>
                            <p className="text-sm font-semibold text-gray-700">
                              R$ {product.totalPrice.toFixed(2)}
                            </p>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </motion.div>
    </DragDropContext>
  );
};

export default Kanban;
