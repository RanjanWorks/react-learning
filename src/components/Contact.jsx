import React from "react";

function Contact() {
  return (
    <div className="p-3 px-9">
      <div className="text-3xl mb-2 text-blue-500 font-semibold">Contact</div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        iusto accusamus tenetur animi facere quo iure libero odio officia ad,
        fugit cumque vitae eos est ratione tempora quasi minus adipisci
        voluptates possimus quos nobis!
      </p>
      <form className="flex flex-col gap-5 w-1/2" >
        <p className="text-2xl mt-4">Fill Temp Form</p>
        <input className="bg-zinc-100 p-3 rounded"  type="text" placeholder="Name" />
        <input className="bg-zinc-100 p-3 rounded" type="text" placeholder="Email" />
        <textarea className="bg-zinc-100 p-3 rounded resize-none " rows={4} ></textarea>
      </form>
    </div>
  );
}

export default Contact;
