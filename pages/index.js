import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { Logo, Cover } from '../constant/paths/images'

const styles = () => ({
    root: {
        background: `url(${ Cover }) center no-repeat`,
        height: '100vh',
        backgroundSize: 'cover'
    },
    header: {
        display: 'flex',
        padding: '1em'
    }
})

const Index = (props) => {
    const { classes } = props
    
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <img src={Logo} height={64} alt="logo"/>
            </div>
        </div>
    )
}

Index.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Index)