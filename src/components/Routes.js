import React from 'react';
import {AllYearContainer} from "./AllYear/AllYearContainer";
import {Redirect, Route, Switch} from "react-router-dom";
import {PickMonthContainer} from "./PickMonth/PickMonthContainer";
import {Error404} from "./Error404/Error404";

export  const PATH = {
    ALL_YEAR: '/year',
    PICK_MONTH: '/month',
    ERROR_404: '/error_404'
}

export const Routes = () => {


    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.ALL_YEAR}/>}/>
                <Route path={PATH.ALL_YEAR} render={()=> <AllYearContainer/>} />
                <Route path={PATH.PICK_MONTH} render={()=> <PickMonthContainer/>}/>
                <Route path={PATH.ERROR_404} render={()=> <Error404/>}/>
            </Switch>
        </div>
    )
}
