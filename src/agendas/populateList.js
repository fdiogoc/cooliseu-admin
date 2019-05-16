import React from "react";
import PropTypes from "prop-types";

function populateList(numbers) {
  if (numbers) {
    return numbers.map(number => <li key={number.toString()}>{number}</li>);
  }
}

const SimpleArray = ({ source, record = {} }) => (
  <ul>{populateList(record[source])}</ul>
);

SimpleArray.defaultProps = {
  addLabel: true,
  label: "List"
};

SimpleArray.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.object
};

export default SimpleArray;
