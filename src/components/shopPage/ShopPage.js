import Card from "components/common/Card";
import ImageSlider from "components/common/ImageSlider";
import React, { useState } from "react";

const ShopPage = ({ addToCheckout }) => {
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

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [quantityCount, setQuantityCount] = useState(1);
  const onClickHandler = (item) => {
    setShowModal(true);
    setSelectedItem(item);
  };

  return (
    <div className="shop-container">
      <div className="category-container">
        <ul>
          <li>All</li>
          <li>Motherboards</li>
          <li>Processors</li>
          <li>Graphics Card</li>
          <li>RAM</li>
          <li>Fans</li>
          <li>Computer Cases</li>
        </ul>
      </div>
      <div className="items-container">
        {items.map((item, i) => (
          <Card
            imageSrc={item.imageSrc}
            imageSrcHover={item.imageSrcHover}
            cardText={item.itemName}
            cardSecondaryText={item.itemPrice}
            onClickHandler={() => onClickHandler(item)}
            key={i}
          />
        ))}
      </div>
      {showModal && selectedItem && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="modal-content-header">
              <span>
                {
                  // @ts-ignore
                  selectedItem.itemName
                }
              </span>
              <span className="close" onClick={() => setShowModal(false)}>
                &times;
              </span>
            </div>
            <div className="modal-item-container">
              <ImageSlider
                images={[selectedItem.imageSrc, selectedItem.imageSrcHover]}
              />
              <p>Descriptions here</p>
            </div>
            <div className="modal-item-addToCheckout">
              <div>
                <button
                  onClick={() => {
                    if (quantityCount <= 0) return;
                    setQuantityCount(quantityCount - 1);
                  }}
                >
                  -
                </button>
                <span>{quantityCount}</span>
                <button onClick={() => setQuantityCount(quantityCount + 1)}>
                  +
                </button>
              </div>
              <button
                onClick={() => addToCheckout(quantityCount, selectedItem)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
