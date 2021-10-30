import { Link } from "@mui/material";
import React from "react";

import { alpha } from "@mui/material/styles";
import BrowseLayout from "./BrowseLayout";
import { Box, styled } from "@mui/system";
import useSettings from "../hooks/useSettings";
import { Typography } from "@material-ui/core";

const Session = (props) => {
  const { settings } = useSettings();
  const StyledDiv = styled("div")({
    backgroundColor: "primary",
    width: "100%",
    height: "1000px",
  });

  return (
    <StyledDiv>
      <Box>
        <Typography
          sx={{
            color: "white",
          }}
        >
          Session text
        </Typography>
        <Typography
          sx={{
            color: "white",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed est
          in lacus porttitor tristique. Nam ultrices lectus leo, et aliquam enim
          aliquam id. In diam est, rhoncus id risus sit amet, mollis
          pellentesque urna. Maecenas viverra at nunc a lobortis. Duis
          condimentum neque et odio aliquam, a molestie lacus elementum. Aenean
          egestas bibendum diam eu feugiat. Donec tortor quam, cursus in
          convallis et, rhoncus elementum nunc. Vivamus non urna odio. In vitae
          ligula risus. Duis efficitur porta eleifend. Donec dictum id tortor in
          consectetur. In vitae mi tincidunt, sodales elit eu, imperdiet nibh.
          Suspendisse potenti. Suspendisse fermentum, turpis in placerat
          finibus, justo tortor aliquam nunc, dignissim fringilla risus tortor
          sed est. Quisque pellentesque erat volutpat velit dictum aliquet.
          Quisque eget fringilla eros, id rutrum orci. 
          Vivamus gravida nunc sed
          metus tincidunt, vel congue odio tristique. Mauris ut condimentum
          mauris. In hac habitasse platea dictumst. Donec non orci lobortis
          augue rutrum ornare. Cras porttitor sem sit amet tellus malesuada
          sodales. Nam id magna turpis. Donec in condimentum elit, quis
          venenatis risus. Curabitur posuere ex nibh, non pulvinar lectus
          interdum quis. Curabitur efficitur ut mauris id sagittis. Nunc velit
          elit, maximus vitae venenatis in, luctus a nunc. Aliquam suscipit
          tristique dui et luctus. Suspendisse vulputate a felis sit amet
          dictum. Fusce bibendum rhoncus elementum. Donec laoreet turpis a odio
          ornare vestibulum. Mauris porttitor lectus ac tellus tincidunt, sed
          semper libero auctor. Nulla in luctus enim, nec mattis dui. Praesent
          sodales efficitur mollis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Phasellus mattis nunc bibendum massa tincidunt
          tempus. Quisque ornare sem ligula, sit amet aliquet dolor consequat
          at. Nullam ac facilisis urna, nec ultrices arcu. Ut arcu erat, mollis
          a ex sit amet, ornare elementum mi. Curabitur orci diam, laoreet ut
          sapien eget, mollis lacinia magna. Nunc vitae semper purus. Etiam
          viverra ac velit vel vestibulum. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Integer condimentum ullamcorper ipsum, quis
          placerat diam. Etiam laoreet ullamcorper est a molestie. Pellentesque
          at nulla justo. Duis in mi non dui ornare interdum quis facilisis est.
          Cras tempor ex vitae odio posuere sodales. Morbi quis dolor semper
          urna vehicula rutrum viverra vel erat. Cras gravida, purus vitae
          aliquam pharetra, dolor diam placerat nunc, id consequat elit nisi a
          massa. Etiam egestas cursus eros, eget vulputate dolor tempor nec.
          Maecenas augue metus, pretium eget arcu at, maximus iaculis metus.
          Fusce vel nunc vitae elit commodo condimentum in non mi. In dictum
          enim in accumsan imperdiet.
        </Typography>
      </Box>
    </StyledDiv>
  );
};
export default Session;
