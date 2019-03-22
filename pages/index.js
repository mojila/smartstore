import React from 'react'
import dynamic from 'next/dynamic'
import BottomNavigationMap from '../components/BottomNavigationMap'

const DynamicComponentWithNoSSR = dynamic(() => import('../components/Map'), {
    ssr: false
})

const Index = (props) => {
    return (
        <>
            <DynamicComponentWithNoSSR/>
            <BottomNavigationMap/>
        </>
    )
}

export default Index