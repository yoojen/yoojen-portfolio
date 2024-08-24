/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const projects = [
  {
    id: 1,
    name: "E-Commerce - Chat Room",
    desc: "Simple ecommerce project that allow client to talk to customer support team in real-time",
    technologies: [
      "Django",
      "WebSocket",
      "HTML, CSS & JS",
      "Django-Channels",
      "django-allauth",
    ],
    link: "https://www.github.com/yoojen/ecommerce_oauth",
    image: "../static/assets/ecommerce_card.png",
  },
  {
    id: 2,
    name: "Banking App",
    desc: "Simple ecommerce project that allow client to talk to customer support team in real-time",
    technologies: [
      "Python",
      "Django",
      "Django-Rest-Framework",
      "HTML, CSS & JS",
    ],
    link: "https://www.github.com/yoojen/100faceofalx",
    image: "../static/assets/bank-card.png",
  },
  {
    id: 3,
    name: "User Authentication and Authorization",
    desc: "NodeJs Project for handling user sign up and sign in with protected endpoints.",
    technologies: ["Node.Js", "ExpressJs", "MongoDB", "HTML, CSS & JS"],
    link: "https://www.github.com/yoojen/",
    image: "../static/assets/auth-card.png",
  },
  {
    id: 4,
    name: "File Management",
    desc: "NodeJs Project for handling user sign up and sign in with protected endpoints.",
    technologies: [
      "Node.Js",
      "ExpressJs",
      "MongoDB",
      "Redis",
      "HTML, CSS & JS",
    ],
    link: "https://www.github.com/jeshi2/alx-files_manager",
    image: "../static/assets/filecard.png",
  },
  {
    id: 5,
    name: "School MIS API",
    desc: "System that is designed for school administration to connect students, teachers and school admin.",
    technologies: ["Python", "Flask", "MySQL", "ReactJS"],
    link: "https://www.github.com/yoojen/sms",
    image: "../static/assets/school-card.png"
  },
  {
    id: 6,
    name: "Python Console Interpretter",
    desc: "Interactive Console that allows user to enter commands and return record from database or file storage.",
    technologies: ["Python", "MySQL", "CMD"],
    link: "https://www.github.com/yoojen/AirBnB_clone_v4",
    image: "../static/assets/cmd-card.png"
  },
  {
    id: 7,
    name: "OTP Verification",
    desc: "Second layer above normal user authentication and authorization where user need to provide phone number before registration is marked as done.",
    technologies: ["Python", "Django", "Django-Rest-Framework"],
    link: "https://www.github.com/yoojen/django_python_auth",
    image: "../static/assets/otp-card.png"
  },
  {
    id: 8,
    name: "Blog Web Application",
    desc: "Web application that encompasses authentication and blog creation.",
    technologies: ["Python", "Django", "HTML, CSS & JS"],
    link: "https://www.github.com/yoojen/100faceofalx",
    image: "../static/assets/blog-card.png"
  },
];

/**
 * DOM ELEMENTS
 */

const cardContainer = document.querySelector('#card-container')
const currentYear = document.querySelector('#currentYear')

currentYear.innerHTML = new Date().getFullYear()
if (window.location.pathname.includes("projects")) {
  projects.map((project) => {
    cardContainer.innerHTML += `
        <div class="col-10 mx-sm-1 overflow-hidden shadow rounded-4 border-0 mb-4">
          <div class="p-0 row">
            <img class="col-lg-4 col-sm-12" src="${project.image}" height=400 style="object-fit: cover;" alt="..."/>
            <div class="p-5 col-lg-6 col-sm-12">
              <h2 class="fw-bolder">${project.name}</h2>
              <p>${project.desc}</p>
              <div class="text-gradient p-1 rounded-2 my-1">
                ${project.technologies.map((technology) => {
                  return ` ${technology}`;
                })}
                  <br />
                <a href="${
                  project.link
                }" class="text-decoration-none text-center" target="_blank">Find it here..</a>
              </div>
            </div>
          </div>
        </div>
      `;
  })
}