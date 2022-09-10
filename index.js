// Called when a user loads a new component.
function loadComponent(event) {
  clearStyles();
  const navId = event.target.id;
  document.getElementById(navId).style.textDecoration = 'underline';
  if (navId === "about_nav") {
    document.getElementById('about').style.display = '';
    document.getElementById('projects').style.display = document.getElementById('experience').style.display = 'none'
  }
  else if (navId === "projects_nav") {
    document.getElementById('projects').style.display = '';
    document.getElementById('about').style.display = document.getElementById('experience').style.display = 'none'
  }
  if (navId === "experience_nav") {
    document.getElementById('experience').style.display = '';
    document.getElementById('about').style.display = document.getElementById('projects').style.display = 'none'
  }
}


function loadProgrammingLanguages () {
  console.log('broken?')
  // First, load the programming languages table.
  const programmingLanguageSkills = [
    {language: 'HTML', logoLink: 'html_logo.png', skillLevel: 5},
    {language: 'JavaScript', logoLink: 'javascript_logo.png', skillLevel: 5},
    {language: 'TypeScript', logoLink: 'typescript_logo.png', skillLevel: 5},
    {language: 'Python', logoLink: 'python_logo.png', skillLevel: 5},
    {language: 'C++', logoLink: 'cplus_logo.png', skillLevel: 4},
    {language: 'C#', logoLink: 'csharp_logo.jpg', skillLevel: 4},
    {language: 'CSS', logoLink: 'css_logo.png', skillLevel: 4},
    {language: 'Java', logoLink: 'java_logo.png', skillLevel: 4},
    {language: 'AMPL', logoLink: 'ampl_logo.jpg', skillLevel: 3},
    {language: 'C & Assembly', logoLink: 'c_logo.png', skillLevel: 3},
    {language: 'MATLAB', logoLink: 'matlab_logo.png', skillLevel: 3},
    {language: 'PostgreSQL', logoLink: 'postgresql_logo.png', skillLevel: 3},
    {language: 'R & RStudio', logoLink: 'r_logo.png', skillLevel: 3},
  ]
  
  for (let pl of programmingLanguageSkills) {
    // Create new row.
    var newRow = document.createElement("tr");
    // Add programming language and image.
    var languageNameImage = document.createElement("td");
    languageNameImage.className = "photo_and_language";
    var languageImage = document.createElement("img");
    languageImage.className = "programming_logo";
    languageImage.src = "assets/programming_languages/" + pl.logoLink;
    languageNameImage.appendChild(languageImage);
    var languageName = document.createElement("p");
    var langText = document.createTextNode(pl.language);
    languageName.appendChild(langText);
    languageNameImage.appendChild(languageName);
    // Add skill level for given language.
    var stars = document.createElement("td");
    for (var i=0; i<5; i++) {
      if (i < pl.skillLevel) {
        stars.innerHTML += `<img class="exp_star" src="assets/programming_languages/yellow_star.png"> </img>`
      }
      else {
        stars.innerHTML += `<img class="exp_star" src="assets/programming_languages/star_logo.png"> </img>`
      }
      
    }
    // Append the finished row to the table.
    newRow.appendChild(languageNameImage);
    newRow.appendChild(stars);
    document.getElementById("programming_table").appendChild(newRow);
  }

  // Now, load the skills table.
  const nonProgrammingLanguageSkills = [
    {skill: 'Angular', logoLink: 'angular_logo.png', skillLevel: 5},
    {skill: 'Git', logoLink: 'git_logo.png', skillLevel: 5},
    {skill: 'React', logoLink: 'react_logo.png', skillLevel: 5},
    {skill: 'D3.js', logoLink: 'd3_logo.png', skillLevel: 4},
    {skill: 'Firebase', logoLink: 'firebase_logo.png', skillLevel: 4},
    {skill: 'Office', logoLink: 'office_logo.png', skillLevel: 3},
    {skill: 'AWS', logoLink: 'aws_logo.png', skillLevel: 3},
  ]

  for (let item of nonProgrammingLanguageSkills) {
    // Create new row.
    var skillRow = document.createElement("tr");
    // Add programming language and image.
    var skillBox = document.createElement("td");
    skillBox.className = "photo_and_language";
    var skillImage = document.createElement("img");
    skillImage.className = "programming_logo";
    skillImage.src = "assets/programming_languages/" + item.logoLink;
    skillBox.appendChild(skillImage);
    var skillName = document.createElement("p");
    var skillText = document.createTextNode(item.skill);
    skillName.appendChild(skillText);
    skillBox.appendChild(skillName);
    // Add skill level for given language.
    var skillStars = document.createElement("td");
    for (var i=0; i<5; i++) {
      if (i < item.skillLevel) {
        skillStars.innerHTML += `<img class="exp_star" src="assets/programming_languages/yellow_star.png"> </img>`
      }
      else {
        skillStars.innerHTML += `<img class="exp_star" src="assets/programming_languages/star_logo.png"> </img>`
      }
      
    }
    // Append the finished row to the table.
    skillRow.appendChild(skillBox);
    skillRow.appendChild(skillStars);
    document.getElementById("skills_table").appendChild(skillRow);
  }
}

// Called to clear styling of nav bar.
function clearStyles () {
  document.getElementById("experience_nav").style.textDecoration = "none";
  document.getElementById("projects_nav").style.textDecoration = "none";
  document.getElementById("about_nav").style.textDecoration = "none";
}

loadProgrammingLanguages();
