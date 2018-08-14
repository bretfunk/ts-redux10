import * as React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../ducks/todo";
import { IDefaultState } from "../types";

export interface IReduxProps {
  items: string[];
}

export interface IDispatchProps {
  deleteItem: (e: any) => any;
}

class List extends React.Component<IReduxProps & IDispatchProps> {
  public render() {
    const list = this.props.items.map((item: string, i: number) => (
      <tr>
        <td key={i} scope="row" className="col-md-10">
          <h3>{item}</h3>
        </td>
        <td>
          <button
            className="btn btn-small btn-danger"
            onClick={this.props.deleteItem}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <table className="table">
          <tbody>{list}</tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  (state: IDefaultState): IReduxProps => ({
    items: state.items
  }),
  { deleteItem }
)(List);
