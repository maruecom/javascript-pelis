
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


/*document.getElementById("sec-popular").addEventListener('onclick', function (event){
 

  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${1}`)
  .then(res => res.json())
        .then(data =>{ console.log(data); 
  
          const movie = data.results;
          
  const ocultar = document.getElementsByClassName("batman");
  ocultar.classList.add("desaparece");
        
          
         
  
          for (let i = 0; i < movie.length; i++) {
            if(i < 20){
              div.innerHTML += `<div class="peli"><img src="https://image.tmdb.org/t/p/original${movie[i].poster_path}">
              <h1 class="titu-peli">${movie[i].original_title}</h1></div>`
            }
            
          }
            
        
        })

}
*/


  

                       //para displeynonear secciones ul.style.display = "none";