import React from "react";

const AllUsers = (userdata) => {
  const { name, id } = userdata;
  return (
    <div>
      {/* <h1 style={{ color: "white" }}>{}</h1> */}
      {console.log(name)}
    </div>
  );
};

export default AllUsers;
