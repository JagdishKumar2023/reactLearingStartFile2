import React, { useContext } from "react";
import { UserContext } from "../useContext/UserProvider";

const UserData = () => {
  const { userData } = useContext(UserContext);

  return (
    <div>
      <div className="table">
        {userData.length > 0 ? (
          <table id="table">
            <thead>
              <tr>
                <th>S.no</th>

                <th>Name</th>

                <th>Email</th>

                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((ele, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>{ele.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default UserData;
