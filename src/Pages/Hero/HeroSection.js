import React from "react";

const HeroSection = () => {
  return (
    <div className="px-40 py-10">
      <div>
        <h1 className="text-4xl font-semibold">How Can We help You?</h1>
      </div>
      <div className="form-control py-5">
        <div className="input-group ">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered w-96 h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
