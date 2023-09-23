import React from "react";

function Header({ handleModeToggle }) {
  return (
    <div className="container">
      <div className="containerLeft">
        <h2>Bookstore</h2>
      </div>
      <div className="containerUser">
        <label className="switch">
          <input type="checkbox" onChange={handleModeToggle} />
          <span className="slider round"></span>
        </label>
        <div className="userSection">
          <img
            className="ImgUser"
            src="https://freesvg.org/img/abstract-user-flat-1.png"
            alt="UserImg"
            title="User"
          />
          <p className="UserName">Acerchicken</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
