import React from 'react'  //arrow function... type in rfce. creates it for you!
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Notifcations from './components/Notifcations';
import Options from './components/Options';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',
    
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
      },
      
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      },

}));

const App = () => {
    const classes = useStyles();  //run it by typing in console cd ./client/
                    //then npm start
    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">Video Chat</Typography>

            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifcations />

            </Options>
            {/*videoPLAYER*/}
            {/*options => notifications*/ }
        </div>
    );
}

export default App