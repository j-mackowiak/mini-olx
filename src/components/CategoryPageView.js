import React, { Component } from 'react';
import SearchResults from './SearchResults/SearchResults';
import SearchBar from './SearchBar';
import CategoryMenu from './CategoryMenu';
import AddNewButton from './AddNewButton';

class CategoryPageView extends Component {
    state = {
        currentCategory: '',
        results: []
    }

    componentDidMount() {
        const { category } = this.props.match.params;
        fetch(`http://localhost:3003/advertisements?category=${category}&_limit=6`)
            .then(res => res.json())
            .then(res => this.setState({ results: res, currentCategory: category }));
    }

    componentDidUpdate() {
        const { category } = this.props.match.params;
        const { currentCategory } = this.state;
        if (currentCategory !== category) {
            fetch(`http://localhost:3003/advertisements?category=${category}&_limit=6`)
                .then(res => res.json())
                .then(res => this.setState({ results: res, currentCategory: category }));
        }
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

export default CategoryPageView;