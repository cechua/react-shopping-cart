import Card from "components/common/Card";
import React from "react";

const ShopPage = () => {
  const items = [
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "CPU TEST",
      itemPrice: "$123.00",
      category: "Processor",
      productId: "cpu_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "CPU TEST",
      itemPrice: "$123.00",
      category: "Processor",
      productId: "cpu_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "CPU TEST",
      itemPrice: "$123.00",
      category: "Processor",
      productId: "cpu_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "CPU TEST",
      itemPrice: "$123.00",
      category: "Processor",
      productId: "cpu_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "CPU TEST",
      itemPrice: "$123.00",
      category: "Processor",
      productId: "cpu_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "CPU TEST",
      itemPrice: "$123.00",
      category: "Processor",
      productId: "cpu_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "CPU TEST",
      itemPrice: "$123.00",
      category: "Processor",
      productId: "cpu_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "CPU TEST",
      itemPrice: "$123.00",
      category: "Processor",
      productId: "cpu_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "CPU TEST",
      itemPrice: "$123.00",
      category: "Processor",
      productId: "cpu_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "CPU TEST",
      itemPrice: "$123.00",
      category: "Processor",
      productId: "cpu_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "CPU TEST",
      itemPrice: "$123.00",
      category: "Processor",
      productId: "cpu_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "CPU TEST",
      itemPrice: "$123.00",
      category: "Processor",
      productId: "cpu_1",
    },
  ];
  const onClickHandler = () => {
    alert("test");
  };
  return (
    <div className="shop-container">
      <div className="category-container">
        <ul>
          <li>Motherboards</li>
          <li>Processors</li>
          <li>Graphics Card</li>
          <li>RAM</li>
          <li>Fans</li>
          <li>Computer Cases</li>
        </ul>
      </div>
      <div className="items-container">
        {items.map((item) => (
          <Card
            imageSrc={item.imageSrc}
            imageSrcHover={item.imageSrcHover}
            cardText={item.itemName}
            cardSecondaryText={item.itemPrice}
            onClickHandler={onClickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
