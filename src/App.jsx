import React from 'react'

const App = () => {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 rounded-xl border-emerald-800 p-20">
          <form className="flex flex-col items-center justify-center">
            <input
              required
              className=" text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400"
              type="email"
              placeholder="Enter email:"
            />

            <input
              required
              className=" text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl mt-3 placeholder:text-gray-400"
              type="password"
              placeholder="Enter password:"
            />

            <button className=" mt-5 text-white outline-none border-none bg-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App
