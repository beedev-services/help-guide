import React from "react";
import { useHistory } from "react-router-dom";

function CssList(props) {
  const { goBack } = useHistory();
  console.log("ml: csslist.jsx: csslist: ", props);
  return (
    <div className="guide-wrapper">
      <div className="guide">
        <div className="guide-header">
          <button onClick={() => goBack()}>Go Back</button>
          <h1>The CSS Guides</h1>
        </div>
        <div className="guide-words">
          <h4>
              Below are different tips, tricks, and hints for using or working with CSS.
          </h4>
          <p>What is CSS?  This is used to add the paint to the website... to style it and make it look pleasing.</p>
        </div>
      </div>
      <div className="the-items">
        {props.items.map(item => (
          <div className="item-card" key={item.id}>
          <h3>{item.num}</h3>
          <h3>{item.name}</h3>
          <div className="item-info">
            <p>{item.info01}</p>
            <p>{item.info02}</p>
            <p>{item.info03}</p>
            <p>{item.info04}</p>
          </div>
      </div>
        ))}
      </div>
    </div>
  );
}

export default CssList;
