import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Page from '../../components/page'
import API from '../../comm/api';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <Grid item xs={12}>
                <h1>description</h1>
            </Grid>
        )

    }

}