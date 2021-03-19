import React from "react";
import SortableCol from "./SortableCol";
class TableHeader extends React.Component {
  constructor(props){
    super(props)
  }
  handleSortColumn(col, dir) {
    this.props.handleSortColumn(col, dir);
  }
  build_sortable_cols() {
    let cols = [];
    let sortable_cols = {
      name: 'Name',
      date: 'Date',
      number: 'Number',
      description: 'Description',
    };

    for (const col in sortable_cols) {
      cols.push(<SortableCol key={col} sort_column={this.props.sort_column} sort_direction={this.props.sort_direction} name={col} text={sortable_cols[col]} />)
    }
    return cols;
  }

  render () {
    return (
        <thead>
        <tr>
          {this.build_sortable_cols()}
        </tr>
        </thead>
    );
  }
}
export default TableHeader;