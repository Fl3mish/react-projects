export const getAllFurniture = () => fetch("http://localhost:5000/furniture");

export const deleteFurniture = (furnitureId) =>
  fetch(`http://localhost:5000/furniture/${furnitureId}`, { method: "DELETE" });
