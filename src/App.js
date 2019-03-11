import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import ForescastExtendedContainer from './containers/ForecastExtendedContainer'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import { Grid, Row, Col } from 'react-flexbox-grid'
import LocationListContainer from './containers/LocationListContainer';
import { MuiThemeProvider, createMuiTheme  } from '@material-ui/core/styles'
//import { MultiHook } from 'tapable'
import './App.css'

const cities = [
  'Orusco de tajuña,es',
  'Cagua,ve',
  'Madrid,es',
]


class App extends Component {
  // constructor () {
  //   super();
  //   // para inizializar el state solo asi se puede
  //   this.state = { city: null};
  // }

  render() {
    // const { city } = this.state;

    const theme = createMuiTheme();

    return (
      <MuiThemeProvider theme={theme}>
        <Grid>

          <Row>
            <AppBar position="sticky">
              <Toolbar>
                <Typography variant='title' color='inherit'>
                  Weather app
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>

          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer cities={cities} />
            </Col>

            <Col xs={12} md={6}>
              <Paper elevation={4}>
              <div className="details">
                  <ForescastExtendedContainer />
              </div>
              </Paper>
            </Col>
          </Row>

        </Grid>
      </MuiThemeProvider>
    );
  }
}


export default App;