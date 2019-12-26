import React, { Component } from 'react';
import CategoryMenu from './CategoryMenu/CategoryMenu';

class AdvertisementPage extends Component {
    state = {
        advertisement: ''
    }

    componentDidMount() {
        const { adId } = this.props.match.params;
        fetch(`http://localhost:3003/advertisements/${adId}`)
            .then(res => res.json())
            .then(res => this.setState({ advertisement: res }))
    }

    render() {
        const { advertisement } = this.state;
        return (
            <>
            <div className='ad-page-wrapper'>
                <h1>{advertisement.title}</h1>
                <img src={advertisement.imageURL} width='200px' height='auto' />
                <p>Opis: {advertisement.description}</p>
            </div>
            <CategoryMenu />
            </>
        )
    }
}

export default AdvertisementPage;