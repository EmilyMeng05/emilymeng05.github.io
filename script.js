// Modal interactivity
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('[data-backdrop]');
const titleEl = document.getElementById('modal-title');
const summaryEl = document.getElementById('modal-summary');
const linkEl = document.getElementById('modal-link');

const content = {
  research: {
    title: 'Research',
    summary: 'Quick summary of your research focus (e.g., robotics + RL, computer vision, psychology/neurogenetics). Edit this later.',
    href: 'research.html'
  },
  work: {
    title: 'Work',
    summary: 'Short note about your internships, TA roles, or projects. Edit this later.',
    href: 'work.html'
  },
  hobbies: {
    title: 'Hobbies',
    summary: 'A sentence about what you do for fun — art, robotics club, climbing, music, etc. Edit this later.',
    href: 'hobbies.html'
  }
};

function openModal(kind){
  const data = content[kind];
  if(!data) return;
  titleEl.textContent = data.title;
  summaryEl.textContent = data.summary;
  linkEl.href = data.href;
  linkEl.textContent = `Go to ${data.title} page →`;
  modal.hidden = false;
  backdrop.hidden = false;
  // lock scroll
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  modal.hidden = true;
  backdrop.hidden = true;
  document.body.style.overflow = '';
}

document.querySelectorAll('button[data-modal]').forEach(btn=>{
  btn.addEventListener('click', ()=> openModal(btn.dataset.modal));
});

document.querySelectorAll('[data-close],[data-backdrop]').forEach(el=>{
  el.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape' && !modal.hidden) closeModal();
});
