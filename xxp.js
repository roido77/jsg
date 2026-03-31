function getRandomMenu(){

  let menus = [

    {

      name: "コーヒー",

      image: "mg/OIP (2).webp",

      description: "香り高い定番の一杯"

    },

    {

      name: "ケーキ",

      image: "mg/OIP (1).webp",

      description: "甘くてふわふわのスイーツ"

    },

    {

      name: "ラテ",

      image: "mg/OG458A8165_TP_V.webp",

      description: "ミルクたっぷりで飲みやすい"

    },

  ];



  let num = Math.floor(Math.random() * menus.length);

  return menus[num];

}



function showMenu(){

  let menu = getRandomMenu();



  document.getElementById("menu").innerHTML = `

    <h2>${menu.name}</h2>

    <img src="${menu.image}" >

    <p>${menu.description}</p>

  `;

}

window.onload = function(){
  showMenu();
}

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", function() {
nav.classList.toggle("active");
});
