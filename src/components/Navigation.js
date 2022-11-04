import React from "react";
import "./Navigation.css"

function Navigation({ activeTab, handleActiveTab }) {
  return (
    <div className="nav">
      {activeTab.map((item) => {
        return (
          <div
            onClick={() => {
              if (!item.isActive) {
                handleActiveTab(item.id);
              }
            }}
            className={
              item.isActive ? "activeNavButton navButtons" : "navButtons"
            }
          >
            {item.label}
          </div>
        );
      })}
      <img className="logo" src="https://codeacademy.mk/images/logo-code-academy.png" alt="Code Academy 2022"></img>
    </div>
  );
}

export default Navigation;
