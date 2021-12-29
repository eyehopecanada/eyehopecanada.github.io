function displayName(name, position, link) {
  text = document.getElementById("team-sub");
  linkedin = document.getElementById("linkedin-url");
  linkedinIcon = document.getElementById("team-linkedin");

  if (link == 'empty') {
    text.innerHTML = name + " | " + position;
    linkedinIcon.style.visibility = "hidden";
  } else {
    text.innerHTML = name + " | " + position;
    linkedin.setAttribute("href", link);
    linkedinIcon.style.visibility = "visible";
  }
}
