import React from "react";

const MajorPlayers = () => {
  const data = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  return (
    <div id="players" className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">Major Players</h1>
      <table className="min-w-full bg-white border border-gray-400">
        {/* <thead className="border border-gray-200">
          <tr>
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Name</th>
          </tr>
        </thead> */}
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border">{item.id}</td>
              <td className="py-2 px-4 border">{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MajorPlayers;
