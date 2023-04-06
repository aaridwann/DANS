import React from "react";

function CardComponent({ title, img, desc,type }) {
  return (
    <div className=" w-80 h-60 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div className="flex justify-center md:justify-end -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          src={img}
        />
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
        {/* <p className="mt-2 text-gray-600">
          {desc}
        </p> */}
        <div className=" max-h-40 overflow-clip " dangerouslySetInnerHTML={{ __html: desc }} />
  
      </div>
      <div className="flex justify-end mt-4">
        <a href="#" className="text-xl font-medium text-indigo-500">
          {type}
        </a>
      </div>
    </div>
  );
}

export default CardComponent;
