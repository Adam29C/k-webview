import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,

} from "@mui/material";

const MyAlertDialog = ({ ShowModal, setShowModal, title, body ,   btn_title }) => {
  return (
    <>
      {/* <Button variant="outlined" onClick={setShowModal}>
        Open alert dialog
      </Button> */}

      <Dialog
        open={ShowModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            position: "relative",
            overflow: "visible",
            textAlign: "center",
            paddingTop: 4,
          },
        }}
      >
        <div className="parent-icon">
          <i className="fa-solid fa-circle-info fa-3x modal-icon"></i>
        </div>

        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {body}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <button className="primary-button">{btn_title}</button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MyAlertDialog;
