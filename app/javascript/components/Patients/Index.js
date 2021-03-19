import React from "react"
import PropTypes from "prop-types"
import Uploader from "./Uploader"
import PatientRow from "./PatientRow"
import TableHeader from "./TableHeader"
class Patients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: this.props.patients,
      sort: this.props.sort,
      direction: this.props.direction
    };
  }
  render() {
    return (
      <div>
        <Uploader patients={this.state.patients} />
        <h1>All Patients</h1>
        <table>
        <TableHeader sort_column={this.state.sort} sort_direction={this.state.direction} />
          <tbody>
            {this.state.patients.map(p => (
              <PatientRow key={p.id} patient={p}/>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}


Patients.propTypes = {
  patients: PropTypes.array
};
export default Patients
