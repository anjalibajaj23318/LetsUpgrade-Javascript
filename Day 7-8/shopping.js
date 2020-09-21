
let products = [
    {
      id: 1,
      name: "White Tshirt",
      size: "L",
      color: "white",
      price: 1200,
      image: "product1.jpeg",
      description: "Good looking white tshirt",
    },
    {
      id: 2,
      name: "Black Shirt",
      size: "M",
      color: "Black",
      price: 1500,
      image: "product2.jpg",
      description: "Good looking black shirt",
    },
  
    {
      id: 3,
      name: "Checked Shirt",
      size: "S",
      color: "White & Black",
      price: 900,
      image: "product3.jpg",
      description: "Good looking Checked Shirt",
    },
  
    {
      id: 4,
      name: "Black Female Blazer",
      size: "M",
      color: "Black",
      price: 3000,
      image: "product4.jpg",
      description: "Beautifull Blazer",
    },
  
    {
      id: 5,
      name: "Navy Blue Top",
      size: "S",
      color: "Blue",
      price: 1300,
      image: "product5.jpg",
      description: "Good looking Top",
    },
  
    {
      id: 6,
      name: "Indian Dress",
      size: "M",
      color: "Henna",
      price: 1500,
      image: "product6.jpg",
      description: "Good looking Traditional Dress",
    },

    {
        id: 7,
        name: "Red Skirt",
        size: "M",
        color: "Henna",
        price: 1500,
        image: "product7.jpeg",
        description: "Good looking Skirt",
      },

      {
        id: 8,
        name: "Black skirt",
        size: "M",
        color: "Henna",
        price: 1500,
        image: "product8.jpg",
        description: "Good looking skirt",
      },

      {
        id: 9,
        name: "Yellow Heels",
        size: "M",
        color: "Henna",
        price: 1500,
        image: "product9.jpg",
        description: "Good looking heels",
      },

      {
        id: 10,
        name: "White Belly",
        size: "M",
        color: "Henna",
        price: 1500,
        image: "product10.jpg",
        description: "Good looking heels",
      },

      {
        id: 11,
        name: "blue heels",
        size: "M",
        color: "Henna",
        price: 1500,
        image: "product11.jpg",
        description: "Good looking heels",
      },

      {
        id: 12,
        name: "Blak Shoes",
        size: "M",
        color: "Henna",
        price: 1500,
        image: "product12.jpeg",
        description: "Good looking shoes",
      },

      

  ];
  
  cart = [];
  
  function displayProducts(productsData, who = "productwrapper") {
    let productsString = "";
  
    productsData.forEach(function (product, index) {
      let { id, name, image, color, description, price, size } = product;
  
      if (who == "productwrapper") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})">Add to Cart</button>
          </p>
        </div>`;
      } else if (who == "cart") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})">Remove from Cart</button>
          </p>
        </div>`;
      }
    });
  
    document.getElementById(who).innerHTML = productsString;
  }
  
  displayProducts(products);
  
  function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =
        product.name + " " + product.color + " " + product.description;
  
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedProducts);
  }
  
  function filterMaxPrice(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =Math.max(product.price);
  
      return searchString <= searchValue
    });
  
    displayProducts(searchedProducts);
  }
  function filterMinPrice(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =Math.min(product.price);
  
      return searchString >= searchValue
    });
  
    displayProducts(searchedProducts);
  }
  
  
  
  
  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }
  
  function addToCart(id) {
    // getting the product
    let pro = getProductByID(products, id);
 
    //   putting in cart
    cart.push(pro);
   
    displayProducts(cart, "cart");
  
  }
  
 
  
  function removeFromCart(id) {
    // getting the index based on id
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
  
    //   removing from cart based on index
    cart.splice(index, 1);
    displayProducts(cart, "cart");



  }