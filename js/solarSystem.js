
// 1920 = 97.6 = 100%
// 19,20 = 0.976 = 1%
// 
let sizeWindowWidth = window.innerWidth;;
let calcWindowSize = sizeWindowWidth / 19.20;

let sizeBorderCalc = calcWindowSize * 0.916;
let sizeSpaceBorderCalc = calcWindowSize * 0.090;


const planets = [
  {
    name: 'pluto',
    width: 3.64,
    height: 3.67,
    alt: 'Planeta Anão Plutão',
    veloc: 7376 / 5.2
  },
  {
    name: 'neptune',
    width: 5.04,
    height: 5.04,
    alt: 'Planeta Netuno',
    veloc: 4537 / 5.2
  },
  {
    name: 'uranus',
    width: 5.44,
    height: 5.44,
    alt: 'Planeta Urano',
    veloc: 3006 / 5.2
  },
  {
    name: 'saturn',
    width: 10.14,
    height: 8.56,
    alt: 'Planeta Saturno',
    veloc: 1503 / 5.2
  },
  {
    name: 'jupiter',
    width: 7.47,
    height: 7.47,
    alt: 'Planeta Jupiter',
    veloc: 816 / 5.2
  },
  {
    name: 'marte',
    width: 4.37,
    height: 4.37,
    alt: 'Planeta Marte',
    veloc: 249 / 5.2
  },
  {
    name: 'terra',
    width: 5.24,
    height: 5.24,
    alt: 'Planeta Terra',
    veloc: 152 / 5.2
  },
  {
    name: 'venus',
    width: 4.55,
    height: 4.55,
    alt: 'Planeta Venus',
    veloc: 108 / 5.2
  },
  {
    name: 'mercurio',
    width: 3.75,
    height: 3.75,
    alt: 'Planeta Mercurio',
    veloc: 69 / 5.2
  },
]

let mainContainer = document.querySelector('.estiloModificadoPorJs');
let topPlanet = [];
let leftPlanet = [];
let sizeBorderPlanets = [sizeBorderCalc];

// Criação de toda a construção do sistema Solar
planets.filter((planet, index) => {
  let containerSolarSystem = document.querySelector('.solarContainer');

  let containerDiv = document.createElement('div');
  let contentDiv = document.createElement('div');
  let img = document.createElement('img');


  contentDiv.appendChild(img)
  containerDiv.appendChild(contentDiv);
  containerSolarSystem.appendChild(containerDiv);

  
  containerDiv.className = `containerCircle container${planet.name}Circle`
  contentDiv.className = `containerPlanets container${planet.name}`
  img.className = `planet${planet.name}`
  img.src = `./assets/planets/${planet.name}.svg`
  img.alt = `${planet.alt}`


  if(index > 0) {
    sizeBorderPlanets[index] = sizeBorderPlanets[index-1] - sizeSpaceBorderCalc;
  }
  
  leftPlanet[index] = planet.width / 2;
  topPlanet[index] = planet.height / 2;
  containerDiv.style.width = `${sizeBorderPlanets[index].toFixed(1)}rem`;
  containerDiv.style.height = `${sizeBorderPlanets[index].toFixed(1)}rem`;
  
  img.style.width = `${planet.width}rem`;
  img.style.height = `${planet.height}rem`;
  img.style.left = `-${leftPlanet[index].toFixed(2)}rem`;
  img.style.top = `-${topPlanet[index].toFixed(2)}rem`;
  img.style.position = 'absolute';
  

  let planetsAnimation = document.querySelector(`.container${planet.name}`);

  planetsAnimation.style.animation = `spin ${planet.veloc}s linear infinite`;
  planetsAnimation.style.webkitAnimation = `spin ${planet.veloc}s linear infinite`;
  planetsAnimation.style.mozAnimation = `spin ${planet.veloc}s linear infinite`;
  planetsAnimation.style.rotate = `${planet.veloc / 2}deg`;

})

// Responsividade
if(sizeWindowWidth < 1600) {


  // Tamanho dos Planetas
  let decreasingValue = 28;

  planets.filter((planet, index) => {
    let img = document.querySelector(`.planet${planet.name}`);
    let newWidth = (planet.width - ((planet.width / 100) * decreasingValue)).toFixed(2);
    let newHeight = (planet.height - ((planet.height / 100) * decreasingValue)).toFixed(2);
    let newLeft = (newWidth / 2).toFixed(2);
    let newTop = (newHeight / 2).toFixed(2);

    img.style.width = `${newWidth}rem`;
    img.style.height = `${newHeight}rem`;
    img.style.left = `-${newLeft}rem`;
    img.style.top = `-${newTop}rem`;
  })
}


