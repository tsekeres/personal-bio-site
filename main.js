
const projects = [
  {
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  }
  {
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  }
  {
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  }
]

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}

const createProjectCards = (taco) => {
  let domString = '';
  if (projects.available === true) {
  for (let i = 0; i < taco.length; i++) {
    domString += `<div class="card my-2" style="width: 18rem;" id=${i}>
                    <div class="card-body">
                      <h5 class="card-title">${taco[i].title}</h5>
                      <img src=${taco[i].screenshot} class="card-img">
                      <p class="card-description">${taco[i].description}</p>
                      <p class="card-tech">${taco[i].technologiesUsed}</p>
                      <a href="#" class="card-link">${taco[i].url}</a>
                      <a href="#" class="card-link">${taco[i].githubUrl}</a>
                    </div>
                  </div>`;
    }
  }
  printToDom(#projectPage, printToDom);
}

const init = () => {
  createProjectCards(projects);
}

init();
