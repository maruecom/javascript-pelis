
const apiKey = "a62c1b6c10babde2206b6dab88c018a0";



/*

function todosFetch (api, peli) {
  fetch(api)
  .then(res =>res.json())
  .then(data => { console.log(data);
  
     
const movie = data.results;
console.log(movie);
const div = document.getElementById(`.${peli} .cont-peli`);

     for (let i= 0; i<indice.length; i++){
       if(i<5){
         div.innerHTML +=`<div class="cajita"> <img src="https://image.tmdb.org/t/p/original${indice[i].poster_path}" alt=""></div>`;
       }
     }

     })

}


// --> POPULAR
todosFetch (`http://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`, 'pelicula');
// --> TOP RATED
todosFetch (`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`, 'pelicula2')
// --> UP COMING
todosFetch (`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`, 'pelicula3')
// --> NOW PLAYING
todosFetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`, 'pelicula4')*/








// imprimo las 5 primera pelis de la sección popular

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
.then(res => res.json())
      .then(data =>{ console.log(data); 

        const movie = data.results;
        console.log(movie);
        
        const div = document.getElementById("pelicula");

        for (let i = 0; i < movie.length; i++) {
          if(i < 5){
            div.innerHTML += `<div class="peli"><img src="https://image.tmdb.org/t/p/original${movie[i].poster_path}">
            <h1 class="titu-peli">${movie[i].original_title}</h1></div>`
          }
          
        }
          
      
      })

// imprimo las 5 primera pelis de la sección top rated


      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
      .then(res => res.json())
            .then(data =>{ console.log(data); 
      
              const movie = data.results;
              console.log(movie);
              
              const div = document.getElementById("pelicula2");
      
              for (let i = 0; i < movie.length; i++) {
                if(i < 5){
                  div.innerHTML += `<div class="peli"><img src="https://image.tmdb.org/t/p/original${movie[i].poster_path}">
                  <h1 class="titu-peli">${movie[i].original_title}</h1></div>`
                }
                
              }
                
            
            })

            
// imprimo las 5 primera pelis de la sección upcoming


            fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
            .then(res => res.json())
                  .then(data =>{ console.log(data); 
            
                    const movie = data.results;
                    console.log(movie);
                    
                    const div = document.getElementById("pelicula3");
            
                    for (let i = 0; i < movie.length; i++) {
                      if(i < 5){
                        div.innerHTML += `<div class="peli"><img src="https://image.tmdb.org/t/p/original${movie[i].poster_path}">
                        <h1 class="titu-peli">${movie[i].original_title}</h1></div>`
                      }
                      
                    }
                      
                  
                  })
 


// imprimo las 5 primera pelis de la sección now playing


                  fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
                  .then(res => res.json())
                        .then(data =>{ console.log(data); 
                  
                          const movie = data.results;
                          console.log(movie);
                          
                          const div = document.getElementById("pelicula4");
                  
                          for (let i = 0; i < movie.length; i++) {
                            if(i < 5){
                              div.innerHTML += `<div class="peli"><img src="https://image.tmdb.org/t/p/original${movie[i].poster_path}">
                              <h1 class="titu-peli">${movie[i].original_title}</h1></div>`
                            }
                            
                          }
                            
                        
                        })

// aprieto boton lateral popular



document.querySelector("#sec-popular").onclick = function (){
 
  const ocultar = document.getElementsByClassName("batman")[0].classList.add("desaparece");
  const ocultarDos = document.querySelector("#see-allDos").classList.add("desaparece");
  const ocultarDosA = document.querySelector("#see-allTres").classList.add("desaparece");
  const ocultarDosB = document.querySelector("#see-allCuatro").classList.add("desaparece");
  const ocultarTres = document.getElementById("pelicula2").classList.add("desaparece");
  const ocultarCuatro = document.getElementById("pelicula3").classList.add("desaparece");
  const ocultarCinco= document.getElementById("pelicula4").classList.add("desaparece");
  const popu = document.getElementById("pelicula").classList.remove("desaparece");

  
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
  .then(res => res.json())
        .then(data =>{ console.log(data); 
  
          const movie = data.results;
          const div = document.getElementById("pelicula");
  
          for (let i = 5; i < movie.length; i++) {
            if(i < 20){
              div.innerHTML += `<div class="peli"><img src="https://image.tmdb.org/t/p/original${movie[i].poster_path}">
              <h1 class="titu-peli">${movie[i].original_title}</h1></div>`
             
            }
            
            
          }
            
          const boton = document.createElement ("button");
          const papaBoton = document.querySelector("#pelicula");
          papaBoton.appendChild(boton);
          boton.innerHTML = "LOAD MORE";
          boton.classList.add("boton");
          document.querySelector("#sec-popular").onclick = function (){};

          
        })



        
}


