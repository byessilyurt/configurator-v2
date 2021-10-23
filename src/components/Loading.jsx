import React from "react";
import ClipLoader from "react-spinners/PropagateLoader";

const Loading = () => {
  return (
    <div
      className="app"
      style={{
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        zIndex: 1,
        marginLeft: "41%",
        marginTop: "14%",
      }}
    >
      <div
        className="loading"
        style={{
          fontSize: 90,
          position: "fixed",
          zIndex: 1,
          alignItems: "center",
        }}
      >
        <ClipLoader size={20} color={"#3F51B5"} loading={true} />
      </div>
    </div>
  );
};
export default Loading;
