import React from "react";
import image from "../assets/image3.png";
const Project = () => {
  return (
    <div className="font-display flex flex-row flex-wrap mt-5 mb-9 justify-around items-center">
      <div className="">
        <h3 className="text-white font-medium ml-6 text-4xl" id="project">PROJECT</h3>
        <p className="text-white  ml-6 mr-4 text-2xl">
          With collaboration of our good old Friend "Manu" we decided to launch{" "}
          <span className="text-yellow-200 text-2xl"> GNT </span>
          The first Protocol Powered by{" "}
          <span className="text-yellow-200 text-2xl"> “La caisse d'etat”</span> 100%
          backed by Gold.
        </p>
        <p className="text-white  ml-6 mr-4 mt-3 text-2xl">
          We aim to bring gnt on top of the crypto space and pushing the
          protocol to be adopted by French merchands & Remember our protocol is
          SAFU.
        </p>

        <h3 className="text-yellow-200 font-medium ml-6 mt-6 text-4xl"id="token">TOKEN</h3>
        <p className="text-white ml-6 mr-4 text-2xl">
          We have deployed GTN on Binance smart chain because CZ wanted it and
          of course because of low fees for our Holders.
        </p>
        <p className="text-white ml-6 mr-4 mt-4 text-2xl">
          Will be soon at launch of our Game host a liveStream with our friend
          Manu & GNT holders will have the opportunity to discuss with{" "}
          <span className="text-yellow-200 text-2xl"> Manu </span> ...STAY TUNED DEGENS!
        </p>
      </div>

      <div className="flex  ">
        <img src={image} alt="" className="w-auto" />;
      </div>
    </div>
  );
};

export default Project;
