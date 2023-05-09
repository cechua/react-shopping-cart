import React from "react";
import banner from "../../images/banner.jpg";
import Button from "components/common/Button";
const HomePage = () => {
  const onShopHandler = () => {
    alert("test");
  };
  return (
    <div className="home-page">
      <div className="image-bg">
        <img src={banner} alt="computer" className="image" />
        <div className="banner-text">
          <h6>Build your own PC today!</h6>
          <Button
            onClick={onShopHandler}
            text="Shop Now"
            className="link-button"
            isLink={true}
            urlLink="/shop"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
