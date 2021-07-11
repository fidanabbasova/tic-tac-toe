import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        border: '2px solid #000000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 6),
        outline: 'none'
      },
}));

function Result(props) {
    const classes = useStyles();

    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            className={classes.modal}
            aria-labelledby='simple-modal-title'
            aria-describedby='simple-modal-description'>
            <div className={classes.paper}>
                <h2>{props.result}</h2>
            </div>
        </Modal>
    );
}

export default Result;