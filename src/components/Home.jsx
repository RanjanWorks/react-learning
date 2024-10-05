import React from "react";

function Home() {
  return (
    <div
      style={{ height: "calc(100vh - 48px)" }}
      className=" h-screen grid grid-cols-2 relative"
    >
      <section className="bg-blue-50 ">
        <div
          style={{ transform: "translate(-50%,-50%)" }}
          className="absolute top-1/2 left-1/2 text-center"
        >
          <p className="text-blue-700 font-semibold">Welcome to </p>
          <p className="text-5xl antialiased">React App</p>
        </div>
      </section>
      <section></section>
    </div>
  );
}

export default Home;
