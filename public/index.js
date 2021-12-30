window.addEventListener('DOMContentLoaded', (event) => {
  const about = document.querySelector('.about');
  about.addEventListener('mouseenter', () => {
    const textAbout = document.querySelector('.text-about');
    textAbout.style.fontSize = '2vw';
    textAbout.style.padding = '0.3em';
    textAbout.style.textAlign = 'start';
    textAbout.innerHTML = `
            <span>Currently :</span></br></br>
            <span>
              Studying in Microverse full-stack development school.
            </span></br>
            <span>
              Practicing Javascript, React, Ruby, Rails, and Agile
              methodologies.
            </span></br></br>
            <span>Formerly :</span></br></br>
            <span>Former technical customer support team lead.</span></br>
            <span>
              Performed different roles in various industries.
            </span></br>
            <span>( Tourism, Logistics, Aviation e-Learning ).</span>`;
  });

  about.addEventListener('mouseout', () => {
    about.innerHTML = `<p class="text-about">ABOUT.</p>`;
  });
});
