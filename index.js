const proyectosContainer = document.getElementById("proyectosContainer");
const aside = document.getElementsByTagName("aside")[0];

const getTecnologias = (tecnologias) => {
  let res = "";
  tecnologias.forEach((tecnologia) => {
    res += `<span class='tecnologia'>${tecnologia}</span> `;
  });
  return res;
};

const getProyecto = (proyecto) => `
  <img src='img/proyectos/${proyecto.imagen}' alt='${proyecto.titulo} loading="lazy"' class="no-print">
  <div>
    <h3>${proyecto.titulo}</h3>
    <p>${proyecto.descripcion}</p>
    <p>Tecnologías: ${getTecnologias(proyecto.tecnologias)}</p>
  </div>

  <a ${proyecto.link ? 'href='+proyecto.link : "class='disabled no-print'"} target="_blank" class="no-print">Ver proyecto</a>
`;

const makePresentacion = () => {
  const nuevaPresentación = document.createElement("div");
  nuevaPresentación.classList = "presentacion";
  nuevaPresentación.innerHTML +=`
    <img src="${informacionPersonal.imagen}">
  `
  // nuevaPresentación.innerHTML += `
  // <h2>${informacionPersonal.nombre}<h2>
  // `
  informacionPersonal.otros.forEach(dato => {
    nuevaPresentación.innerHTML += `
    <div>
      <span>${dato[0]}:</span>
      <span>${dato[1]}</span>
    </div>
    `
  })
  aside.appendChild(nuevaPresentación);
}

const makeIdiomas = () => {
  const nuevoIdiomas = document.createElement("div");
  nuevoIdiomas.classList = "idiomas";
  informacionPersonal.idiomas.forEach(dato => {
    nuevoIdiomas.innerHTML += `
    <div>
      <span>${dato[0]}:</span>
      <span>${dato[1]}</span>
    </div>
    `
  })
  aside.appendChild(nuevoIdiomas);
}

const makeTecnologias = () => {
  const nuevoTecnologias = document.createElement("div");
  nuevoTecnologias.id = "tecnologias";
  nuevoTecnologias.innerHTML += `<span>Tecnologías: </span>`
  informacionPersonal.tecnologias.forEach(dato => {
    nuevoTecnologias.innerHTML += `
    <div class="no-print">
      <span>${dato[0]}</span>
      <span>${dato[1]}</span>
    </div>
      <progress max="10" value="${dato[1]}" class="no-print">
    `
    nuevoTecnologias.innerHTML += `
    <span>${dato[0]}</span>
    `
  })
  aside.appendChild(nuevoTecnologias);
}

const makeRedes = () => {
  const nuevoRedes = document.createElement("div");
  nuevoRedes.id = "redes";
  informacionPersonal.redes.forEach(dato => {
    if(dato[1]!== ""){
      nuevoRedes.innerHTML += `
      <a href=${dato[1]} target="_blank" class="no-print">
        <img src=${getIconoRed(dato[0])}>
      </a>
      `
      nuevoRedes.innerHTML += `
      <p target="_blank" class="only-print">
        ${dato[0]}: ${dato[1]}
      </p>
      `
    }
    })
  aside.appendChild(nuevoRedes);
}

const getIconoRed = (red)=>{
  const urlBase = "img/iconos/";
  switch(red){
    case "Instagram":
      return urlBase+"instagram.svg";
    case "Linkedin":
      return urlBase+"linkedin.svg";
    case "Facebook":
      return urlBase+"square-facebook.svg";
    case "Twitter":
      return urlBase+"twitter.svg";
    case "Youtube":
      return urlBase+"youtube.svg";
    case "Github":
      return urlBase+"github.svg";
    default:
      return urlBase+"globe-solid.svg";
  }
}

//Ejecución
makePresentacion();
makeIdiomas();
makeTecnologias();
makeRedes();
proyectos.forEach((proyecto) => {
  const nuevoProyecto = document.createElement("div");
  nuevoProyecto.classList = "proyecto tarjeta";
  nuevoProyecto.innerHTML = getProyecto(proyecto);
  proyectosContainer.appendChild(nuevoProyecto);
});