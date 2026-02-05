import React from 'react'

const AcceptTask = () => {
    return (
      <div className="shrink-0 w-75 p-5 h-full bg-emerald-500 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-3xl font-semibold">Make Consistancy</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          eius eos qui quisquam voluptates ratione.
        </p>
        <div className="flex justify-between mt-4 ">
          <button className="bg-green-500 py-1 text-sm">
            mark as completed
          </button>
          <button className="bg-red-500 py-1 text-sm">mark as failed</button>
        </div>
      </div>
    );
}

export default AcceptTask
