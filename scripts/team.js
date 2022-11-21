var team_list = [{

  'img': "images/team/samantha-mac.svg",
  'DisplayName': "('Samantha Mac', 'Co-President', 'https://www.linkedin.com/in/samantha-mac-06b8811b0/')",
  'Alt': "Samantha Mac"
},{
/*
  'img': "NEED",
  'DisplayName': "('Hina Kazmi', 'Co-President', 'none')",
  'Alt': "Hina Kazmi"
},{*/

  'img': "images/team/nysa-godara.svg",
  'DisplayName': "('Nysa Godara', 'VP of Human Resources', 'none')",
  'Alt': "Nysa Godara"
},{

  'img': "images/team/anjali-pathmanathan.svg",
  'DisplayName': "('Anjali Pathmanathan', 'VP of Human Resources', 'none')",
  'Alt': "Anjali Pathmanathan"
},{

  'img': "images/team/naisha-dharia.jpeg",
  'DisplayName': "('Naisha Dharia', 'VP of Logistics', 'none')",
  'Alt': "Naisha Dharia"
},{

  'img': "images/team/erica-sharma.svg",
  'DisplayName': "('Erica Sharma', 'VP of Logistics', 'https://www.linkedin.com/in/erica-s-744b12177/')",
  'Alt': "Erica Sharma"
},{

  'img': "images/team/dhruv-patel.svg",
  'DisplayName': "('Drhuv Patel', 'VP of Relations', 'https://www.linkedin.com/in/dhruv-patel-82657514a')",
  'Alt': "Dhruv Patel"
},{

  'img': "images/team/parmin-sedigh.jpeg",
  'DisplayName': "('Parmin Sedigh', 'VP of Marketing', 'https://www.linkedin.com/in/parmin-sedigh/')",
  'Alt': "Parmin Sedigh"
},{

  'img': "images/team/shrey-shingala.png",
  'DisplayName': "('Shrey Shingala', 'UI/UX Developer', 'https://www.linkedin.com/in/shrey-shingala-5a8159223/')",
  'Alt': "Shrey Shingala"
},{

  'img': "images/team/yuna-lee.svg",
  'DisplayName': "('Yuna Lee', 'Logistics Coordinator', 'https://www.linkedin.com/in/yunalee111/')",
  'Alt': "Yuna Lee"
},{

  'img': "images/team/saimikaa-divagaran.jpeg",
  'DisplayName': "('Saimikaa Divagaran', 'Logistics Coordinator', 'http://linkedin.com/in/saimikaa-divagaran-a99753243')",
  'Alt': "Saimikaa Divagaran"
},{

  'img': "images/team/sowmiyaa-paranthaman.jpg",
  'DisplayName': "('Sowmiyaa Paranthaman', 'Logistics Coordinator', 'none')",
  'Alt': "Sowmiyaa Paranthaman"
}
];




var team = "";

for (var i = 0, len = team_list.length; len > i; i++) {
  team += "<div class=\"team-col team-img\">";
  team += " <img src=\" " + team_list[i].img + "\" " + "alt=\"" + team_list[i].Alt + "\" onmouseover= \"displayName" + team_list[i].DisplayName + " \"/>";
  team += "</div>";
}
document.getElementsByClassName('team-row')[0].innerHTML = team;



function displayName(name, position, link) {
  /* The main showing the name part */

  text = document.getElementById("team-sub");
  linkedin = document.getElementById("linkedin-url");
  linkedinIcon = document.getElementById("team-linkedin");

  if (link == 'none') {
    text.innerHTML = name + " | " + position;
    linkedinIcon.style.visibility = "hidden";
  } else {
    text.innerHTML = name + " | " + position;
    linkedin.setAttribute("href", link);
    linkedinIcon.style.visibility = "visible";
  }

  /* The fading in part */
  var opacity = 0;
  var Fadein = setInterval(
    function() {

      if (opacity <= 1) {
          opacity = opacity + 0.03
          text.style.opacity = opacity;
          linkedin.style.opacity = opacity;
          linkedinIcon.style.opacity = opacity;
      } 
      else {
          clearInterval(Fadein);
      }
  }
  , 5);

}
