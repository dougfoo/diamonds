import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function NotReadyPopup(props) {  /* props button, msg, accept, and debug */
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {props.button}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Function is not ready"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {props.msg}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
          { props.debug ? props.debug : "" }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            { props.accept ? props.accept : "Accept Apologies" }
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
