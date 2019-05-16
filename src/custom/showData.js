import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";

const ShowData = ({ source, record = {} }) => {
  const value = get(record, source);
  console.log(value);
  return <span>{record[source]}</span>;
};

ShowData.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.string.isRequired
};

export default ShowData;
