

// metodos de búsqueda:

// --> A) starsWith:
// "avengers".starsWith("ave") true or false esto valida elcomienzo de lo que el usuario escribe
// const moviesFiltered = movie

// .filter (movie => movie.Title.toLowerCase().starsWith(movieName.toLowecase())
// console.log(moviesFiltered)



// --> B) includes:
// me devuelve true or false si incluye algun pedazo de texto de ese parámetro de mini texto que yo le paso
// const moviesFiltered = movie

// .filter (movie => movie.Title.toLowerCase().includes(movieName.toLowecase())
// console.log(moviesFiltered)


// --> C) find:
// me devuelve el primer ejemplo que coincide con la condición
// const movie = movies

// .find (movie => movie.Title.toLowerCase().includes(movieName.toLowecase())
// console.log(movies)
// if (movie){
//    title.innerText = movie.Title;
//    rated.innerText = movie.Rated;
//    y así con todas las cosas a completar de la web.
// }


// Para pedir datos de una api en js se usa FETCH

// const prom = fetch("https://jsonplaceholder.typicode.com/todos") el primer parámetro es la url de la api
// el objeto que devuelve se le llama promise
// el promise tiene metodos
// la función pasada como parámetro se ejecuta cuando se comple la promesa
// "ok yo me quedo esperando, cuando llegue ese moemnto, ejecutá esta función una vez que te hayas completado"


// estructura convencional para pegar a la api:
// prom
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then( res => res.json() );
// .then( data => { console.log(data);
// acá implementamos el código que necesitamos para usar los datos.
// en el caso del ejercicio, actualizamos el DOM, ej:

// const ul = document.querySelector("ul");
// ul.innerHTML = data.map(todo => `<li> ${todo.title} - ${todo.completed} </li>`).join("")) el join une todos los elementos en un string, sino me salta 
// object object

//} )

// PARÁMETROS DE LAS APIS

// apikey = 121546&t se separan por & los parametros
// por ejemplo buscamos ‘avengers’ `https://www.omdbapi.com/?apikey=2fb7569a&t=avengers`
// cada busqueda es un fetch distinto


// MODIFICACIÓN DEL DOM CON LA API DE PELIS POSTA

input.addEventListener('keypress', function (event) {

    // pregunto si la persona presionó la tecla enter
 
    if (event.keyCode === 13) {
        event.preventDefault();
 
      // guardo el valor que la persona ingreso en el input
 
      const movieName = input.value;      
      fetch(`https://www.omdbapi.com/?apikey=2fb7569a&t=${movieName}`)      
      .then(res => res.json())
      .then(movie =>{
 
        if (movie) {
 
          title.innerText = movie.Title;
 
          rated.innerText = movie.Rated;
 
          year.innerText = movie.Year;
 
          genre.innerText = movie.Genre;
 
          description.innerText = movie.Plot;
 
          writtenBy.innerText = movie.Writer;
 
          directedBy.innerText = movie.Director;
 
          starring.innerText = movie.Actors;         
          
          image.src = movie.Poster;
 
        }      
    })

}

}



fetch()
.then(res => res.json())
.the (movies => {
  const pelis = movies.map( movies =>{
    return "<li>
    <img src="${dia""
  })
})


.slice (0,5) para que me queden 5 elementos