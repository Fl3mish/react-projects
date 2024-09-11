export const getAllFurniture = () => fetch("http://localhost:5000/furniture");

export const deleteFurniture = (furnitureId) =>
  fetch(`http://localhost:5000/furniture/${furnitureId}`, { method: "DELETE" });

export const updateFurniture = (furnitureId, body) =>
  fetch(`http://localhost:5000/furniture/${furnitureId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
