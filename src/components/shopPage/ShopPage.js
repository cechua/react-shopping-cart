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
      itemPrice: "123.00",
      category: "Processor",
      productId: "cpu_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "GPU TEST",
      itemPrice: "123.00",
      category: "Graphics Card",
      productId: "gpu_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "RAM TEST",
      itemPrice: "123.00",
      category: "RAM",
      productId: "ram_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "FAN TEST",
      itemPrice: "123.00",
      category: "Fans",
      productId: "fans_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "Computer Case TEST",
      itemPrice: "123.00",
      category: "Computer Cases",
      productId: "computercase_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "MOBO TEST",
      itemPrice: "123.00",
      category: "Motherboards",
      productId: "mobo_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "CPU TEST",
      itemPrice: "123.00",
      category: "Processor",
      productId: "cpu_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "CPU TEST",
      itemPrice: "123.00",
      category: "Processor",
      productId: "cpu_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "CPU TEST",
      itemPrice: "123.00",
      category: "Processor",
      productId: "cpu_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "CPU TEST",
      itemPrice: "123.00",
      category: "Processor",
      productId: "cpu_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "CPU TEST",
      itemPrice: "123.00",
      category: "Processor",
      productId: "cpu_1",
    },
    {
      imageSrc:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/9/90/Dimitri_Profile.jpg?width=640",
      imageSrcHover:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/fire-emblem-nintendo-switch/6/60/Edelgard_Profile.jpg?width=640",
      itemName: "CPU TEST",
      itemPrice: "123.00",
      category: "Processor",
      productId: "cpu_1",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [quantityCount, setQuantityCount] = useState(1);
  const onClickHandler = (item) => {
    setQuantityCount(1);
    setShowModal(true);
    setSelectedItem(item);
  };

  const uniqueCategories = (value, index, array) => {
    return array.indexOf(value) === index;
  };
  const itemCategories = items
    .map((item) => item.category)
    .filter(uniqueCategories);

  const [filteredItems, setFilteredItems] = useState(items);
  const filterItems = (category) => {
    if (category === "All") {
      setFilteredItems(items);
    } else {
      const result = items.filter((item) => item.category === category);
      setFilteredItems(result);
    }
  };
  return (
    <div className="shop-container">
      <div className="category-container">
        <ul>
          {["All", ...itemCategories]?.map((category) => {
            return <li onClick={() => filterItems(category)}>{category}</li>;
          })}
        </ul>
      </div>
      <div className="items-container">
        {filteredItems.map((item, i) => (
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
            <div className="modal-item-image-container">
              <ImageSlider
                images={[selectedItem.imageSrc, selectedItem.imageSrcHover]}
              />
            </div>
            <div className="modal-item-body-container">
              <div className="modal-item-descriptions">
                <p>Descriptions here</p>
              </div>
              <div className="modal-item-addToCheckout">
                <div className="modal-item-quantityIncrements">
                  <button
                    onClick={() => {
                      if (quantityCount <= 0) return;
                      setQuantityCount(quantityCount - 1);
                    }}
                    className="button-quantityIncrement"
                  >
                    -
                  </button>
                  <span>{quantityCount}</span>
                  <button
                    onClick={() => setQuantityCount(quantityCount + 1)}
                    className="button-quantityIncrement"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => addToCheckout(quantityCount, selectedItem)}
                  className="buttonStyled button-addToCart"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
