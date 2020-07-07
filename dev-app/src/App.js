import React from 'react';
import { Route } from 'react-router';
import AircraftCards from './components/AircraftComponents/AircraftCards';
import Layout from './components/Layout';


export default () => (
    <Layout>
        <Route exact path='/' component={AircraftCards} />
        <Route exact path='/wow' component={Error} />
    </Layout>
);