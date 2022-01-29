const projectsElm = document.querySelectorAll('.project');
const modalElm = document.getElementById('modal');
const bodyElm = document.querySelector('body');
const closeModalElm = document.getElementById('close-modal');

const modalTitleElm = document.getElementById('modal-title');
const modalSummaryElm = document.getElementById('modal-summary');
const modalStackElm = document.getElementById('modal-stack');
const modalImgElm = document.getElementById('modal-img');
const modalCodeBtnElm = document.getElementById('modal-code-btn');
const modalPreviewBtnElm = document.getElementById('modal-preview-btn');

//open modal
function openModal(event) {
  modalElm.style.display = 'block';
  bodyElm.style.overflow = 'hidden';

  let project = projects[event.target.id];
  //fill modal texts & img
  modalTitleElm.textContent = project.title;
  modalSummaryElm.innerHTML = project.summary;
  modalImgElm.src = project.picture;
  modalCodeBtnElm.href = project.code;
  modalPreviewBtnElm.href = project.preview;

  //fill modal tech stack
  modalStackElm.textContent = '';
  let i = 1;
  project.techStack.forEach((tech) => {
    modalStackElm.textContent += tech;
    if (i < project.techStack.length) {
      modalStackElm.textContent += ', ';
    }
    i++;
  });
}

projectsElm.forEach((project) => project.addEventListener('click', openModal));

//close modal with icon
closeModalElm.addEventListener('click', () => {
  modal.style.display = 'none';
  bodyElm.style.overflow = 'auto';
});

// close modal by clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
    bodyElm.style.overflow = 'auto';
  }
});
