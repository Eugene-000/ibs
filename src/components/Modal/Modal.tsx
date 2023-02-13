import React from "react";
import { Dialog, DialogContent, DialogTitle, IconButton, styled, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface IProps {
    open: boolean;
    text: string | null;
    title: string | null;
    handleCloseModal: () => void;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
}));

export const Modal: React.FC<IProps> = ({open, text, title, handleCloseModal}) => {
    return (
    <BootstrapDialog
        onClose={handleCloseModal}
        aria-labelledby="customized-dialog-title"
        open={open}
    >
        <DialogTitle sx={{ m: 0, p: 2 }}>
            {title}
            {handleCloseModal ? (
                <IconButton
                    aria-label="close"
                    onClick={handleCloseModal}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: '#E97F03',
                    }}
                >
                <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
        <DialogContent dividers>
            <Typography gutterBottom>
            {text}
            </Typography>
        </DialogContent>
    </BootstrapDialog>
    )
}

