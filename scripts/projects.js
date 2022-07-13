const projects = [
  {
    id: '0',
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
    id: '1',
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
    id: '2',
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
    id: '3',
    title: 'Pomodoro timer',
    summary:
      'This web app is my version of "pomodoro" timer, which I have been actually using to improve my productivity. One pomodoro unit is 25 minutes, then you should take a short break of 5 minutes and after 4 pomodoros, you should take a longer break of 15 minutes. The html structure and css styles were already prepared in starter files <a href="https://freshman.tech/pomodoro-timer">here</a>, I have only changed the root colors to my liking and added my own implementation of the functions for the timer in JS.',
    techStack: [' CSS', ' JavaScript'],
    code: 'https://github.com/Terra42/pomodoro',
    preview: 'https://pomodoro-timer1.netlify.app/',
    intro: './assets/pomodoro_intro.png',
    picture: './assets/pomodoro_img.png',
  },
  {
    id: '4',
    title: 'Joke teller',
    summary:
      'Joke teller is a fun little project that I have created based on a UDEMY tutorial. It contains a call to API that provides programming jokes in JSON format and then it passes the text to Voice-to-speach API, that allows the joke to be read out loud. A live preview is not included as I did not want to disclose the API key for security purposes.',
    techStack: [' CSS', ' JavaScript', ' REST API'],
    code: 'https://github.com/Terra42/joke-teller',
    preview: 'https://streamable.com/m1la1u',
    intro: './assets/joke-teller_intro.png',
    picture: './assets/joke-teller_img.png',
  },
  {
    id: '5',
    title: 'IT girl',
    summary:
      'This project is a blog website with my own (very simple and user friendly) CMS implementation. The blog includes a homepage with an intro section and new post section and another page with all published posts. In order to login into the Admin interface, you need to use a username and password - for testing purposes you can use the login details: username - "admin" and password - "ITgirl2022". The Admin section contains a text editor where the user can create new post and fill it with content. The website is connected to a Firestore database where the posts and currently also the login details are kept. This is a work in progress - I have many new features in mind for this project, which I will be addind in time.',
    techStack: [' React.js', ' JavaScript', ' Firebase', ' CSS'],
    code: 'https://github.com/Terra42/itgirl',
    preview: 'https://it-girl.netlify.app/',
    intro: './assets/it-girl_intro.png',
    picture: './assets/it-girl_img.png',
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
