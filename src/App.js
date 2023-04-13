import Directory from "./components/directory/Directory";

function App() {
  const categories = [
    {
      id: 1,
      name: "Hats Collection",
      imageSrc: "https://i.ibb.co/cvpntL1/hats.png",
      imageAlt: "",
      description: "",
      route: "collections/hats",
    },
    {
      id: 2,
      name: "Jackets Collection",
      imageSrc: "https://i.ibb.co/px2tCc3/jackets.png",
      imageAlt: "",
      description: "",
      route: "collections/jackets",
    },
    {
      id: 3,
      name: "Sneakers Collection",
      imageSrc: "https://i.ibb.co/0jqHpnp/sneakers.png",
      imageAlt: "",
      description: "",
      route: "collections/sneakers",
    },
    {
      id: 4,
      name: "Womens Collection",
      imageSrc: "https://i.ibb.co/GCCdy8t/womens.png",
      imageAlt: "",
      description: "",
      route: "collections/womens",
    },
    {
      id: 5,
      name: "Mens Collection",
      imageSrc: "https://i.ibb.co/R70vBrQ/men.png",
      imageAlt: "",
      description: "",
      route: "collections/mens",
    },
  ];

  return <Directory categories={categories} />;
}

export default App;
