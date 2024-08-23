
const popProduct = document.getElementById("main-heading");
popProduct.textContent = "Popular products";

popProduct.style.color = `red`;

const deletedElement = document.getElementsByTagName("aside")[0];
deletedElement.remove();

const deletedElement2 = document.getElementById("second-h3");
deletedElement.classList.remove("heading");

const cartochki = [
  {
    icon: "https://w7.pngwing.com/pngs/510/410/png-transparent-instagram-logo-social-media-computer-icons-instagram-text-photography-orange.png",
    tittle: "Instagram",
    description:
      "Instagram — мессенджерская социальная сеть компании Instagram, созданная в 2010 году в Бельгии и расположенная в Сан-Франциско. ",
    link: "https://www.instagram.com/",
  },
  {
    icon: "https://w7.pngwing.com/pngs/700/990/png-transparent-social-media-in2-plastics-social-network-advertising-computer-icons-facebook-social-media.png",
    title: "facebook",
    description:
      "Facebook - это социальная сеть и сервис социальных сетей, принадлежащий американскому технологическому конгломерату Meta.",
    link: "https://www.facebook.com/",
  },
];

const list = document.getElementById("list");
list.style.display = "flex";
list.style.gap = "200px";
list.style.alignItems = "center";
list.style.justifyContent = "center";

cartochki.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.className = "listItem";
  listItem.style.display = "flex";
  listItem.style.flexDirection = "column";
  listItem.style.width = "250px";
  listItem.style.gap = "30px";
  listItem.style.color = "white";
  listItem.style.display = "flex";
  listItem.style.alignItems = "center";
  listItem.style.height = "80vh";
  listItem.style.borderRadius = "20px";

  const name = document.createElement("h1");
  name.textContent = item.title;
  name.style.fontSize = "25px";
  name.style.fontWeight = "300";
  name.style.marginTop = "20px";

  const image = document.createElement("img");
  image.src = item.icon;
  image.width = 200;
  image.style.borderRadius = "50%";

  const socSeti = document.createElement("img");
  socSeti.src = item.socSeti;
  socSeti.style.width = "30px";
  socSeti.style.borderRadius = "50%";
  socSeti.style.position = "relative";
  socSeti.style.top = "-250px";
  socSeti.style.right = "-100px";
  const title = document.createElement("p");
  title.textContent = item.title;
  title.style.fontSize = "25px";

  const button = document.createElement("button");
  const a = document.createElement("a");

  a.href = item.link;
  a.textContent = "FOR MORE";
  button.append(a);
  button.style.width = "150px";
  button.style.borderRadius = "15px";
  button.style.border = "none";
  button.style.height = "80px";
  button.style.cursor = "pointer";
  a.style.color = "white";
  a.style.textDecoration = "none";
  button.classList.add("sami");

  const description = document.createElement("h3");
  description.textContent = item.description;
  description.style.fontSize = "18px";
  description.style.marginLeft = "15px";

  listItem.append(name, image, title, description, button, socSeti);
  list.appendChild(listItem);
});
