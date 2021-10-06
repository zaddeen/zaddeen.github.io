// Called when a user loads the "About Me" page.
function loadAboutMe () {
  clearStyles();
  document.getElementById("main_area").innerHTML = 
  `
  <div id="about">
    <div id="bio_and_title">
      <h2 class="bio_title"> Bio </h2>
      <div class="bio">
        <div class="personal_info">
            <p> I've always loved problem solving, and I found
              that programming was the perfect way to blend my creativity with something
              that challenged me. I'm now a Junior studying Computer Science at Northwestern,
              and I've delved into several areas in CS through my classes - these include
              Front-End Design, Machine Learning, and Scalable Software Architectures. Outside of class I've enjoyed
              working with sorting algorithms and experimenting with APIs, especially those that
              have data about some of my hobbies (including playing cards, the NBA, and the sci-fi
              TV show Rick and Morty).</p>
        </div>
        <img class = "bio_image" id="self_photo" src="assets/self-photo.jpeg"></img>
      </div>
    </div>
    <h2 class="education_title"> Education </h2>
    <div class="education_info">
      <div class="photo_and_degree">
        <img class="degree_image" src="assets/nu_engineering_logo.jpeg"> </img> 
        <p class="education_text"> Combined BS/MS in <b><i> Computer Science </i></b> </p>
      </div>
      <div class="photo_and_degree">
        <img class="degree_image" src="assets/nu_kellogg_logo.png"> </img> 
        <p class="education_text"> Kellogg Certificate Program for Undergraduates in <b><i> Managerial Analytics </i></b> </p>
      </div>
    </div>
    <h2 class="programming_title">Programming Languages & Skills</h2>
    <div class="programming_languages" id="programming_languages">
      <table id="programming_table">

      </table>
      <table id="skills_table">

      </table>
    </div>
  </div>
  `;
  loadProgrammingLanguages();
  document.getElementById("about_nav").style.textDecoration = "underline";
}

// Called when a user loads the "Projects" page.
function loadProjects () {
  clearStyles();
  document.getElementById("main_area").innerHTML = 
  `
  <div class="project_and_image">
    <a href="https://youtu.be/D_mMU-N8FOs" target="_blank">
      <img id="search_engine" src="assets/searchengine.png"></img>
    </a>
    <article class="project_description">
      <h2><a href="https://youtu.be/D_mMU-N8FOs" target="_blank">Simple Search Engine</a></h2>
      <h3> Java, Javascript (React) </h3>
      <p> For a project in my Scalable Software Architectures class, I created a Simple Search Engine modeled
        off of Google. It was an excellent way to both become more familiar with Java and HTTP requests, both of which
        I had never limited experience with. Then, I worked with a partner to deploy the entire system onto AWS, making it
        publicly accessible and autonomous.
        <br>
        <br>
        The components included a crawler to grab the most recent
        news data (in the form of WARC files) and post them to S3 storage, a Tomcat server to fetch the results
        of queries, and a React page to allow users to search and view results. Click on the title to watch
        the showcase video of all the components in action!
      </p>
    </article>
  </div>
  <div class="project_and_image">
    <a href="https://zaddeen.github.io/sorting_algorithms/" target="_blank">
      <video class="project_image" id="sorting" playsinline autoplay muted loop>
        <source src="assets/quicksort.mp4" type="video/mp4"/>
        <source src="assets/quicksort.webm" type="video/webm"/>
        Your browser does not support the video tag.
      </video>
    </a>
    <article class="project_description">
      <h2><a href="https://zaddeen.github.io/sorting_algorithms/" target="_blank">Visualizing Sorting Algorithms</a></h2>
      <h3> Javascript (React) </h3>
      <p> While working remotely over the summer, I became totally transfixed with videos
        of sorting algorithms in action. Thinking about it, I realized that I was familiar with
        all of the pseudocode for the algorithms, so I decided to make my own project! I
        created this React App my spare time in order to showcase and animate some of the most
        popular/interesting sorting algorithms, including Merge Sort, Quicksort, and a few others.
        The project was a great way to learn React and hone my JavaScript knowledge, and I'm excited
        to continue adding to it in the future. The link to the live version is above, and I've
        also pushed all of my code with extensive comments to a GitHub repository
        <a  href="https://github.com/zaddeen/sorting_algorithms"
            target="_blank"
            style="font-weight:bold">right here</a>.
        Feel free to play around with it, I hope you enjoy watching as much as I do!</p>
    </article>
  </div>
  <div class="project_and_image">
    <a href="https://hci330-bmp.github.io/elate/" target="_blank">
      <img class = "project_image" id="elate_logo" src="assets/elate_logo.png"></img>
    </a>
    <article class = "project_description">
      <h2><a href="https://hci330-bmp.github.io/elate/" target="_blank">Elate </a></h2>
      <h3> HTML, CSS, Javascript</h3>
        <p>For our final project for Human Computer Interaction, my team members and I
          designed Elate, a website to help people keep track of the positive
          aspects of their lives through journals and goals. We were able to user test
          on a weekly basis, which helped us quickly respond to feedback and easily
          incorporate our new ideas. Since the class focused UX (HTML, CSS, JavaScript) we
          implemented no backend, but we found that testers enjoyed our simple and visually
          pleasing design. You can check out the live prototype at the link above
          (use the username "buymepants" and the password "password2" to log in)
          as well as the GitHub repository
          <a  href="https://github.com/HCI330-BMP/elate"
              target="_blank"
              style="font-weight:bold">right here</a>.</p>
    </article>
  </div>
  <div class="project_and_image">
    <a href="https://github.com/zaddeen/galaga" target="_blank">
      <img class = "project_image" id="galaga_logo" src="assets/galaga_logo.png"></img>
    </a>
    <article class = "project_description">
      <h2><a href="https://github.com/zaddeen/galaga" target="_blank">Galaga</a></h2>
      <h3>C++</h3>
        <p>This final project was my first experience with game design, and I had a ton of
          fun re-creating one of my childhood favorites. The goal was to re-create the video
          game of our choice, following a list of functional requirements that we determined
          as those most essential to the user experience. It was a great way to have fun
          while also developing my object-oriented programming skills.</p>
    </article>
  </div>
  `;
  document.getElementById("projects_nav").style.textDecoration = "underline";
}

