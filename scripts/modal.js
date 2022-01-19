const projects = [
  {
    id: 'project1',
    title: 'Portfolio v. 1.0',
    summary:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At aspernaturmagni rem nobis. Necessitatibus incidunt corrupti ullam! Hic voluptatem.',
    techStack: ['SASS', 'JS'],
    code: 'www.google.com',
    preview: 'www.facebook.com',
    picture: './assets/portfolio_intro.png',
    goals:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quam magnam eveniet quia! Cum quae est hic enim, debitis iusto ad nulla quas tenetur nihil sit doloribus adipisci, maiores eos.',
    lessons: ['Lesson1', 'Lesson2', 'Lesson3'],
  },
  {
    id: 'project2',
    title: 'Medivé veselí',
    summary:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At aspernaturmagni rem nobis. Necessitatibus incidunt corrupti ullam! Hic voluptatem.',
    techStack: ['SASS', 'JS'],
    code: 'www.google.com',
    preview: 'www.facebook.com',
    picture: './assets/medive_intro.png',
    goals:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quam magnam eveniet quia! Cum quae est hic enim, debitis iusto ad nulla quas tenetur nihil sit doloribus adipisci, maiores eos.',
    lessons: ['Lesson1', 'Lesson2', 'Lesson3'],
  },
  {
    id: 'project3',
    title: 'PF 2022',
    summary:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At aspernaturmagni rem nobis. Necessitatibus incidunt corrupti ullam! Hic voluptatem.',
    techStack: ['CSS', 'animations', 'transitions'],
    code: 'www.google.com',
    preview: 'www.facebook.com',
    picture: './assets/pf_intro.png',
    goals:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quam magnam eveniet quia! Cum quae est hic enim, debitis iusto ad nulla quas tenetur nihil sit doloribus adipisci, maiores eos.',
    lessons: ['Lesson1', 'Lesson2', 'Lesson3'],
  },
];

const projectsElm = document.querySelectorAll('.project');
const modalElm = document.getElementById('modal');
const bodyElm = document.querySelector('body');
const closeModalElm = document.getElementById('close-modal');

const modalTitleElm = document.getElementById('modal-title');
const modalSummaryElm = document.getElementById('modal-summary');
const modalStackElm = document.getElementById('modal-stack');
const modalImgElm = document.getElementById('modal-img');
const modalGoalsElm = document.getElementById('modal-goals');
const modalLessonsElm = document.getElementById('modal-lessons');

//open modal
function openModal(event) {
  modalElm.style.display = 'block';
  bodyElm.style.overflow = 'hidden';

  let project = projects[event.target.id];
  //fill modal texts & img
  modalTitleElm.textContent = project.title;
  modalSummaryElm.textContent = project.summary;
  modalGoalsElm.textContent = project.goals;
  modalImgElm.src = project.picture;

  //fill modal tech stack
  let i = 1;
  project.techStack.forEach((tech) => {
    modalStackElm.textContent += tech;
    if (i < project.techStack.length) {
      modalStackElm.textContent += ', ';
    }
    i++;
  });

  //fill modal lessons learned
  project.lessons.forEach((lesson) => {
    modalLessonsElm.innerHTML += `<li>${lesson}</li>`;
  });
}

projectsElm.forEach((project) => project.addEventListener('click', openModal));

//close modal with icon
closeModalElm.addEventListener('click', () => {
  modal.style.display = 'none';
});

// close modal by clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
