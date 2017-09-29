import React from 'react'
import CarsList from '../containers/cars-list'
import Details from '../containers/details'


const WebPage = () => (
    <div className="panel panel-default">
        <div className="panel-body">
            <h2>Cars: </h2>
            <CarsList/>
            <hr />
            <h3>Details: </h3>
            <Details />
        </div>
    </div>
)

export default WebPage
