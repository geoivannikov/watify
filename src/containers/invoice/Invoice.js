import { Button, DropdownButton, Dropdown, Spinner } from 'react-bootstrap';
import { TextFieldComponent, CustomFooter, CustomHeader, NewEntryComponent } from "../../components"
import React from "react";

class Invoice extends React.Component {
  render() {
    let invoices = [
      {
        id: '1',
        name: 'Profinit',
        DIC: '3434345904900293232',
        ICO: '4590200595920202024',
        sum: "100 000 CZK"
      },
      {
        id: '2',
        name: 'FIO bank',
        DIC: '3434345904900293232',
        ICO: '4590200595920202024',
        sum: "30 000 CZK"
      }
    ]
    let invoicesItems = invoices.map((invoice) =>
      <div key={invoice.id}>
        <div className="termin">
          <div className="termin-row"> {invoice.name} </div>
          <div className="termin-row-dic"> {"DIC: " + invoice.DIC} </div>
          <div className="termin-row-sum"> {invoice.sum} </div>
          <div className="termin-row-button"> <Button onClick={this.props.download} fluid style={{ width: 100, borderRadius: 10, fontSize: 10 }} variant="info">
              Download
            </Button></div>


          {/* <div className="termin"> {invoice.name} </div>
          <div className="client-time-termin-new"> {"DIC: " + invoice.DIC} </div>
          <div className="client-time-termin-new"> {"IC: " + invoice.ICO} </div>
          <div className="client-time-termin-new"> {invoice.sum} </div>
          <div className='termin-row button'>
            <Button onClick={this.props.edit} fluid style={{ width: 120, borderRadius: 20, fontSize: 20 }} variant="info">
              Download
            </Button>
          </div> */}
        </div>


      </div>
    )

    return (
      <div>
        <CustomHeader type="client" fullName="Jiri Spokojeny" />
        <div className="home-body">
          <div className='doctor-res'>
            {invoicesItems}
          </div>
        </div>
        <CustomFooter />
      </div>
    );
  }
}

export default Invoice;
