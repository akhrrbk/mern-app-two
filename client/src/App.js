import React, {useEffect} from 'react'
import {Container, AppBar, Typography, Grow, Grid, Box} from '@mui/material/'
import { useDispatch } from 'react-redux'
import Form from './components/Form/Form'
import Posts from './components/posts/Posts'
import memories from './images/memory.jpg'
import useStyles from './styles'
import {getPosts} from './actions/posts'

const App = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    return (
        <Box>
            <Container>
                <AppBar className={classes.AppBar} position='static' color='inherit'>
                    <Box sx={{display: "flex"}}>
                        <Typography className={classes.heading} variant='h2' align='center' >Memories</Typography>
                        <img
                            className={classes.image}
                            src={memories}
                            alt='memoeries'
                            height={70}
                            width={70}
                        />
                    </Box>
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid>
                            <Grid item xs={12} sm={7}>
                                <Posts />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </Box>
    )
}

export default App