import React, { Component } from 'react';
import SimpleSlider from './components/SimpleSlider';
import Card from './components/Card';
import Head from './components/Head';
import './App.css';
import { Provider } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import store from './store'

class App extends Component {
render() {
  return (
      <Provider store={store}>
        <div className="App">
          <Grid container>
            <Grid item xs={2}>
              <SimpleSlider />
            </Grid>
            <Grid item xs={7}>
              <Head />
              <Card />
            </Grid>
            <Grid item xs={2}>
              <SimpleSlider />
            </Grid>
          </Grid>
        </div>
      </Provider>
    );
  }
}

export default App;
