import React from "react";

class SortableCol extends React.Component {
  constructor(props){
    super(props)
  }

  handleSort (e) {
    e.preventDefault();
    let order = this.props.sort_direction == 'asc' ? 'desc' : 'asc';
    //this.props.handleSortColumn(this.props.name, order);
  }

  render () {
    let active = this.props.sort_column == this.props.name;
    let anchor_text = `${this.props.text}`;
    let sort_order = this.props.sort_column == this.props.name && this.props.sort_direction == 'asc' ? 'desc' : 'asc';
    let css_class = active ? `current sort-col ${sort_order}` : `sort-col ${sort_order}`;
    //let link = (<a rel={this.props.name} onClick={this.handleSort.bind(this)} href="#" className={css_class} dangerouslySetInnerHTML={{__html: anchor_text}} />);
    let link = (<a rel={this.props.name} href="#" className={css_class} dangerouslySetInnerHTML={{__html: anchor_text}} />);
    return (<th key={`sort-${this.props.name}`}>{link}</th>)
  }
}

// SortableColumn.propTypes = {
//   name: React.PropTypes.string.isRequired,
//   text: React.PropTypes.string.isRequired,
//   sort_column: React.PropTypes.string.isRequired,
//   sort_direction: React.PropTypes.string.isRequired,
//   handleSortColumn: React.PropTypes.func.isRequired
// };

export default SortableCol;