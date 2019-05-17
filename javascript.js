
const apiKey = "a62c1b6c10babde2206b6dab88c018a0";

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
      

      