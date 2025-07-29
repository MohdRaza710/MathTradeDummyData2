import React from 'react';
import { Box, Typography } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const Empty = ({ message = "No data" }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={4}
      height="300px"
      color="text.secondary"
      // border="1px dashed lightgray"
      // borderRadius={2}
      // bgcolor="#fafafa"
    >
      <InsertDriveFileIcon sx={{ fontSize: 100, mb: 1 }} />
      <Typography sx={{fontSize: 18, fontWeight: 'bold'}} variant="body1">{message}</Typography>
    </Box>
  );
};

export default Empty;
