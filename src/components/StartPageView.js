import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults/SearchResults';
import CategoryMenu from './CategoryMenu';
import AddNewButton from './AddNewButton';

class StartViewPage extends Component {
    state = {
        results: []
    }

    componentDidMount() {
        fetch("http://localhost:3003/advertisements?_sort=id&_order=desc&_limit=6")
            .then(res => res.json())
            .then(res => this.setState({ results: res }));
    }

    fetchAds = word => {
        fetch(`http://localhost:3003/advertisements?q=${word}&_limit=6`)
            .then(res => res.json())
            .then(res => this.setState({ results: res }));
    }

    render() {

        return (
            <>
                <SearchBar fetchAdverts={this.fetchAds} />
                <AddNewButton />
                <SearchResults ads={this.state.results} />
                <CategoryMenu />
            </>
        )
    }
}

export default StartViewPage;