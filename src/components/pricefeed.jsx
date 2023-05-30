import React from "react";
import Marquee from "react-fast-marquee";

const Pricefeed = () => {
  return (
    <>
      <h3 className="font-display font-bold text-4xl text-center text-yellow-200">
        - Live chart & trade bar -
      </h3>
      <div className="flex items-center flex-wrap justify-center ">
        <div className="flex justify-center mt-10 p">
        <iframe
            width="700"
            height="800"
            className=""
            src="https://coinbrain.com/coins/bnb-0x4c9c4a814ef97acfef97dd1b0ebd83712c3a7ed1/lite?theme=custom&accent=ffdc7a&padding=4&background=000000&currency=USD"
          ></iframe>
        </div>
        <div className="flex justify-center mt-10 ml-10 ">
            <iframe
              width="400"
              height="590"
              src="https://coinbrain.com/embed/trade?theme=custom&accent=ffdc7a&padding=4&background=00000020&chainId=56&inputAddress=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&outputAddress=0x4c9c4a814EF97AcfEF97dD1B0EbD83712c3A7eD1&outputLocked=1"
            ></iframe>
          </div>
        
      </div>
    </>
  );
};

export default Pricefeed;