// Called when a user loads the "Experience" page.
function loadExperience () {
  clearStyles();
  document.getElementById("main_area").innerHTML =
  `
  <div class="project_and_image">
    <a href="https://www.accenture.com/us-en/services/security-index" target="_blank">
      <img class = "project_image" id="accenture_logo" src="assets/accenture_logo.png"></img>
    </a>
    <article class="project_description">
      <h2>Advanced App Engineering Summer Analyst</h2>
      <h3 class="company_name"> Accenture </h3>
      <p> I had the privelege of joining Accenture as a Summer Analyst during the summer of 2020, and it was an amazing
          opportunity that taught me a ton about both the consulting field in general and test automation, which was my
          main job focus. I helped analyze over 500 automated test scripts across a range of different teams in order to
          ensure the fastest build times possible, and I eventually ended up re-designing the entire suite to slash thes
          existing times by more than 25%. Overall, I learned a ton from working closely with my supervisor, and the
          Accenture company culture was one of the best I have ever experienced. </p>
      <h3 class="experience_date"> June - August 2021 </h3>
    </article>
  </div>
  <div class="project_and_image">
    <a href="https://homebasenu.com/home" target="_blank">
      <img class = "project_image" id="homebase_logo" src="assets/homebase_logo.png"></img>
    </a>
    <article class="project_description">
      <h2>Software Engineer</h2>
      <h3 class="company_name"> Homebase </h3>
      <p> During the summer of 2020, some close friends of mine created Homebase, a platform for Northwestern students to find
        better off-campus housing. I joined as the third member of the Startup, and its been a total blast.
        Whether it be writing custom Python functions to interact with our database, re-styling pages based on mockups
        using HTML and CSS, or even creating our own automatic email service in TypeScript, I've gotten real experiences 
        with a ton of different programming languages and fields that other opportunities just can't offer. </p>
      <h3 class="experience_date"> September 2020 - Present </h3>
    </article>
  </div>
  <div class="project_and_image">
    <a href="https://www.mccormick.northwestern.edu/industrial/" target="_blank">
      <img class = "project_image" id="northwestern_logo" src="assets/northwestern_iems.png"></img>
    </a>
    <article class="project_description">
      <h2>Research Intern</h2>
      <h3 class="company_name"> Northwestern University IEMS Department </h3>
      <p> As a Research Intern, I work closely with several specialized teams in order to help model 
      and improve school districts' transportation systems and enrollment capabilities. In order to do so, 
      I utilize optimization software packages within Python to understand and visualize how changes in the 
      district will affect the larger community.</p>
      <h3 class="experience_date"> March 2020 - June 2021 </h3>
    </article>
  </div>
  `;

  document.getElementById("experience_nav").style.textDecoration = "underline";
}

