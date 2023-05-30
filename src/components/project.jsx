import React from "react";
import image from "../assets/image3.png";
const Project = () => {
  return (
    <div className="font-display flex flex-row mt-5 mb-9 justify-around items-center">
      <div className="">
        <h3 className="text-white font-medium text-xl ml-6" id="project">PROJECT</h3>
        <p className="text-white  ml-6 mr-4">
          with collaboration of our good old Friend Macron we decided to launch{" "}
          <span className="text-yellow-200"> GNT </span>
          The first Protocol Powered by{" "}
          <span className="text-yellow-200"> “La caisse d'etat”</span> 100%
          backed by Gold.
        </p>
        <p className="text-white  ml-6 mr-4 mt-3">
          We aim to bring gnt on top of the crypto space and pushing the
          protocol to be adopted by French merchands & Remember our protocol is
          SAFU
        </p>

        <h3 className="text-yellow-200 font-medium text-xl ml-6 mt-6" id="token">TOKEN</h3>
        <p className="text-white ml-6 mr-4">
          we have deployed GTN on Binance smart chain because CZ wanted it and
          of course because of low fees for our Holders
        </p>
        <p className="text-white ml-6 mr-4 mt-4">
          Will be soon at launch of our Game host a liveStream with our friend
          Macron & GNT holders will have the opportunity to discuss with{" "}
          <span className="text-yellow-200"> Macron </span> ...STAY TUNED DEGENS
        </p>
      </div>

      <div className="flex  ">
        <img src={image} alt="" className="w-auto" />;
      </div>
    </div>
  );
};

export default Project;
