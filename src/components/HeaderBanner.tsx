import React from "react";
export interface PropsType {
  title?: string;
  description?: string;
  image?: string;
}
const HeaderBanner: React.FC<PropsType> = ({ title, description, image }) => {
  return (
    <>
      <div className="my-10 mx-auto">
        <div className="bg-bannerBgColor border border-gray-400 rounded-lg p-5">
          <h2 className="inline-block text-2xl xl:text-3xl text-primary font-semibold border-b-4 pb-2 border-yellowbtn ">
            {title}
          </h2>
          <div className="my-3">
            <p className="lg:text-lg text-gray-500">{description}</p>
          </div>
          {/* image */}
        </div>
      </div>
    </>
  );
};

export default HeaderBanner;
