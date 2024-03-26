import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-item"
    speed={2}
    width={280}
    height={463}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="136" r="124 " />
    <rect x="0" y="276" rx="5" ry="5" width="280" height="24" />
    <rect x="0" y="326" rx="10" ry="10" width="280" height="84" />
    <rect x="133" y="436" rx="30" ry="30" width="145" height="45" />
    <rect x="0" y="427" rx="5" ry="5" width="90" height="25" />
  </ContentLoader>
);

export default Skeleton;
