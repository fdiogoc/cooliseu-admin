import React, { Component } from "react";
import PropTypes from "prop-types";
import { addField } from "ra-core";
import get from "lodash/get";
import AvailableTimes from "react-available-times";

const makeCalendar = CalendarComponent => {
  class _makeCalendar extends Component {
    onChange(selections) {
      this.props.input.onChange(selections);
    }

    render() {
      const { source, resource, className, record } = this.props;
      const selections = get(record, source);
      if (selections != null) {
        selections.forEach(selection => {
          if (selection.start instanceof Date == false) {
            selection.start = selection.start.toDate();
            selection.end = selection.end.toDate();
          }
        });
      }

      return (
        <div className="calendar">
          <AvailableTimes
            className={className}
            source={source}
            resource={resource}
            weekStartsOn="monday"
            onChange={selections => {
              selections.forEach(selection => {
                if (selection.start instanceof Date == false) {
                  selection.start = selection.start.toDate();
                  selection.end = selection.end.toDate();
                }
              });
              this.onChange(selections);
            }}
            height={400}
            recurring={false}
            availableDays={[
              "monday",
              "tuesday",
              "wednesday",
              "thursday",
              "friday"
            ]}
            availableHourRange={{ start: 9, end: 19 }}
            initialSelections={selections}
          />
        </div>
      );
    }
  }
  _makeCalendar.propTypes = {
    resource: PropTypes.string,
    source: PropTypes.string,
    className: PropTypes.string
  };

  _makeCalendar.defaultProps = {
    resource: "",
    source: "",
    className: ""
  };
  return _makeCalendar;
};

export const AvailableTimeComp = addField(makeCalendar());
