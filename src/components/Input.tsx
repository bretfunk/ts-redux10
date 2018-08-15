import * as React from "react";
import { connect } from "react-redux";
import { addTodo, updateItem } from "../ducks/todo";
import { IState } from "../types";

export interface IReduxProps {
  item: string;
}

export interface IDispatchProps {
  addTodo: (e: any) => any;
  updateItem: (e: any) => any;
}

class Input extends React.Component<IReduxProps & IDispatchProps> {
  public render() {
    return (
      <div className="row-fluid">
        <form className="form-group" onSubmit={this.props.addTodo}>
          <input
            className="form-control text-center"
            type="input"
            value={this.props.item}
            placeholder="item to add"
            onChange={this.props.updateItem}
          />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  (state: IState): IReduxProps => ({
    item: state.item
  }),
  { addTodo, updateItem }
)(Input);
