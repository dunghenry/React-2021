import { AppBar, Box, FormControl, MenuItem, Select, Toolbar, Typography, Button, Chip } from "@material-ui/core";
import React, { useState, useEffect, useContext} from "react";
import Welcome from './Welcome';
import moment from "moment";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import {ProgressContext} from "../contexts/ProgressContext";
import { ThemeContext } from "../contexts/ThemeContext";

const useStyles = makeStyles((theme: Theme) => createStyles({
    titleSelect: {
        color: 'white',
        borderBottom: '1px solid white'
    }
}))
const Navbar = () => {
    const classes = useStyles()
    const [title, setTitle] = useState<string>(`React-TS`);
    const [time, setTime] = useState<Date>(() => new Date(Date.now()));
    const {lastTime, status} = useContext(ProgressContext);
    const {theme} = useContext(ThemeContext);

    // console.log(lastTime, status);
    const handleTitle = (e: any) =>{
        setTitle(e.target.value)
    }

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date(Date.now())), 1000)
        return () =>{
            clearInterval(timer)
        }
    }, [])
    return (
        <AppBar position="static" color={theme}>
            <Toolbar>
                <Box display="flex" justifyContent="space-between" alignItems="center" width={1} py={2}>
                    <Typography variant="h6">My movies</Typography>
                    <Box textAlign="center">
                        <Welcome title={title} />
                        <Chip label={`Last time working project: ${lastTime} - Status: ${status}`} />
                        <Box mt={1}>
                            <FormControl>
                                <Select
                                    value={title}
                                    onChange={handleTitle}
                                    className={classes.titleSelect}
                                >
                                    <MenuItem value={title}>
                                        <>{title}</>
                                    </MenuItem>
                                    <MenuItem value="React">React</MenuItem>
                                    <MenuItem value="Vue">Vue</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    <Box textAlign="center">
                        <Box my={1}>
                            <Typography variant="h5">
                                {moment(time).format('LTS')}
                            </Typography>
                        </Box>
                        <Button variant="contained">Login</Button>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
