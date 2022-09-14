import React from "react";
import Header from "../components/Header";

const UersList = () => {
  return (
    <div className="reg__container">
      <Header />
      <div className="container content">
        <div className="border mt-4 p-4">
          <h2 className="text-center bg-info p-2 mb-3">
            Welcome To User Management System
          </h2>
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center ">
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="ms-4">
                <h4>
                  Name :{" "}
                  {localStorage.getItem("name")
                    ? localStorage.getItem("name")
                    : "NA"}
                </h4>
                <h4>
                  Email :{" "}
                  {localStorage.getItem("email")
                    ? localStorage.getItem("email")
                    : "NA"}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UersList;