import React from "react";

const Contact = () => {
  return (
    <>
      <section className="dark:bg-black flex flex-col lg:pt-8 2xl:pt-12 items-center gap-10 h-screen">
        <h1 className="lg:text-4xl 2xl:text-6xl font-bold flex gap-5 text-[#91a31d] dark:text-slate-400 ">
          Contact Me
        </h1>
        <div className="grid grid-cols-2 lg:h-72 2xl:h-96 w-4/5">
          <div className="border p-10">
            <ul className="flex flex-col lg:gap-8 2xl:gap-10">
              <li className="flex items-center lg:gap-4 2xl:gap-8">
                <img src="/images/gmail.png" alt="" className="lg:w-16 2xl:w-20" />
                <p className="dark:text-slate-400 font-medium"><strong className="lg:text-xl 2xl:text-2xl text-[#208323]">Gmail</strong> <br />purbarunmondal@gmail.com</p>
              </li>
              <li className="flex items-center lg:gap-4 2xl:gap-8">
                <img src="/images/linkedin-logo.png" alt="" className="lg:w-16 2xl:w-20" />
                <p className="dark:text-slate-400 font-medium"><strong className="lg:text-xl 2xl:text-2xl text-[#297bae]">LinkedIN</strong> <br />linkedin.com/in/purbarun-mondal-5067a1250</p>
              </li>
              <li className="flex items-center lg:gap-4 2xl:gap-8">
                <img src="/images/github2-light.png" alt="" className="lg:w-16 2xl:w-20 dark:hidden" />
                <img src="/images/github2-dark.png" alt="" className="lg:w-16 2xl:w-20 hidden dark:block" />
                <p className="dark:text-slate-400 font-medium"><strong className="lg:text-xl 2xl:text-2xl text-[#392191] dark:text-[#7051e1] ">Github</strong> <br />purbarunBC13</p>
              </li>
            </ul>
          </div>
          <div className="border bg-[#b7c84c] dark:bg-rose-500 p-10">
            <ul className="flex flex-col gap-10">
              <li className="flex items-center gap-8">
                <img
                  src="/images/twitter.png"
                  alt=""
                  className="lg:w-16 2xl:w-20"
                />
                <p className="dark:text-slate-300 font-medium"><strong className="lg:text-xl 2xl:text-2xl text-[#132f43] dark:text-[#1b4764] ">TwitterX</strong> <br />@DevPurbarunOfc</p>
              </li>
              <li className="flex items-center gap-8">
                <img src="/images/phone.png" alt="" className="lg:w-16 2xl:w-20" />
                <p className="dark:text-slate-300 font-medium"><strong className="lg:text-xl 2xl:text-2xl text-[#278546] dark:text-[#6beca9] ">Phone No.</strong> <br />7076236728</p>
              </li>
              <li className="flex items-center gap-8">
                <img src="/images/map.png" alt="" className="lg:w-16 2xl:w-20" />
                <p className="dark:text-slate-300 font-medium"><strong className="lg:text-xl 2xl:text-2xl text-[#2c6389] dark:text-[#8dd2ff] ">Address</strong> <br />Kolkata , WestBengal</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
