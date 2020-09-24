const { Schema } = require("mongoose");
const db = require("../db/connection");
const product = require("../models/product");
const Product = require("../models/product");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const products = [
    {
      name: "Libman Heavy Duty Mop",
      imgURL1: "https://storage.googleapis.com/p3images/Product_Images/01_mop_01.jpg",
      imgURL2: "https://storage.googleapis.com/p3images/Product_Images/01_mop_02.jpg",
      imgURL3: "https://storage.googleapis.com/p3images/Product_Images/01_mop_03.jpg",
      description: "This heavy-duty wet mop is for the professional cleaner. Designed with a hardwood handle and galvanized steel clamp, this cotton mop is made for your heavy-duty clean-up jobs.",
      price: "16.78",
      rating: "5",
      quantity: "10",
    },
    {
      name: "Husky 34 In Axe",
      imgURL1: "https://storage.googleapis.com/p3images/Product_Images/02_axe_01.jpg",
      imgURL2: "https://storage.googleapis.com/p3images/Product_Images/02_axe_02.jpg",
      imgURL3: "https://storage.googleapis.com/p3images/Product_Images/02_axe_03.jpg",
      description: "Perfect for splitting logs and kindling. Fiberglass double injected handle with over strike protect, for easy gripping, control, comfort, increased strength and durability.",
      price: "33.45",
      rating: "2",
      quantity: "5",
    },
    {
      name: "Estwing 16 in Framing Hammer",
      imgURL1: "https://storage.googleapis.com/p3images/Product_Images/03_hammer_01.jpg",
      imgURL2: "https://storage.googleapis.com/p3images/Product_Images/03_hammer_02.jpg",
      imgURL3: "https://storage.googleapis.com/p3images/Product_Images/03_hammer_03.jpg",
      description: "The 16 in. Estwing Hammer makes a great addition to your toolbox. Its durable, strong design strikes and pulls through materials easily. ",
      price: "148.99",
      rating: "4",
      quantity: "6",
    },
    {
      name: "RYOBI 18 in Gas Chainsaw",
      imgURL1: "https://storage.googleapis.com/p3images/Product_Images/04_chainsaw_01.jpg",
      imgURL2: "https://storage.googleapis.com/p3images/Product_Images/04_chainsaw_02.jpg",
      imgURL3: "https://storage.googleapis.com/p3images/Product_Images/04_chainsaw_03.jpg",
      description: "With its powerful 38cc engine, you can trust the RYOBI 18 in. 2-Cycle Chainsaw to get the job done fast. This saw features an anti-vibe handle to provide added stability and comfort while in use. ",
      price: "179.99",
      rating: "1",
      quantity: "3",
    },
    {
      name: "Quickie 24 in Push Broom",
      imgURL1: "https://storage.googleapis.com/p3images/Product_Images/05_broom_01.jpg",
      imgURL2: "https://storage.googleapis.com/p3images/Product_Images/05_broom_02.jpg",
      imgURL3: "https://storage.googleapis.com/p3images/Product_Images/05_broom_03.jpg",
      description: "The Job Site 24 in. Multi-Surface Indoor/Outdoor Push Broom is ideal for sweeping medium-to-textured surfaces including garages, basements and sidewalks.",
      price: "24.99",
      rating: "5",
      quantity: "10",
    },
    {
      name: "Sylvania 50 Watt Light Bulb",
      imgURL1: "https://storage.googleapis.com/p3images/Product_Images/06_lightbulb_01.jpg",
      imgURL2: "https://storage.googleapis.com/p3images/Product_Images/06_lightbulb_02.jpg",
      imgURL3: "https://storage.googleapis.com/p3images/Product_Images/06_lightbulb_03.jpg",
      description: "This light bulb features our highest quality energy efficient light. It has a high (CRI) of 90+ so colors appear more vivid and natural.",
      price: "4.99",
      rating: "3",
      quantity: "12",
    },
    {
      name: "Sterilite 27 Gal Storage Bin",
      imgURL1: "https://storage.googleapis.com/p3images/Product_Images/07_storagebin_01.jpg",
      imgURL2: "https://storage.googleapis.com/p3images/Product_Images/07_storagebin_02.jpg",
      imgURL3: "https://storage.googleapis.com/p3images/Product_Images/07_storagebin_03.jpg",
      description: "Did he just throw my cat out of the window? Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? They’re using our own satellites against us. And the clock is ticking. Just my luck, no ice. Checkmate… Jaguar shark! So tell me - does it really exist?",
      price: "10.54",
      rating: "2",
      quantity: "7",
    },
    {
      name: "3M Scotch 1 in Painters Tape",
      imgURL1: "https://storage.googleapis.com/p3images/Product_Images/08_paintersTape_01.jpg",
      imgURL2: "https://storage.googleapis.com/p3images/Product_Images/08_paintersTape_02.jpg",
      imgURL3: "https://storage.googleapis.com/p3images/Product_Images/08_paintersTape_03.jpg",
      description: "This painters tape features exclusive Advanced Edge-Lock Paint Line Protector to deliver super sharp paint lines. This tape removes cleanly for up to 14 days without surface or paint damage, even when exposed to direct sunlight. ",
      price: "5.98",
      rating: "4",
      quantity: "10",
    },
    {
      name: "Makita 18v Li-Ion Cordless Drill",
      imgURL1: "https://storage.googleapis.com/p3images/Product_Images/09_cordlessDrill_01.jpg",
      imgURL2: "https://storage.googleapis.com/p3images/Product_Images/09_cordlessDrill_02.jpg",
      imgURL3: "https://storage.googleapis.com/p3images/Product_Images/09_cordlessDrill_03.jpg",
      description: "Drill/Driver Kit with 1.5 Ah Battery and Charger. The drill/driver features a 1/2 in. keyless chuck with a 24-position clutch and 2- speed gear box that adjusts the torque output to control the depth of the screw or fastener.",
      price: "78.99",
      rating: "3",
      quantity: "5",
    },
    {
      name: "Delta Unisaw 15Amp Table Saw",
      imgURL1: "https://storage.googleapis.com/p3images/Product_Images/10_tablesaw_01.jpg",
      imgURL2: "https://storage.googleapis.com/p3images/Product_Images/10_tablesaw_02.jpg",
      imgURL3: "https://storage.googleapis.com/p3images/Product_Images/10_tablesaw_03.jpg",
      description: "Powerful 15 Amp motor with 5000 RPM to complete an DIY or Pro job",
      price: "348.99",
      rating: "4",
      quantity: "2",
    },
  ];

  await Product.insertMany(products);
  console.log("Products Created");
};
const run = async () => {
  await main();
  db.close();
};

run();
