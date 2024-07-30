import React from "react";

const MarketSnapshot = () => {
  const data = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];

  return (
    <div id="snap" className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">Market Snapshot</h1>
      <table className="min-w-full bg-white border border-gray-400">
        <thead className="border border-gray-200">
          <tr>
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border">{item.id}</td>
              <td className="py-2 px-4 border">{item.name}</td>
              <td className="py-2 px-4 border">{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketSnapshot;
