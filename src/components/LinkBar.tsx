import React from "react";
import "../css/LinkBar.css";
const LinkBar = () => {
  return (
    <div className="link-bar-background">
      <div className="link-bar-container">
        <div
          className="link-bar-box"
          style={{ backgroundColor: "hsl(257, 14%, 25%)" }}
        >
          <div>
            <form>
              <input className="form" placeholder="Shorten a link here..." />
              <button className="shorten-button" type="submit">
                Shorten it!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkBar;
