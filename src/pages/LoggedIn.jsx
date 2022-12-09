import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';

export default function LoggedIn() {
  return (
    <div>
    <MDBInput label='Form control lg' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput label='Form control default' id='formControlDefault' type='text' />
      <br />
      <MDBInput  label='Form control sm' id='formControlSm' type='text' size='sm' />


    </div>
  )
}
