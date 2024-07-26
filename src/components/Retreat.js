
import React from 'react';

const Retreat = ({ retreat }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <img src={retreat.image} alt={retreat.title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl font-bold mt-4">{retreat.title}</h2>
      <p className="mt-2">{retreat.description}</p>
      <p className="mt-2 text-gray-500">{new Date(retreat.date).toLocaleDateString()}</p>
      <p className="mt-2 text-gray-500">{retreat.location}</p>
      <p className="mt-2 text-green-600">${retreat.price}</p>
    </div>
  );
};

export default Retreat;
