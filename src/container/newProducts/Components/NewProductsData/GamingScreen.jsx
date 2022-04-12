import React from 'react'
import Nvidia3080 from '../../Assets/Images/nvidia-rtx-3080.png'

function GamingScreen() {

  // COMPUTER SCREEN
  let gamingScreenNewProductsData = [
    {
      topic: "gaming screen",
      products: [
        {
          image: Nvidia3080,
          name: "NVIDIA RTX 3080",
          memory: "10GB GDDR6X",
          cores: "8704 CUDA Cores",
          coreClock: "1710 MHz",
          connectivity: "DisplayPort 1.4a, HDMI 2",
          power: "320W",
          price: "15000",
        },
        {
          image: Nvidia3080,
          name: "NVIDIA RTX 3080",
          memory: "10GB GDDR6X",
          cores: "8704 CUDA Cores",
          coreClock: "1710 MHz",
          connectivity: "DisplayPort 1.4a, HDMI 2",
          power: "320W",
          price: "15000",
        },
        {
          image: Nvidia3080,
          name: "NVIDIA RTX 3080",
          memory: "10GB GDDR6X",
          cores: "8704 CUDA Cores",
          coreClock: "1710 MHz",
          connectivity: "DisplayPort 1.4a, HDMI 2",
          power: "320W",
          price: "15000",
        },
        {
          image: Nvidia3080,
          name: "NVIDIA RTX 3080",
          memory: "10GB GDDR6X",
          cores: "8704 CUDA Cores",
          coreClock: "1710 MHz",
          connectivity: "DisplayPort 1.4a, HDMI 2",
          power: "320W",
          price: "15000",
        },
        {
          image: Nvidia3080,
          name: "NVIDIA RTX 3080",
          memory: "10GB GDDR6X",
          cores: "8704 CUDA Cores",
          coreClock: "1710 MHz",
          connectivity: "DisplayPort 1.4a, HDMI 2",
          power: "320W",
          price: "15000",
        },
        {
          image: Nvidia3080,
          name: "NVIDIA RTX 3080",
          memory: "10GB GDDR6X",
          cores: "8704 CUDA Cores",
          coreClock: "1710 MHz",
          connectivity: "DisplayPort 1.4a, HDMI 2",
          power: "320W",
          price: "15000",
        },
      ],
    },
  ];

  let newGamingScreenNewProductsData = gamingScreenNewProductsData.reduce((products, topic) => {
    return products.concat(topic.products);
  }, []);

  let htmlSGamingScreenNewProductsData = newGamingScreenNewProductsData.map((products, index) => {
    return `
    <div class='new-products-gaming-products'>
      <img src="${products.image}" class="new-products-gaming-products-image" >
      <div class="new-products-gaming-products-title">
        <p class="new-products-gaming-products-p">${products.name}</p>
      </div>
        <ul class='new-products-gaming-products-ul'>
          <li class='new-products-gaming-products-li'> - Memory capacity: ${products.memory}</li>
          <li class='new-products-gaming-products-li'> - CUDA® Cores: ${products.cores}</li>
          <li class='new-products-gaming-products-li'> - Core Clock: ${products.coreClock}</li>
          <li class='new-products-gaming-products-li'> - Connectivity: ${products.connectivity}</li>
          <li class='new-products-gaming-products-li'> - Required power: ${products.power}</li>
        </ul>
      </div>
    `;
  });

  let htmlGamingScreenNewProductsData = htmlSGamingScreenNewProductsData.join('');

  const gamingScreenNewProducts = () => {
    return { __html: htmlGamingScreenNewProductsData };
  }

  return (
    <div className="new-products-content-right-gaming" id="new-products-content-right-gaming-screen-id">
      <div className="new-products-content-right-gaming-header">
        <p className="new-products-content-right-gaming-title">
          computer screen
        </p>
      </div>
      <div className="new-products-content-right-gaming-content"
        dangerouslySetInnerHTML={gamingScreenNewProducts()}
      ></div>
    </div>
  )
}

export default GamingScreen