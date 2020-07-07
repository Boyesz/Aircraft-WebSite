import React from 'react';
import { Route } from 'react-router';
import AircraftCards from './components/AircraftComponents/AircraftCards';
import Layout from './components/Layout';
import Admin from './components/Admin';
import Modify from './components/Modify';


export default () => (
    <Layout>
        <Route exact path='/' component={AircraftCards} />
        <Route path="/Admin" component={ Admin } />
        <Route path="/Modify" component={ Modify } />
    </Layout>
);