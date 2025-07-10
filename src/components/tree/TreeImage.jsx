import React from 'react';
import '../../styles/TreePage.css'; 
import tree from '/assets/tree_objects/summer.png';
import apple from '/assets/fruit/apple.png';

const TreeImage = ({ onAppleClick, treeId, latitude, longitude }) => {
  // props 확인용 console.log
  console.log("TreeImage props:", { treeId, latitude, longitude });

  return (
    <div className="tree-container">
      <img src={tree} alt="tree" className="tree" />

      <img
        src={apple}
        alt="apple1"
        className="apple apple1"
        onClick={onAppleClick}
      />
      <img
        src={apple}
        alt="apple2"
        className="apple apple2"
        onClick={onAppleClick}
      />
      <img
        src={apple}
        alt="apple3"
        className="apple apple3"
        onClick={onAppleClick}
      />
    </div>
  );
};

export default TreeImage;
