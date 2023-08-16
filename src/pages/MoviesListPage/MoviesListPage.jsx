import MovieCard from "../../components/MovieCard/MovieCard"

export default function MoviePage(props) {
  return (
    <div className="container">
      {
        props.movies.map(movie => {
          return <MovieCard key={movie.title} movie={movie} />
        })
      }
    </div>
  )
}