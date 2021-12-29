import './style.css';

const testFunc = () => {
  const div = document.createElement('div');
  div.setAttribute('style', 'font-size:3em;text-align:center;margin-top:50vh;');
  div.innerText = 'Webpack Template';
  document.body.append(div);
};

testFunc();
