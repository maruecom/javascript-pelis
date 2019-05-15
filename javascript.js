
const apiKey = "dc7a4681a677b75449e394ed80e327f8";

fetch(`https://api.themoviedb.org/3/movie/550?api_key=dc7a4681a677b75449e394ed80e327f8=${apiKey}`)
.then(res => res.json())
      .then(data =>{ console.log(data); })
      

      