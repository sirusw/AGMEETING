import React from "react";
import { Box, styled } from "@mui/system";
import useSettings from "../hooks/useSettings";
import { Typography } from "@material-ui/core";

const Session = (props) => {
  const { settings } = useSettings();
  return (
      <Box display="grid" gridTemplateRows="repeat(12,1fr)" gap={2} sx={{minHeight:"100%"}}>
          <Typography
            sx={{
              color: "white",
            }}
          >
            Session text
          </Typography>
          
      </Box>
  );
};
export default Session;
