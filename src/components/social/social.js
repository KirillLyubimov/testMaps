import React from "react";
import { Icon } from "semantic-ui-react";

export const Social = () => {
  return (
    <div className="social">
      <a href="https://facebook.com" className="socialLink">
        <Icon name="facebook f" size="large" />
      </a>
      <a href="https://vk.com" className="socialLink">
        <Icon name="vk" size="large" />
      </a>
      <a href="https://twitter.com" className="socialLink">
        <Icon name="twitter" size="large" />
      </a>
      <a href="https://instagram.com" className="socialLink">
        <Icon name="instagram" size="large" />
      </a>
    </div>
  );
};
