import React, { Component } from "react";
import { connect } from "react-redux";
import { crudCreate, SaveButton, Toolbar, Mutation } from "react-admin";

// A custom action creator which modifies the values before calling the default crudCreate action creator
const saveWithNote = (values, basePath, redirectTo) =>
  crudCreate("agendas", { ...values, average_note: 10 }, basePath, redirectTo);

class SaveWithNoteButtonView extends Component {
  handleClick = () => {
    const { basePath, handleSubmit, redirect, saveWithNote } = this.props;

    return handleSubmit(values => {
      console.log(values);

      saveWithNote(values, basePath, redirect);
    });
  };

  render() {
    const { handleSubmitWithRedirect, saveWithNote, ...props } = this.props;

    return (
      <SaveButton handleSubmitWithRedirect={this.handleClick} {...props} />
    );
  }
}

const SaveWithNoteButton = connect(
  undefined,
  { saveWithNote }
)(SaveWithNoteButtonView);

export default SaveWithNoteButton;
