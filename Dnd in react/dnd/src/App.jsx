import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const TableRow = ({ item, index, moveRow }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "row",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "row",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveRow(draggedItem.index, index);
        draggedItem.index = index; 
      }
    },
  });

  return (
    <tr
      ref={(node) => drag(drop(node))}
      style={{
        backgroundColor: isDragging ? "blue" : "gray",
        cursor: "move",
      }}
    >
      <td>{item.id}</td>
      <td>{item.name}</td>
    </tr>
  );
};

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
  ]);

  // const moveRow = (fromIndex, toIndex) => {
  //   const updatedData = [...data];
  //   const [movedItem] = updatedData.splice(fromIndex, 1);
  //   updatedData.splice(toIndex, 0, movedItem);
  //   setData(updatedData);
  // };

  const moveRow = (fromIndex, toIndex) => {
    const updatedData = [...data];
    const [movedItem] = updatedData.splice(fromIndex, 1); // Remove the item from the original position
    updatedData.splice(toIndex, 0, movedItem); // Insert it at the new position
    setData(updatedData);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ padding: "20px" }}>
        <h1>Drag-and-Drop Table</h1>
        <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <TableRow key={item.id} item={item} index={index} moveRow={moveRow} />
            ))}
          </tbody>
        </table>
      </div>
    </DndProvider>
  );
};

export default App;
