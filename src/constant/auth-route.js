import React from 'react';
import { Route } from 'react-router-dom';

function isUserAllowed(rest) {

    let activeRole = 0;
    rest.user.Roles.forEach((role) => {
        if(role.ActiveStatus){
            activeRole = parseInt(role.Precedence,10);
        }
    });
    return rest.allowed.includes(activeRole);
}


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        rest.user !== null && isUserAllowed(rest)
            ? <Component {...props} {...rest} />
            : window.location.href = "/"
    )} />
);

export default PrivateRoute;