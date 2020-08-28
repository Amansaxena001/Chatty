import React from "react";

const AllUsers = ({ allUsers: { id, name } }) => {
  return (
    <div>
      {/* <h1 style={{ color: "white" }}>{}</h1> */}
      {console.log(name)}
    </div>
  );
};

export default AllUsers;