// aprieto boton lateral top rated



document.querySelector("#sec-top").onclick = function (){
 
  const ocultar = document.getElementsByClassName("batman")[0].classList.add("desaparece");
  const ocultarDos = document.querySelector("#see-allUno").classList.add("desaparece");
  const ocultarDosA = document.querySelector("#see-allTres").classList.add("desaparece");
  const ocultarDosB = document.querySelector("#see-allCuatro").classList.add("desaparece");
  const ocultarTres = document.getElementById("pelicula").classList.add("desaparece");
  const ocultarCuatro = document.getElementById("pelicula3").classList.add("desaparece");
  const ocultarCinco= document.getElementById("pelicula4").classList.add("desaparece");
  const popu2 = document.getElementById("pelicula2").classList.remove("desaparece");
  
 
  

 

  
  fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
  .then(res => res.json())
        .then(data =>{ console.log(data); 
  
          const movie = data.results;
          const div = document.getElementById("pelicula2");
  
          for (let i = 5; i < movie.length; i++) {
            if(i < 20){
              div.innerHTML += `<div class="peli"><img src="https://image.tmdb.org/t/p/original${movie[i].poster_path}">
              <h1 class="titu-peli">${movie[i].original_title}</h1></div>`
             
            }
            
            
          }
            
          const boton = document.createElement ("button");
          const papaBoton = document.querySelector("#pelicula2");
          papaBoton.appendChild(boton);
          boton.innerHTML = "LOAD MORE";
          boton.classList.add("boton");
          document.querySelector("#sec-top").onclick = function (){
            
          }
        })

}


// aprieto boton lateral up coming



document.querySelector("#sec-up").onclick = function (){
 
  const ocultar = document.getElementsByClassName("batman")[0].classList.add("desaparece");
  const ocultarDos = document.querySelector("#see-allUno").classList.add("desaparece");
  const ocultarDosA = document.querySelector("#see-allDos").classList.add("desaparece");
  const ocultarDosB = document.querySelector("#see-allCuatro").classList.add("desaparece");
  const ocultarTres = document.getElementById("pelicula").classList.add("desaparece");
  const ocultarCuatro = document.getElementById("pelicula2").classList.add("desaparece");
  const ocultarCinco= document.getElementById("pelicula4").classList.add("desaparece");
  const popu3 = document.getElementById("pelicula3").classList.remove("desaparece");
  
    

  
  fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
  .then(res => res.json())
        .then(data =>{ console.log(data); 
  
          const movie = data.results;
          const div = document.getElementById("pelicula3");
  
          for (let i = 5; i < movie.length; i++) {
            if(i < 20){
              div.innerHTML += `<div class="peli"><img src="https://image.tmdb.org/t/p/original${movie[i].poster_path}">
              <h1 class="titu-peli">${movie[i].original_title}</h1></div>`
             
            }
            
            
          }
            
          const boton = document.createElement ("button");
          const papaBoton = document.querySelector("#pelicula3");
          papaBoton.appendChild(boton);
          boton.innerHTML = "LOAD MORE";
          boton.classList.add("boton");
          document.querySelector("#sec-up").onclick = function (){
            
          }
        })

}



// aprieto boton lateral now playing



document.querySelector("#sec-now").onclick = function (){
 

  const ocultar = document.getElementsByClassName("batman")[0].classList.add("desaparece");
  const ocultarDos = document.querySelector("#see-allUno").classList.add("desaparece");
  const ocultarDosA = document.querySelector("#see-allTres").classList.add("desaparece");
  const ocultarDosB = document.querySelector("#see-allDos").classList.add("desaparece");
  const ocultarTres = document.getElementById("pelicula").classList.add("desaparece");
  const ocultarCuatro = document.getElementById("pelicula3").classList.add("desaparece");
  const ocultarCinco= document.getElementById("pelicula2").classList.add("desaparece");
  const popu4 = document.getElementById("pelicula4").classList.remove("desaparece");
 

  
  fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
  .then(res => res.json())
        .then(data =>{ console.log(data); 
  
          const movie = data.results;
          const div = document.getElementById("pelicula4");
  
          for (let i = 5; i < movie.length; i++) {
            if(i < 20){
              div.innerHTML += `<div class="peli"><img src="https://image.tmdb.org/t/p/original${movie[i].poster_path}">
              <h1 class="titu-peli">${movie[i].original_title}</h1></div>`
             
            }
            
            
          }
            
          const boton = document.createElement ("button");
          const papaBoton = document.querySelector("#pelicula4");
          papaBoton.appendChild(boton);
          boton.innerHTML = "LOAD MORE";
          boton.classList.add("boton");
          document.querySelector("#sec-now").onclick = function (){
            
          }
        })

}


