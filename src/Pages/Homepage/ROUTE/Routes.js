import React from 'react';
import Homepage from '../ItemCompHome/Homepage';
import {Switch,Route} from 'react-router-dom';
import HATS from '../PageComp/HATS/HATS';
import JACKETS from '../PageComp/JACKETS/JACKETS';
import SNEAKERS from '../PageComp/SNEAKERS/SNEAKERS';
import WOMENS from '../PageComp/WOMENS/WOMENS';
import MENS from '../PageComp/MENS/MENS';
import ERROR from '../PageComp/ERROR/ERROR';
import Shoppagecomp from '../../Shoppage/Shoppagecomp';


export default function Routes() {
    return (
        <div>
            <Switch>{/*It allows only one route to be rendered*/}
                <Route exact path = '/' component = {Homepage}/>
                <Route exact path = '/hats' component = {HATS}/>
                <Route exact path = '/jackets' component = {JACKETS}/>
                <Route exact path = '/sneakers' component = {SNEAKERS}/>
                <Route exact path = '/womens' component = {WOMENS}/>
                <Route exact path = '/mens' component = {MENS}/>
                <Route path = '/shop' component = {Shoppagecomp}/>
                <Route component={ERROR} />
            </Switch>
        </div>
    )
}
