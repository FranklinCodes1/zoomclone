import React, { useContext } from 'react'
import { Button } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const Notifcations = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext)
    return (
        <>
            {call.isReceivedCall && !callAccepted && (

                <div style={{ idsplay: 'flex', justifyContent: 'center'}}>
                    <h1>{call.name} is calling: </h1>
                    <Button variant="contained" color="primary" onClick={answerCall}>
                        Answer

                    </Button>
                </div>
            )}
            
        </>
    )
}

export default Notifcations