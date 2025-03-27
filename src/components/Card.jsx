import React from "react";

const Card = ({ children, image, icon }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-[16px]">
      <div className="relative h-48">
        <img
          src={image}
          alt="Card Image"
          className="w-full h-full object-cover"
        />
        {icon && (
          <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow">
            {icon}
          </div>
        )}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
};

export default Card;