// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import * as LinkConstants from "../constants/link_constants"

// export const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         localStorage.getItem('user')
//             ? <Component {...props} />
//             : <Redirect to={{ pathname: LinkConstants.authLink, state: { from: props.location } }} />
//     )} />
// )

// export default PrivateRoute;
