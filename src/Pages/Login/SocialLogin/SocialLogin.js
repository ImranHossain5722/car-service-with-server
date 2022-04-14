import React from "react";
import google from "../../../images/social-images/Google-Logo.png";
import facebook from "../../../images/social-images/facebook.png";
import github from "../../../images/social-images/Github.png";

const SocialLogin = () => {
  return (
    <div >
      <div className="d-flex align-items-center" >
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2"> or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>

    {/* Button  div */}
      <div>
        <button className="btn btn-info w-50 d-block mx-auto">
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>

        {/* facebook button */}
        <button className="btn btn-info w-50 d-block mt-5 mx-auto">
          <img style={{ width: "30px" }} src={facebook} alt="" />
          <span className="px-2">Facebook Sign In</span>
        </button>

        {/* github button */}
        <button className="btn btn-info w-50 d-block mt-5 mx-auto">
          <img style={{ width: "30px" }} src={github} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
