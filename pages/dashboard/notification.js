import React from 'react'
import BottomNavigationMap from '../../components/BottomNavigationMap';
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    main: {
        height: '82vh',
        maxHeight: '92vh',
        overflow: 'auto',
        padding: '1em'
    },
    paper: {
        padding: '0.5em'
    }
})

const tracks = [
    { material: 'Palu', warehouse: 'Plant A', stock: 8 },
    { material: 'Obeng', warehouse: 'Plant B', stock: 10 },
    { material: 'Sekop', warehouse: 'Plant C', stock: 7 },
]

const Track = (props) => {
    const { classes } = props

    return (
        <>
            <AppBar style={{ height: '10vh' }} position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Pemberitahuan
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.main}>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="stretch"
                    spacing="16"
                >
                    {tracks.map((d, i) => <Grid key={i+1} item xs={12}>
                        <Paper className={classes.paper} elevation={1}>
                            <Typography variant="p" color="inherit">
                                Stok {d.material} di {d.warehouse} Tersisa {d.stock} Unit
                            </Typography>
                        </Paper>
                    </Grid>)}
                </Grid>
            </div>
            <BottomNavigationMap page={3}/>
        </>
    )
}

Track.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Track)