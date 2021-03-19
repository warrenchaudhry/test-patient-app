import React from "react";
class PatientRow extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const patient = this.props.patient;
    return(
        <tr>
          <td>{patient.name}</td>
          <td>{patient.date}</td>
          <td>{patient.number}</td>
          <td>{patient.description}</td>
        </tr>
    )
  }
}
export default PatientRow;