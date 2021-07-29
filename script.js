let menuIcon = document.querySelector(".menuIcon");
let menu = document.querySelector(".hidden");
let closeIcon = document.querySelector(".closeIcon");
let menuItem1 = document.querySelector("#menuItem1");
let menuItem2 = document.querySelector("#menuItem2");
let menuItem3 = document.querySelector("#menuItem3");

menuIcon.addEventListener("click", () => {
  menu.classList.add("menu");
  menu.classList.remove("hidden");
});

closeIcon.addEventListener("click", () => {
  menu.classList.remove("menu");
  menu.classList.add("hidden");
});

menuItem1.addEventListener("click", () => {
  menu.classList.remove("menu");
  menu.classList.add("hidden");
});

menuItem2.addEventListener("click", () => {
  menu.classList.remove("menu");
  menu.classList.add("hidden");
});

menuItem3.addEventListener("click", () => {
  menu.classList.remove("menu");
  menu.classList.add("hidden");
});

const portfolio = document.querySelector('#portfolio');

const body = document.body;
  const article = document.createElement('article');
    const div0 = document.createElement('div');
      const div1 = document.createElement('div');
        const div2 = document.createElement('div');
          const h3 = document.createElement('h3');
          const i0 = document.createElement('i');
        const img0 = document.createElement('img');
        const p0 = document.createElement('p');
      const ul = document.createElement('ul');
        const li0 = document.createElement('li');
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');
        const li3 = document.createElement('li');
      const button0 = document.createElement('button');
        const p1 = document.createElement('p');
        const a1 = document.createElement('a');
          const i1 = document.createElement('i');
      const button1 = document.createElement('button');
        const p2 = document.createElement('p');
        const a2 = document.createElement('a');
          const img1 = document.createElement('img');



let names = ['Multi-Post Stories', 'Multi-Post Stories', 'Multi-Post Stories', 'Multi-Post Stories'];
let images = [
  'https://picsum.photos/684/448?grayscale',
  'https://picsum.photos/684/448?grayscale',
  'https://picsum.photos/684/448?grayscale',
  'https://picsum.photos/684/448?grayscale'];
let descriptions = [
  'I really dont want to input such a long text into an array, I think it makes the code look awfull, but it\'s a requirement so I guess I\'ll just do it and don\'t complain about it cause I\'m already waaaay too delayed with this project; also, writing this text helps me practice my touchtyping so I guess that is a silverlining of all of this, anyway, I hate to write paragraphs in arrays :)',
  'I really dont want to input such a long text into an array, I think it makes the code look awfull, but it\'s a requirement so I guess I\'ll just do it and don\'t complain about it cause I\'m already waaaay too delayed with this project; also, writing this text helps me practice my touchtyping so I guess that is a silverlining of all of this, anyway, I hate to write paragraphs in arrays :)',
  'I really dont want to input such a long text into an array, I think it makes the code look awfull, but it\'s a requirement so I guess I\'ll just do it and don\'t complain about it cause I\'m already waaaay too delayed with this project; also, writing this text helps me practice my touchtyping so I guess that is a silverlining of all of this, anyway, I hate to write paragraphs in arrays :)',
  'I really dont want to input such a long text into an array, I think it makes the code look awfull, but it\'s a requirement so I guess I\'ll just do it and don\'t complain about it cause I\'m already waaaay too delayed with this project; also, writing this text helps me practice my touchtyping so I guess that is a silverlining of all of this, anyway, I hate to write paragraphs in arrays :)'];
let technologies = ['flash', 'html', 'jS', 'css', 'Ruby on Rails', 'bootstrap'];
let liveLinks = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ'];
let sourceLinks = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ'];

function popUp(id) {

  body.append(article);

  article.append(div0);

  div0.append(div1, ul, button0, button1);

  div1.append(div2, img0, p0);

  div2.append(h3, i0);

  ul.append(li0, li1, li2);

  button0.append(p1, a1);

  a1.append(i1);

  button1.append(p2, a2);

  a2.append(img1);


  article.setAttribute('class', 'backdrop');
  div0.setAttribute('class', 'container popUp');
  div1.setAttribute('class', 'popUp-content');
  div2.setAttribute('class', 'container popUp-titleContainer');
  h3.setAttribute('class', 'popUp-title');
  i0.setAttribute('class', 'material-icons closeIcon');
  i0.setAttribute('onclick', 'article.remove()');
  img0.setAttribute('src', images[id]);
  img0.setAttribute('alt', 'placeholder');
  ul.setAttribute('class', 'container languages');
  button0.setAttribute('class', 'popUp-button');
  a1.setAttribute('href', liveLinks[id]);
  i1.setAttribute('class', 'material-icons');
  button1.setAttribute('class', 'popUp-button');
  a2.setAttribute('href', sourceLinks[id]);
  img1.setAttribute('src', 'media/icons/github.svg');
  img1.setAttribute('alt', 'github');

  h3.textContent = names[id];
  i0.textContent = 'close';
  p0.textContent = descriptions[id];
  li0.textContent = technologies[id];
  li1.textContent = technologies[id];
  li2.textContent = technologies[id];
  p1.textContent = 'See Live';
  i1.textContent = 'stream';
  p2.textContent = 'See Source';
}

function project(name, img, description, tech0, tech1, tech2, tech3, buttonId) {

  const article = document.createElement('article');
    const div0 = document.createElement('div');
          const h3 = document.createElement('h3');
        const img0 = document.createElement('img');
        const p0 = document.createElement('p');
      const ul = document.createElement('ul');
        const li0 = document.createElement('li');
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');
        const li3 = document.createElement('li');
      const button0 = document.createElement('button');

  portfolio.append(article);

  article.append(img0, div0);

  div0.append(h3, p0, ul, button0);

  ul.append(li0, li1, li2, li3);

  article.setAttribute('class', 'container project');
  img0.setAttribute('src', img);
  img0.setAttribute('alt', 'project picture');
  div0.setAttribute('class', 'container project-text');
  ul.setAttribute('class', 'container languages');
  button0.setAttribute('id', buttonId)
  button0.setAttribute('onclick', 'popUp(this.id)');

  h3.textContent = name;
  p0.textContent = description;
  li0.textContent = tech0;
  li1.textContent = tech1;
  li2.textContent = tech2;
  li3.textContent = tech3;
  button0.textContent = 'See Project';
}

for (let i = 0; i < names.length; i++) {
  project(names[i], images[i], descriptions[i], technologies[0], technologies[1], technologies[2], technologies[3], i);
}