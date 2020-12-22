import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Page from '../../components/page/page'
import API from '../../comm/api';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lista: []
        }
        
        this.getUsers()
    }

    getUsers = async() => {
        await API.get('/users').then(res => {
            let dados = res.data;
            this.setState({ lista: dados });
            console.log(this.state.lista)
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <Grid item xs={12}>
                <Page />
            </Grid>
        )

    }

}