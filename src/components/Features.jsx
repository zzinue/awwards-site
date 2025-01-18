const BentoCard = ({ src, title, description, isComingSoon }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute top-0 left-0 size-full  object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
import React from "react";

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the meta game
          </p>
          <p className="max-w-d font-circular-web text-lg text-blue-50 opacity-50">
            {" "}
            Immerse yourself in a rich and ever-expanding universe where vibrant
            array of products converge into an interconnected overlay experience
          </p>
        </div>

        <div className="border-hsla relative mg-7 h- w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            description="A cross-platform, decentralized, and open-source protocol that enables the creation of NFTs and digital assets."
          />
        </div>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7"></div>
      </div>
    </section>
  );
};

export default Features;