// Called when a user loads the "About Me" page.
/*
function loadContactInfo () {
  clearStyles();
  document.getElementById("main_area").innerHTML = 
  `
  <div class="contact_description">
        <p> Thanks for stopping by! If you have any questions or just want to chat,
          I'm very responsive to an email at zaddeen@u.northwestern.edu. Also, feel free
          to check out my LinkedIn and GitHub to learn more about my experience, all using the links below!
        </p>
      </div>
  `;
  document.getElementById("contact_nav").style.textDecoration = "underline";
}
*/

function loadProgrammingLanguages () {
  // First, load the programming languages table.
  const languages = ["HTML", "JavaScript", "CSS", "Java", "Python", "TypeScript", "C & Assembly", "C++", "C#", "PostgreSQL", "R & RStudio", "AMPL", "MATLAB"];
  const languageLogos = ["html_logo.png", "javascript_logo.png", "css_logo.png", "java_logo.png", "python_logo.png",
                         "typescript_logo.png", "c_logo.png", "cplus_logo.png", "csharp_logo.jpg", "postgresql_logo.png", 
                         "r_logo.png", "ampl_logo.jpg", "matlab_logo.png"];
  const languageSkills = [5, 5, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2];
  
  for (var i=0; i<languages.length; i++) {
    // Create new row.
    var newRow = document.createElement("tr");
    // Add programming language and image.
    var languageNameImage = document.createElement("td");
    languageNameImage.className = "photo_and_language";
    var languageImage = document.createElement("img");
    languageImage.className = "programming_logo";
    languageImage.src = "assets/programming_languages/" + languageLogos[i];
    languageNameImage.appendChild(languageImage);
    var languageName = document.createElement("p");
    var langText = document.createTextNode(languages[i]);
    languageName.appendChild(langText);
    languageNameImage.appendChild(languageName);
    // Add skill level for given language.
    var skillLevel = document.createElement("td");
    for (var j=0; j<5; j++) {
      if (j < languageSkills[i]) {
        skillLevel.innerHTML += `<img class="exp_star" src="assets/programming_languages/yellow_star.png"> </img>`
      }
      else {
        skillLevel.innerHTML += `<img class="exp_star" src="assets/programming_languages/star_logo.png"> </img>`
      }
      
    }
    // Append the finished row to the table.
    newRow.appendChild(languageNameImage);
    newRow.appendChild(skillLevel);
    document.getElementById("programming_table").appendChild(newRow);
  }

  // Now, load the skills table.
  const skills = ["Git", "React", "Firebase", "Office", "AWS"];
  const skillLogos = ["git_logo.png", "react_logo.png", "firebase_logo.png", "office_logo.png", "aws_logo.png"]
  const skillLevels = [5, 5, 4, 4, 3];

  for (var m=0; m<skills.length; m++) {
    // Create new row.
    var skillRow = document.createElement("tr");
    // Add programming language and image.
    var skillBox = document.createElement("td");
    skillBox.className = "photo_and_language";
    var skillImage = document.createElement("img");
    skillImage.className = "programming_logo";
    skillImage.src = "assets/programming_languages/" + skillLogos[m];
    skillBox.appendChild(skillImage);
    var skillName = document.createElement("p");
    var skillText = document.createTextNode(skills[m]);
    skillName.appendChild(skillText);
    skillBox.appendChild(skillName);
    // Add skill level for given language.
    var skillStars = document.createElement("td");
    for (var n=0; n<5; n++) {
      if (n < skillLevels[m]) {
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
