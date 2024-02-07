import { nanoid } from "nanoid";

const clothes = [
  {
    id:nanoid(),
    isDisplay:true,
    clotheName: "El Clasico Denim Pant",
    price: 175,
    img: "./img/pants.webp",
    alt: "https://ash-luxe.com/cdn/shop/products/Ashluxetemplate_3370x.png?v=1698408091",
    color: "blue",
    size: [
      {
        id:nanoid(),
        sizeNum: 30,
        isAvailble: true,
      },
      {
        id:nanoid(),

        sizeNum: 32,
        isAvailble: true,
      },
      {
        id:nanoid(),

        sizeNum: 34,
        isAvailble: false,
      },
      {
        id:nanoid(),

        sizeNum: 36,
        isAvailble: true,
      },
    ],
  },
  {
    id:nanoid(),
    isDisplay:false,

    clotheName: "ASHLUXE Logo Blank High neck T-shirt White",
    price: 98,
    img: "./img/neck.webp",
    alt: "https://cdn.shopify.com/s/files/1/0066/2326/4828/products/AshluxeBlankWhite_4efe05c5-08a4-46da-a5c8-753eee1cfc24_720x.png?v=1698408105",
    color: "white",
    size: [
      {
        sizeNum: "S",
        isAvailble: false,
      },
      {
        sizeNum: "M",
        isAvailble: false,
      },
      {
        sizeNum: "L",
        isAvailble: true,
      },
      {
        sizeNum: "XL",
        isAvailble: true,
      },
    ],
  },
  {
    id:nanoid(),
    isDisplay:false,

    clotheName: "Men's Denim Trucker Jean - Black",
    price: 520,
    img: "https://cdn.shopify.com/s/files/1/0066/2326/4828/products/Ashluxe_Men_s_Denim_Trucker_Jean-Black_19605e50-87f8-4d9b-bd8c-e13c5b235502_720x.png?v=1698408072",
    alt: "Some Men Jeans",
    color: "Black",
    size: [
      {
        sizeNum: "S",
        isAvailble: true,
      },
      {
        sizeNum: "M",
        isAvailble: true,
      },
      {
        sizeNum: "L",
        isAvailble: true,
      },
      {
        sizeNum: "XL",
        isAvailble: true,
      },
    ],
  },
  {
    id:nanoid(),
    isDisplay:false,

    clotheName: "Ashluxe Denim Shorts Washed Blue",
    price: 340,
    img: "./img/shorts.webp",
    alt: "https://cdn.shopify.com/s/files/1/0066/2326/4828/products/WashDenimBlue_0d5ccfe8-2cce-4328-b9ec-667412cb8f6a_720x.png?v=1698408102",
    color: "blue",
    size: [
      {
        sizeNum: "S",
        isAvailble: false,
      },
      {
        sizeNum: "M",
        isAvailble: true,
      },
      {
        sizeNum: "L",
        isAvailble: true,
      },
      {
        sizeNum: "XL",
        isAvailble: true,
      },
    ],
  },
  {
    id:nanoid(),
    isDisplay:false,

    clotheName: "Ashluxe Mirro Glasses - Red",
    price: 120,
    img: "./img/glass.webp",
    alt: "https://cdn.shopify.com/s/files/1/0066/2326/4828/products/11_d307e1a7-212f-43a1-9342-d2624d5f2a0d_720x.png?v=1698408068",
    color: "red",
    size: [{sizeNum:"OS",isAvailble:true}]
  }
];


export default clothes