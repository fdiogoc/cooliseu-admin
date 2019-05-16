import React, { Fragment } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import {
  Datagrid,
  List,
  TextField,
  CardActions,
  CreateButton,
  EditButton
} from "react-admin";
import { Route } from "react-router";
import CategoriaCreate from "./CategoriaCreate";
import CategoriaEdit from "./CategoriaEdit";
import { Drawer, withStyles } from "@material-ui/core";
import compose from "recompose/compose";

const styles = {
  drawerContent: {
    width: 300
  }
};

const CategoriaListActions = ({ basePath }) => (
  <CardActions>
    <CreateButton basePath={basePath} />
  </CardActions>
);

class CategoriaList extends React.Component {
  render() {
    const { push, classes, ...props } = this.props;
    return (
      <Fragment>
        <List {...props} actions={<CategoriaListActions />}>
          <Datagrid>
            <TextField source="nome" />
            <EditButton />
          </Datagrid>
        </List>
        <Route path="/categorias/create">
          {({ match }) => (
            <Drawer open={!!match} anchor="right" onClose={this.handleClose}>
              <CategoriaCreate
                className={classes.drawerContent}
                onCancel={this.handleClose}
                {...props}
              />
            </Drawer>
          )}
        </Route>
        <Route path="/categorias/:id">
          {({ match }) => {
            const isMatch =
              match && match.params && match.params.id !== "create";

            return (
              <Drawer open={isMatch} anchor="right" onClose={this.handleClose}>
                {/* To avoid any errors if the route does not match, we don't render at all the component in this case */}
                {isMatch ? (
                  <CategoriaEdit
                    className={classes.drawerContent}
                    id={match.params.id}
                    onCancel={this.handleClose}
                    {...props}
                  />
                ) : (
                  <div className={classes.drawerContent} />
                )}
              </Drawer>
            );
          }}
        </Route>
      </Fragment>
    );
  }
  handleClose = () => {
    this.props.push("/categorias");
  };
}
export default compose(
  connect(
    undefined,
    { push }
  ),
  withStyles(styles)
)(CategoriaList);
