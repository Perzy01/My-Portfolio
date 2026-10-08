// ================================
// PORTFOLIO JAVASCRIPT
// ================================


// 1. WELCOME MESSAGE
// ================================

window.addEventListener("load", function () {

  setTimeout(function () {
    alert("Welcome to Clarence's Portfolio! 👋");
  }, 500);

});


// 2. DARK MODE
// ================================

const darkModeButton = document.createElement("button");

darkModeButton.textContent = "🌙 Dark Mode";

darkModeButton.style.position = "fixed";
darkModeButton.style.bottom = "20px";
darkModeButton.style.right = "20px";
darkModeButton.style.padding = "12px 18px";
darkModeButton.style.border = "none";
darkModeButton.style.borderRadius = "25px";
darkModeButton.style.background = "#1e3c72";
darkModeButton.style.color = "white";
darkModeButton.style.cursor = "pointer";
darkModeButton.style.zIndex = "9999";

document.body.appendChild(darkModeButton);


darkModeButton.addEventListener("click", function () {

  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeButton.textContent = "☀️ Light Mode";
  } else {
    darkModeButton.textContent = "🌙 Dark Mode";
  }

});


// 3. DARK MODE CSS
// ================================

const darkStyle = document.createElement("style");

darkStyle.textContent = `
  body.dark-mode {
    background: #121212;
    color: #eeeeee;
  }

  body.dark-mode section,
  body.dark-mode article,
  body.dark-mode aside {
    background: #1e1e1e;
    color: #eeeeee;
  }

  body.dark-mode nav {
    background: #181818;
  }

  body.dark-mode nav a {
    color: #ffffff;
  }

  body.dark-mode nav a:hover {
    background: #2a5298;
  }

  body.dark-mode section h1,
  body.dark-mode article h1,
  body.dark-mode aside h1 {
    color: #66a3ff;
  }

  body.dark-mode article p {
    color: #cccccc;
  }
`;

document.head.appendChild(darkStyle);


// 4. SCROLL ANIMATION
// ================================

const sections = document.querySelectorAll(
  "section, article, aside"
);

const observer = new IntersectionObserver(
  function (entries) {

    entries.forEach(function (entry) {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

      }

    });

  },
  {
    threshold: 0.15
  }
);


sections.forEach(function (section) {

  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";

  observer.observe(section);

});


// 5. BACK TO TOP BUTTON
// ================================

const topButton = document.createElement("button");

topButton.textContent = "⬆";

topButton.style.position = "fixed";
topButton.style.bottom = "70px";
topButton.style.right = "20px";
topButton.style.width = "45px";
topButton.style.height = "45px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#2a5298";
topButton.style.color = "white";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "9999";

document.body.appendChild(topButton);


window.addEventListener("scroll", function () {

  if (window.scrollY > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }

});


topButton.addEventListener("click", function () {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// 6. NAVIGATION CLICK EFFECT
// ================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    navLinks.forEach(function (item) {
      item.style.background = "";
      item.style.color = "";
    });

    link.style.background = "#1e3c72";
    link.style.color = "white";

  });

});


// 7. PROFILE IMAGE INTERACTION
// ================================

const profileImage = document.querySelector("section img");

if (profileImage) {

  profileImage.addEventListener("click", function () {

    profileImage.style.transform = "scale(1.15) rotate(5deg)";

    setTimeout(function () {

      profileImage.style.transform = "";

    }, 500);

  });

}


// 8. CONTACT FORM
// ================================

const form = document.querySelector("form");

if (form) {

  form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = form.querySelector(
      'input[name="name"]'
    ).value;

    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    alert(
      "Thank you, " + name + "! Your message has been received. 😊"
    );

    form.reset();

  });

}
