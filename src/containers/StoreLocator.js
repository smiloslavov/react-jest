import React, { Component } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';
import mapChooser from '../mapChooser';
import axios from 'axios';

class StoreLocator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentMap: 'none.png',
            shops: []
        }

        this.chooseMap = this.chooseMap.bind(this);
    }

    async componentDidMount() {
        let response = await axios.get('http://localhost:3000/data/shops.json');
        this.setState({ shops: response.data.shops });
    }

    chooseMap(event) {
        this.setState({ currentMap: mapChooser(event.target.value) });
    }

    render() {
        let storeButtons = this.state.shops.map( (shop, index) => {
            return (<Button 
                        key={index} 
                        location={shop.location} 
                        handleClick={this.chooseMap}
                    />);
        });

        return (
            <div>
                <Header />
                <div className='button'>
                    {storeButtons}
                </div>
                <Map imageName={this.state.currentMap} location={this.props.location} />
            </div>
        );
    }
}

export default StoreLocator;