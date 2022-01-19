import {createContext, ReactNode, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

interface MovieContextProviderProps{
    children: ReactNode
}

interface Movie{
    id: string
    title: string
}

interface movieContexDefault{
    movies: Movie[]
    addMovie: (title: string) => void
    deleteMovie: (id: string) => void
}

const movieContextDefaultData = {
    movies: [],
    addMovie: () => {},
    deleteMovie: () => {}
}

export const MovieContext = createContext<movieContexDefault>(movieContextDefaultData)

const MovieContextProvider = ({children}: MovieContextProviderProps) =>{
    const [movies, setMovies] = useState<Movie[]>(movieContextDefaultData.movies);
    const addMovie = (title: string) =>{
        if(title !== ""){
            setMovies([...movies, {id: uuidv4(), title: title}])
        }
        
    }
    const deleteMovie = (id: string) =>{
        setMovies(movies.filter((movie) => movie.id !== id))
    }
    const movieContextDynamicData = {movies, addMovie, deleteMovie}

    return(
        <MovieContext.Provider value={movieContextDynamicData}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;