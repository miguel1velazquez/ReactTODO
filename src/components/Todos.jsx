import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import { CssBaseline, Button } from "@material-ui/core";

const Todos = props => {
  const { todos } = props;
  const tds =
    todos.length > 2
      ? todos.map((todo, index) => {
          return <Button key={index}>{todo.desc}</Button>;
        })
      : null;
      
  return (
    <div>
      <CssBaseline />
      {tds}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos.list
  };
};

export default compose(connect(mapStateToProps))(Todos);
