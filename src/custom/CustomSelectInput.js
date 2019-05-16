import React, { Component } from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles, createStyles } from "@material-ui/core/styles";
import compose from "recompose/compose";
import { addField, translate, FieldTitle } from "ra-core";
import {
  ResettableTextField,
  Create,
  SimpleForm,
  ReferenceManyField,
  TextInput,
  DisabledInput,
  ReferenceInput,
  Datagrid,
  ReferenceField,
  TextField
} from "react-admin";

const sanitizeRestProps = ({
  addLabel,
  allowEmpty,
  emptyValue,
  basePath,
  choices,
  className,
  component,
  crudGetMatching,
  crudGetOne,
  defaultValue,
  filter,
  filterToQuery,
  formClassName,
  initializeForm,
  input,
  isRequired,
  label,
  locale,
  meta,
  onChange,
  options,
  optionValue,
  optionText,
  disableValue,
  perPage,
  record,
  reference,
  resource,
  setFilter,
  setPagination,
  setSort,
  sort,
  source,
  textAlign,
  translate,
  translateChoice,
  validation,
  ...rest
}) => rest;

const styles = theme =>
  createStyles({
    input: {
      minWidth: theme.spacing.unit * 20
    }
  });

export class SelectInput extends Component {
  /*
   * Using state to bypass a redux-form comparison but which prevents re-rendering
   * @see https://github.com/erikras/redux-form/issues/2456
   */
  state = {
    value: this.props.input.value
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.input.value !== this.props.input.value) {
      this.setState({ value: nextProps.input.value });
    }
  }

  handleChange = eventOrValue => {
    console.log(eventOrValue);
    const value = eventOrValue.target
      ? eventOrValue.target.value
      : eventOrValue;
    this.props.input.onChange(value);

    // HACK: For some reason, redux-form does not consider this input touched without calling onBlur manually
    this.props.input.onBlur(value);
    this.setState({ value });
  };

  addAllowEmpty = choices => {
    if (this.props.allowEmpty) {
      return [
        <MenuItem value={this.props.emptyValue} key="null" />,
        ...choices
      ];
    }

    return choices;
  };
  renderMenuItemOption = choice => {
    const { optionText, translate, translateChoice } = this.props;
    if (React.isValidElement(optionText))
      return React.cloneElement(optionText, {
        record: choice
      });
    const choiceName =
      typeof optionText === "function"
        ? optionText(choice)
        : get(choice, optionText);
    return translateChoice
      ? translate(choiceName, { _: choiceName })
      : choiceName;
  };

  renderMenuItem = choice => {
    const { optionValue, disableValue } = this.props;
    return (
      <MenuItem
        key={get(choice, optionValue)}
        value={get(choice, optionValue)}
        disabled={get(choice, disableValue)}
      >
        {this.renderMenuItemOption(choice)}
      </MenuItem>
    );
  };

  render() {
    const {
      allowEmpty,
      choices,
      classes,
      className,
      input,
      isRequired,
      label,
      meta,
      options,
      resource,
      source,
      ...rest
    } = this.props;
    if (typeof meta === "undefined") {
      throw new Error(
        "The SelectInput component wasn't called within a redux-form <Field>. Did you decorate it and forget to add the addField prop to your component? See https://marmelab.com/react-admin/Inputs.html#writing-your-own-input-component for details."
      );
    }
    const { touched, error, helperText = false } = meta;

    return (
      <div>
        {" "}
        <ResettableTextField
          select
          margin="normal"
          value={this.state.value}
          label={
            <FieldTitle
              label={label}
              source={source}
              resource={resource}
              isRequired={isRequired}
            />
          }
          name={input.name}
          className={`${classes.input} ${className}`}
          clearAlwaysVisible
          error={!!(touched && error)}
          helperText={(touched && error) || helperText}
          {...options}
          {...sanitizeRestProps(rest)}
          onChange={this.handleChange}
        >
          {this.addAllowEmpty(choices.map(this.renderMenuItem))}
        </ResettableTextField>{" "}
        <ReferenceManyField
          basePath={resource}
          label="Salas"
          reference="salas"
          target="participanteId"
          source="participanteId"
          {...sanitizeRestProps(rest)}
        >
          <Datagrid>
            <TextField source="participanteId" />
            <ReferenceField source="participanteId" reference="participantes">
              <TextField optionText="nome" />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </div>
    );
  }
}

SelectInput.propTypes = {
  allowEmpty: PropTypes.bool.isRequired,
  emptyValue: PropTypes.any,
  choices: PropTypes.arrayOf(PropTypes.object),
  classes: PropTypes.object,
  className: PropTypes.string,
  input: PropTypes.object,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  meta: PropTypes.object,
  options: PropTypes.object,
  optionText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element
  ]).isRequired,
  optionValue: PropTypes.string.isRequired,
  disableValue: PropTypes.string,
  resource: PropTypes.string,
  source: PropTypes.string,
  translate: PropTypes.func.isRequired,
  translateChoice: PropTypes.bool
};

SelectInput.defaultProps = {
  allowEmpty: false,
  emptyValue: "",
  classes: {},
  choices: [],
  options: {},
  optionText: "name",
  optionValue: "id",
  translateChoice: true,
  disableValue: "disabled"
};

export default compose(
  addField,
  translate,
  withStyles(styles)
)(SelectInput);
