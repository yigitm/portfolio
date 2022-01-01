window.addEventListener('DOMContentLoaded', () => {
  const about = document.querySelector('.about');
  const projects = document.querySelector('.projects');

  about.addEventListener('mouseenter', () => {
    const textAbout = document.querySelector('.text-about');
    textAbout.classList.remove('text-about');
    textAbout.classList.add('text-experience');
    textAbout.innerHTML = `
            <span style="padding-left: 40%">Currently :</span></br>
            <span>
              Studying in Microverse full-stack development school.
            </span></br>
            <span>
              Practicing Javascript, React, Ruby, Rails, and Agile
              methodologies.
            </span></br>
            <span style="padding-left: 40%">Formerly :</span></br>
            <span>Former technical customer support team lead.</span></br>
            <span>
              Performed different roles in various industries.
            </span></br>
            <span>( Tourism, Logistics, Aviation e-Learning ).</span>`;
  });

  about.addEventListener('mouseleave', () => {
    setTimeout(() => {
      about.innerHTML = `<p class="text-about">ABOUT.</p>`;
    }, 500);
  });

  projects.addEventListener('mouseenter', () => {
    const textProjects = document.querySelector('.text-projects');
    textProjects.innerHTML = `<div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <h1 class="text-center" style="font-family: 'Bebas Neue', cursive;">Spotify Release Tracker</h1>
      <img src="images/app.gif" class="d-block w-100" alt="project-gif">      
    </div>
    <div class="carousel-item">
      <h1 class="text-center" style="font-family: 'Bebas Neue', cursive">CSS Linter</h1>
      <img src="images/css_linter.gif" class="d-block w-100" alt="project-gif">
    </div>
    <div class="carousel-item">
    <h1 class="text-center" style="font-family: 'Bebas Neue', cursive">TV Guide</>
      <img src="images/tv_maze.gif" class="d-block w-100" alt="project-gif">
    </div>
    <div class="carousel-item">
    <h1 class="text-center" style="font-family: 'Bebas Neue', cursive">Newsweek Clone</>
      <img src="images/newsweek.gif" class="d-block w-100" alt="project-gif">
    </div>
    <div class="carousel-item">
    <h1 class="text-center" style="font-family: 'Bebas Neue', cursive">Rental House Website</>
      <img src="images/rental.gif" class="d-block w-100" alt="project-gif">
    </div>
    <div class="carousel-item">
    <h1 class="text-center" style="font-family: 'Bebas Neue', cursive">Score Board</>
      <img src="images/leaderboard.gif" class="d-block w-100" alt="project-gif">
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="btn-dark carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="btn-dark carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`;
  });

  projects.addEventListener('mouseleave', () => {
    setTimeout(() => {
      projects.innerHTML = `<p class="text-projects">PROJECTS.</p>`;
    }, 500);
  });

  const form = document.querySelector('form');
  const message = document.querySelector('.message');
  const closeMessage = document.querySelector('.cross');
  const cover = document.querySelector('.cover');

  message.addEventListener('click', () => {
    form.style.display = 'flex';
    cover.classList.remove('d-none');
  });

  closeMessage.addEventListener('click', () => {
    form.style.display = 'none';
    cover.classList.add('d-none');
  });
});
