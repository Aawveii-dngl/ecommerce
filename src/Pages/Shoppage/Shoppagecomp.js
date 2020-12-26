import React from 'react';
import PreviewCollection from '../../Components/PreviewCollection/PreviewCollection';
import SHOP_DATA from './ShopData'

class Shoppagecomp extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        collections:SHOP_DATA
    };
}

    render() {
        const {collections} = this.state;
        return (<div className = 'shop-page'>
            {
               collections.map(({id,...otherCollection}) =>(
                   <PreviewCollection key = {id} {...otherCollection}/>
               )
               )
            }
            </div>);
    }
}
export default Shoppagecomp;