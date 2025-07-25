import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const MyAlertDialog = ({ ShowModal, setShowModal, title, body, btnFunction, btn_title }) => {
  return (
    <>
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
          <button className="primary-button" onClick={btnFunction}>
            {btn_title}
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MyAlertDialog;
