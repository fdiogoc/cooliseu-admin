import React from "react";

import get from "lodash/get";
import Typography from "@material-ui/core/Typography";
import { createStyles, withStyles } from "@material-ui/core/styles";

import FalseIcon from "@material-ui/icons/Clear";
import TrueIcon from "@material-ui/icons/Done";

const styles = createStyles({
  label: {
    // Move the text out of the flow of the container.
    position: "absolute",

    // Reduce its height and width to just one pixel.
    height: 1,
    width: 1,

    // Hide any overflowing elements or text.
    overflow: "hidden",

    // Clip the box to zero pixels.
    clip: "rect(0, 0, 0, 0)",

    // Text won't wrap to a second line.
    whiteSpace: "nowrap"
  }
});

const BooleanCustomField = ({ record = {}, source, classes }) => {
  const value = get(record, source);

  if (value === "false" || value === false) {
    return (
      <Typography component="span" variant="body1">
        <FalseIcon data-testid="false" />
      </Typography>
    );
  }

  if (value === "true" || value === true) {
    return (
      <Typography component="span" variant="body1">
        <TrueIcon data-testid="true" />
      </Typography>
    );
  }

  return (
    <Typography component="span" variant="body1">
      <FalseIcon data-testid="false" />
    </Typography>
  );
};

export default withStyles(styles)(BooleanCustomField);
