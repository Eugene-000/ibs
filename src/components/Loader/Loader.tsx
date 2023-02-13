import { Box, CircularProgress } from "@mui/material";
import React from "react";
import styles from './Loader.module.scss';

export const Loader: React.FC = () => {
    return (
        <Box className={styles.container}>
            <CircularProgress
                size={100} 
                color={"warning"}
            />
        </Box>
    )
}

