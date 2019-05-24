
const apiKey = "a62c1b6c10babde2206b6dab88c018a0";

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
          document.querySelector("#sec-popular").onclick = function (){
            
          }
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
  console.log("hola");
  
 
  






}

                       //para displeynonear secciones ul.style.display = "none";