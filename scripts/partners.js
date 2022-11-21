var partners_list = [{

    'img': "images/partners/pogo.png",
    'name': "Pediatric Oncology Group of Ontario"
  },{

    'img': "images/partners/crs.png",
    'name': "Canadian Retinoblastoma Society"
  },{

    'img': "images/partners/crsab.png",
    'name': "Canadian Retinoblastoma Advisory Board"
  },{

    'img': "images/partners/childhood_cancer_canada.png",
    'name': "Childhood Cancer Canada"
  },{

    'img': "images/partners/p2p.png",
    'name': "Passion 2 Purpose"
  },{

    'img': "images/partners/markham.png",
    'name': "City of Markham"
  },{

    'img': "images/partners/bur_oak.png",
    'name': "Bur Oak Secondary School"
  },{

    'img': "images/partners/maker_pizza.png",
    'name': "Maker Pizza"
  },{

    'img': "images/partners/pizzaville.png",
    'name': "Pizzaville"
  },{

    'img': "images/partners/village_juicery.png",
    'name': "Village Juicery"
  },{

    'img': "images/partners/panago.png",
    'name': "Panago Pizza"
  },{

    'img': "images/partners/kkp_printing.png",
    'name': "KKP Printing"
  },{

    'img': "images/partners/next_door.png",
    'name': "Next Door Restaurant"
  },{

    'img': "images/partners/smash_bar.png",
    'name': "Smash Bar and Kitchen"
  },{

    'img': "images/partners/cupcake_junkie.png",
    'name': "Cupcake Junkie"
  },{

    'img': "images/partners/courage_cookies.png",
    'name': "Courage Cookies"
  },{

    'img': "images/partners/creative_bag.png",
    'name': "Creative Bag"
  },{

    'img': "images/partners/art_land.png",
    'name': "Art Land"
  },{

    'img': "images/partners/kernels_popcorn.png",
    'name': "Kernels Popcorn"
  },{

    'img': "images/partners/basil_box.png",
    'name': "Basil Box"
  }
];
  
var partners = "";

for (var i = 0, len = partners_list.length; len > i; i++) {
  partners += "<div class=\"partner-col\">";
  partners += " <img src=\" " + partners_list[i].img + "\" " + "alt=\" " + partners_list[i].name + " \"/>";
  partners += "</div>";
}
partners += "<div style=\"clear: both;\"></div>"
document.getElementsByClassName('partner-row')[0].innerHTML = partners;
  