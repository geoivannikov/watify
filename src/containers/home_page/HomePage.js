import { Button, DropdownButton, Dropdown, Spinner } from 'react-bootstrap';
import { TextFieldComponent, CustomFooter, CustomHeader, NewEntryComponent } from "../../components"
import React from "react";

class HomePage extends React.Component {
  render() {
    let searchClient = [
      {
        id: '1',
        name: 'Profinit',
        DIC: '3434345904900293232',
        ICO: '4590200595920202024',
        mdRate: "3500"
      },
      {
        id: '2',
        name: 'FIO bank',
        DIC: '3434345904900293232',
        ICO: '4590200595920202024',
        mdRate: "1000"
      }
    ]
    let clientsItems = searchClient.map((client) =>
      <div key={client.id}>
        <div className="client-termin">
          <div className="client-time-termin"> {client.name} </div>
          <div className="client-time-termin-new"> {"DIC: " + client.DIC} </div>
          <div className="client-time-termin-new"> {"IC: " + client.ICO} </div>
          <div className="client-time-termin-new-md"> MD rate (CZK): </div>
          <div className="firstName">
            <TextFieldComponent
            placeholder={client.mdRate}
            name="firstName"
            />
          </div>
          <div className='cancel-button'>
            <Button onClick={this.props.edit} fluid style={{ width: 100, borderRadius: 20, fontSize: 20 }} variant="secondary">
              Update
            </Button>
          </div>

        </div>
      </div>
    )

    return (
      <div>
        <CustomHeader type="client" fullName="Jiri Spokojeny" />
        <div className="home-body">
          <div className='doctor-res'>
            {clientsItems}
          </div>
          <div>
            <NewEntryComponent />
          </div>
        </div>
        <CustomFooter />
      </div>
    );
  }
}

export default HomePage;