document.getElementById("logo").onclick = function (){
 
  const botonesMobile = document.querySelector(".modal-mobile").classList.remove("desaparece");
  const ocultar = document.getElementsByClassName("batman")[0].classList.add("desaparece");
  const ocultarDos = document.querySelector("#see-allUno").classList.remove("desaparece");
  const ocultarDosA = document.querySelector("#see-allTres").classList.add("desaparece");
  const ocultarDosB = document.querySelector("#see-allCuatro").classList.add("desaparece");
  const ocultarTres = document.getElementById("pelicula").classList.remove("desaparece");
  const ocultarCuatro = document.getElementById("pelicula3").classList.add("desaparece");
  const ocultarCinco= document.getElementById("pelicula4").classList.add("desaparece");
  const popu = document.getElementById("pelicula2").classList.add("desaparece");
 

}



// buscador pelis input

/*
const input = document.querySelector('.buscador-search-input');
const title = document.querySelector('.movie-info .title');
const rated = document.querySelector('#rated');
const year = document.querySelector('#year');
const genre = document.querySelector('#genre');
const description = document.querySelector('.movie-info .description');
const writtenBy = document.querySelector('.movie-info .written-by span');
const directedBy = document.querySelector('.movie-info .directed-by span');
const starring = document.querySelector('.movie-info .starring span');
const image = document.querySelector('#movie .foto img');
const poster = document.querySelector('.poster-blur img' );

input.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        const movieName = input.value;
        fetch(`https://www.omdbapi.com/?apikey=2fb7569a&t=${movieName}`)
            .then(res => res.json())
            .then(movie => {
              console.log("hola");
              
                title.innerText = movie.Title;
                rated.innerText = movie.Rated;
                year.innerText = movie.Year;
                genre.innerText = movie.Genre;
                description.innerText = movie.Plot;
                writtenBy.innerText = movie.Writer;
                directedBy.innerText = movie.Director;
                starring.innerText = movie.Actors;
                image.src = movie.Poster;
                poster.src = movie.Poster;
            })
    }
});*/

// Menú hamburguesa

document.querySelector(".fas.fa-bars").onclick = function (){
  
  const botonesMobile = document.querySelector(".modal-mobile").classList.remove("desaparece");
  const ocultar = document.getElementsByClassName("batman")[0].classList.add("desaparece");
  const ocultarDos = document.querySelector("#see-allDos").classList.add("desaparece");
  const ocultarDosA = document.querySelector("#see-allTres").classList.add("desaparece");
  const ocultarDosB = document.querySelector("#see-allCuatro").classList.add("desaparece");
  const ocultarTres = document.getElementById("pelicula2").classList.add("desaparece");
  const ocultarCuatro = document.getElementById("pelicula3").classList.add("desaparece");
  const ocultarCinco= document.getElementById("pelicula4").classList.add("desaparece");
  const aparece = document.getElementById("pelicula").classList.remove("desaparece");
  const apareceDos = document.getElementById("see-AllUno").classList.remove("desaparece");
  
  // Selecciono categoría

document.querySelector(".popu").onclick = function (){
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
  .then(res => res.json())
        .then(data =>{  
  
          const movie = data.results;
          const div = document.getElementById("pelicula");
  
          for (let i = 5; i < movie.length; i++) {
            if(i < 20){
              div.innerHTML += `<div class="peli"><img src="https://image.tmdb.org/t/p/original${movie[i].poster_path}">
              <h1 class="titu-peli">${movie[i].original_title}</h1></div>`
             
            }
            
            
          }


          const boton = document.createElement ("button");
          const papaBoton = document.querySelector("#pelicula");
          papaBoton.appendChild(boton);
          boton.innerHTML = "LOAD MORE";
          boton.classList.add("boton");
          document.querySelector("#sec-popular").onclick = function (){
            
          }
}

        )}
  
  
}






        document.querySelector(".fas.fa-bars").onclick = function (){
          const botonesMobile = document.querySelector(".modal-mobile").classList.remove("desaparece");
          const ocultar = document.getElementsByClassName("batman")[0].classList.add("desaparece");
          const ocultarDos = document.querySelector("#see-allUno").classList.add("desaparece");
          const ocultarDosA = document.querySelector("#see-allTres").classList.remove("desaparece");
          const ocultarDosB = document.querySelector("#see-allCuatro").classList.add("desaparece");
          const ocultarTres = document.getElementById("pelicula").classList.add("desaparece");
          const ocultarCuatro = document.getElementById("pelicula3").classList.remove("desaparece");
          const ocultarCinco= document.getElementById("pelicula4").classList.add("desaparece");
          const popu = document.getElementById("pelicula3").classList.remove("desaparece");
          
        }
        
        // Selecciono categoría
        
        document.querySelector(".rated").onclick = function (){
          fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
          .then(res => res.json())
                .then(data =>{ console.log(data); 
          
                  const movie = data.results;
                  const div = document.getElementById("pelicula2");
          
                  for (let i = 5; i < movie.length; i++) {
                    if(i < 20){
                      div.innerHTML += `<div class="peli"><img src="https://image.tmdb.org/t/p/original${movie[i].poster_path}">
                      <h1 class="titu-peli">${movie[i].original_title}</h1></div>`
                     
                    }
                    
                    
                  }
        
                  const botonesMobile = document.querySelector(".modal-mobile").classList.add("desaparece");
        
                  const boton = document.createElement ("button");
                  const papaBoton = document.querySelector("#pelicula2");
                  papaBoton.appendChild(boton);
                  boton.innerHTML = "LOAD MORE";
                  boton.classList.add("boton");
                  document.querySelector("#sec-top").onclick = function (){
                    
                  }
        }
        
                )}   
                
                

                document.querySelector(".now").onclick = function (){
                  fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
                  .then(res => res.json())
                        .then(data =>{ console.log(data); 
                  
                          const movie = data.results;
                          const div = document.getElementById("pelicula3");
                  
                          for (let i = 5; i < movie.length; i++) {
                            if(i < 20){
                              div.innerHTML += `<div class="peli"><img src="https://image.tmdb.org/t/p/original${movie[i].poster_path}">
                              <h1 class="titu-peli">${movie[i].original_title}</h1></div>`
                             
                            }
                            
                            
                          }
                
                          const botonesMobile = document.querySelector(".modal-mobile").classList.add("desaparece");
                
                          const boton = document.createElement ("button");
                          const papaBoton = document.querySelector("#pelicula3");
                          papaBoton.appendChild(boton);
                          boton.innerHTML = "LOAD MORE";
                          boton.classList.add("boton");
                          document.querySelector("#sec-now").onclick = function (){
                            
                          }
                }
                
                        )}                   


