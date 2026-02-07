import React from 'react'

const AcceptTask = ({data}) => {
    return (
      <div className="shrink-0 w-75 p-5 h-full bg-emerald-500 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
            {data.category}
          </h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">{data.title}</h2>
        <p className="text-sm mt-2">{data.description}</p>
        <div className="flex justify-between mt-4 ">
          <button className="bg-blue-500 rounded font-medium py-1 px-2 text-sm">
            mark as completed
          </button>
          <button className="bg-blue-500 rounded font-medium py-1 px-2 text-sm">
            mark as failed
          </button>
        </div>
      </div>
    );
}

export default AcceptTask
