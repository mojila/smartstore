import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { Logo, Cover, Box } from '../constant/paths/images'
import Link from 'next/link'

const styles = () => ({
    root: {
        background: `url(${ Cover }) center no-repeat`,
        height: '100vh',
        backgroundSize: 'cover',
        width: '100%'
    },
    header: {
        display: 'flex',
        padding: '1em'
    },
    content: {
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
            <div className={classes.content}>
                <div className="w-50">
                    <img src={Box} height={128} alt="content"/>
                    <div className="p1 text-left font-weight-light w-75 mt-2" style={{ width: '' }}>
                        Smartstore Help Company to Control Inventory.
                    </div>
                    <div className="mt-2">
                        <Link href="/login">
                            <button className="btn btn-success w-50 shadow-sm">Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

Index.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Index)