// click en pelicula para que aparezca el modal

   document.querySelector("#pelicula").onclick = function (){
     const modal = document.querySelector("#movie-pop").classList.remove("desaparece");

     fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
                  .then(res => res.json())
                        .then(data =>{ console.log(data); 
                  
                          const movie = data.results;
                          const modal = document.getElementById("movie-pop");
                  
                          for(let i=0; i < movie.length; i++ )  {
                            
                            const pelititu = document.querySelector(".peli-titu");
                            pelititu.innerHTML = `<h1 class="peli-titu">${movie[i].original_title}</h1></div>`
                            const sinopsis = document.querySelector(".sinopsis") ;                       
                            sinopsis.innerHTML = `<div class="sinopsis">${movie[i].overview}</div>`
                            const peli = document.querySelector(".peli-foto");
                            peli.innerHTML = `<img class="poster-modal" src=""https://image.tmdb.org/t/p/original${movie[i].poster_path}""></img>`
                          
                           
                            
                          }      

                        } ) }
     
     
     
                        document.querySelector("#cruz").onclick = function (){
                          const modal = document.querySelector("#movie-pop").classList.add("desaparece");
                    
                    
                         }
     
     
                        /*
     
const input = document.querySelector('.buscador-search-input');
const title = document.querySelector('.movie-info .title');
const rated = document.querySelector('#rated');
const year = document.querySelector('#year');
const genre = document.querySelector('#genre');
const description = document.querySelector('.movie-info .description');
const writtenBy = document.querySelector('.movie-info .written-by span');
const directedBy = document.querySelector('.movie-info .directed-by span');
const starring = document.querySelector('.movie-info .starring span');
const image = document.querySelector('#movie .foto img');
const poster = document.querySelector('.poster-blur img' );

input.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        const movieName = input.value;
        fetch(`https://www.omdbapi.com/?apikey=2fb7569a&t=${movieName}`)
            .then(res => res.json())
            .then(movie => {
              console.log("hola");
              
                title.innerText = movie.Title;
                rated.innerText = movie.Rated;
                year.innerText = movie.Year;
                genre.innerText = movie.Genre;
                description.innerText = movie.Plot;
                writtenBy.innerText = movie.Writer;
                directedBy.innerText = movie.Director;
                starring.innerText = movie.Actors;
                image.src = movie.Poster;
                poster.src = movie.Poster;
            })
    }
});*/










//para displeynonear secciones ul.style.display = "none"