import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { change, submit, isSubmitting } from "redux-form";
import {
  fetchEnd,
  fetchStart,
  showNotification,
  Button,
  CREATE,
  REDUX_FORM_NAME
} from "react-admin";
import IconContentAdd from "@material-ui/icons/Add";

import List from "@material-ui/core/List";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import { withStyles } from "@material-ui/core/styles";

import dataProvider from "../dataProvider";

const styles = theme => ({
  selected: {
    backgroundColor: "turquoise !important",
    color: "white",
    fontWeight: 600
  }
});

class SalaQuickCreateButton extends Component {
  state = {
    selectedIndex: 1,
    error: false,
    showDialog: false
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  handleClick = () => {
    this.setState({ showDialog: true });
  };

  handleCloseClick = () => {
    this.setState({ showDialog: false });
  };

  handleSaveClick = () => {
    const { submit } = this.props;

    // Trigger a submit of our custom quick create form
    // This is needed because our modal action buttons are oustide the form
    submit("sala-quick-create");
  };

  handleSubmit = values => {
    const { change, fetchStart, fetchEnd, showNotification } = this.props;
    // Dispatch an action letting react-admin know a API call is ongoing
    fetchStart();

    // As we want to know when the new post has been created in order to close the modal, we use the
    // dataProvider directly
    dataProvider(CREATE, "salas", { data: values })
      .then(({ data }) => {
        // Update the main react-admin form (in this case, the comments creation form)
        change(REDUX_FORM_NAME, "salaId", data.id);
        this.setState({ showDialog: false });
      })
      .catch(error => {
        showNotification(error.message, "error");
      })
      .finally(() => {
        // Dispatch an action letting react-admin know a API call has ended
        fetchEnd();
      });
  };

  render() {
    const { selectedIndex } = this.state;

    return (
      <Fragment>
        <List>
          <MenuItem
            button
            selected={selectedIndex === 0}
            onClick={event => this.handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </MenuItem>
          <MenuItem
            button
            selected={selectedIndex === 1}
            onClick={event => this.handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </MenuItem>
        </List>
        <Divider />
        <List>
          <MenuItem
            button
            selected={selectedIndex === 2}
            onClick={event => this.handleListItemClick(event, 2)}
          >
            <ListItemText primary="Trash" />
          </MenuItem>
          <MenuItem
            button
            selected={selectedIndex === 3}
            onClick={event => this.handleListItemClick(event, 3)}
          >
            <ListItemText primary="Spam" />
          </MenuItem>
        </List>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isSubmitting: isSubmitting("sala-quick-create")(state)
});

const mapDispatchToProps = {
  change,
  fetchEnd,
  fetchStart,
  showNotification,
  submit
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SalaQuickCreateButton));
