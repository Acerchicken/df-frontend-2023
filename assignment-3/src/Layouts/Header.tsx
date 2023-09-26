import React from 'react';

interface HeaderProps {
  handleModeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleModeToggle }) => {
  return (
    <div className="container">
      <div className="containerLeft">
        <h2>Bookstore</h2>
      </div>
      <div className="containerUser">
        <label className="switch" htmlFor="darkModeToggle">
          <input
            type="checkbox"
            id="darkModeToggle"
            onChange={handleModeToggle}
            title="Change dark-light mode"
          />
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
};

export default Header;
