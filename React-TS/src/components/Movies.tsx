import { Box, Button, Chip, PropTypes, TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import {ThemeContext} from "../contexts/ThemeContext";

const useStyles = makeStyles((theme: Theme) => createStyles({
    movieInput: {
        marginRight: '5px',

    },
    movieChip:{
        fontSize: '2rem',
        margin: '5px',
        padding: '30px 10px'

    }
}))

const Movies = () => {
    const [movie, setMovie] = useState("");
    const classes = useStyles();
    const {theme} = useContext(ThemeContext)
    const chipTheme = theme as Exclude<PropTypes.Color, 'inherit'>
    const { movies, addMovie, deleteMovie } = useContext(MovieContext)
   
    return (
        <>
            <Box display="flex" justifyContent="center" my={5}>
                <TextField variant="outlined" label="Your favourite movie..." className={classes.movieInput} onChange={(e) => setMovie(e.target.value)} value={movie} />
                <Button variant="contained" color={chipTheme} onClick={() => { addMovie(movie); setMovie("") }}>Add movie</Button>
            </Box>
            <Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}> 
                {
                    movies.map(movie =>(
                        <Chip key={movie.id} label={movie.title} clickable color={chipTheme} className={classes.movieChip} onDelete={()=>deleteMovie(movie.id)}/>
                    ))
                }
            </Box>
        </>
    )
}

export default Movies;
