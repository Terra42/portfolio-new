const projects = [
  {
    id: '0',
    title: 'Portfolio v. 1.0',
    summary:
      'My first attempt to create a "professional" portfolio website, where I could showcase the projects I have been working on in my free time. I was also learning SASS at the time and used this portfolio project to practice my coding skills. Lessons Learned? The design of this website leaves something to be desired :)',
    techStack: [' SASS', ' JavaScript'],
    code: 'https://github.com/Terra42/Portfolio',
    preview: 'https://portfolio-1-0.netlify.app/',
    intro: './assets/portfolio_intro.png',
    picture: './assets/portfolio_img.png',
  },
  {
    id: '1',
    title: 'Medivé veselí',
    summary:
      'This website was created for my friend\'s wedding with the theme of Honey & Bees. The design was provided by the couple and the purpose of this website was to inform guests about the venue, program, dress code etc. I used SASS to code this website. It is protected by a password, however that is intended only as a detergent for someone stumbling accross it by accident, not as a real security feature. The password is stored in the local storage for the convenience of the user. You can access the website by entering a test password: "MediveVeseli".',
    techStack: [' SASS ', ' JavaScript'],
    code: 'https://github.com/Terra42/medive-veseli',
    preview: 'https://svatebni-web.netlify.app/',
    intro: './assets/medive_intro.png',
    picture: './assets/medive_img.png',
  },
  {
    id: '2',
    title: 'PF 2022',
    summary:
      'I created this little animated New Years wish to enter a competition for mentoring by React Girls. I did not win, but I have learned a lot of about CSS animations and transitions in the process. I have used a <a href="https://github.com/catdad/canvas-confetti">canvas-confetti library</a> to create the falling confetti effect.',
    techStack: [' CSS', ' animations', ' canvas-confetti'],
    code: 'https://github.com/Terra42/pf-2022',
    preview: 'https://pf2022.netlify.app/',
    intro: './assets/pf_intro.png',
    picture: './assets/pf_img.png',
  },
  {
    id: '3',
    title: 'Rock-Paper-Scissors-Lizard-Spock',
    summary:
      'This is a variation of the classic game of "Rock-paper-scissors", but inspired by the TV Show "The Big Bang Theory, where the additional values of "Lizard" and "Spock" were added. <a href="https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock">Here</a> are the complete rules. The logic of the game is quite simple - I compared the players choice of the value signified by pressing the corresponding icon with the randomly generated choice by computer. The result of one round of this game is either Win, Loose or Tie.',
    techStack: [' CSS', ' JavaScript', ' canvas-confetti'],
    code: 'https://github.com/Terra42/rock-paper-scissors',
    preview: 'https://terra42-rock-paper.netlify.app/',
    intro: './assets/rock-paper_intro.png',
    picture: './assets/rock-paper_img.png',
  },
  {
    id: '4',
    title: 'Quote generator',
    summary:
      'The purpose of this project was to practice calling REST API via JS and displaying the incoming data. The REST API returns an array of json objects which contain the quote test and author. The program selects one of the quotes randomly and displays it to the user. There is also an option to send the displayed quote as a tweet. I have also implemented a fallback array of quotes in case that the REST API stops working.',
    techStack: [' CSS', ' JavaScript', ' REST API'],
    code: 'https://github.com/Terra42/Quote-generator',
    preview: 'https://terra42-quote.netlify.app/',
    intro: './assets/quote_intro.png',
    picture: './assets/quote_img.png',
  },
  {
    id: '5',
    title: 'Pomodoro timer',
    summary:
      'This web app is my version of "pomodoro" timer, which I have been actually using to improve my productivity. One pomodoro unit is 25 minutes, then you should take a short break of 5 minutes and after 4 pomodoros, you should take a longer break of 15 minutes. The html structure and css styles were already prepared in starter files <a href="https://freshman.tech/pomodoro-timer">here</a>, I have only changed the root colors to my liking and added my own implementation of the functions for the timer in JS.',
    techStack: [' CSS', ' JavaScript'],
    code: 'https://github.com/Terra42/pomodoro',
    preview: 'https://pomodoro-timer1.netlify.app/',
    intro: './assets/pomodoro_intro.png',
    picture: './assets/pomodoro_img.png',
  },
];

const projectsContainerElm = document.getElementById('projects-container');

const createProject = (project) => {
  return ` 
    <div class="project-container">
      <div class="project" id=${project.id}></div>
      <div class="project-img">
        <img src=${project.intro} alt=${project.title} />
      </div>
      <div class="project-content">
        <h4>${project.title}</h4>
        <p>${project.techStack}</p>
      </div
    </div>
  `;
};

for (let i = projects.length - 1; i >= 0; i--) {
  projectsContainerElm.innerHTML += createProject(projects[i]);
}
