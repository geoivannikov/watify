import React from "react";
import { FiLogOut } from 'react-icons/fi';

class CustomHeader extends React.Component {

  terminsClick = _ => {
    window.location.replace("/");
  }

  reservationsClick = _ => {
    window.location.replace("/invoice");
  }

  render() {
    return (
      <div className="client-header">
        <div className="hospital-logo-name">
          WATIFY
          </div>
        <div className="hospital-logo-line">
        </div>
        { <div className="header-item-termins">
          <div onClick={this.terminsClick}>
            Clients
            </div>
        </div> }
        <div className="header-item-reservations">
          <div onClick={this.reservationsClick}>
            Invoice
            </div>
        </div> 
        <div className="user-name">
          {this.props.fullName}
            </div>
        {/* <div onClick={this.exitAction} className="logout-button">
          <FiLogOut style={{ color: "white", height: 20, width: 20 }} />
        </div> */}
      </div>
    );

  }
}

export { CustomHeader };
