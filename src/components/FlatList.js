import React from "react";
function FlatList({ items }) {
  return (
    <>
      <ul
        className="flex justify-center items-center gap-3 py-3 pl-32 pr-4 px-auto md:pr-0 md:pl-0 overflow-x-scroll no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((items, index) => (
          <li
            key={index}
            className="flex items-center justify-center flex-col p-4 bg-[#f9f9f9] rounded-lg md:rounded-md w-56 shadow cursor-pointer"
          >
            <span>{items.icon}</span>
            <span className="font-mono font-bold mb-0">{items.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FlatList;
