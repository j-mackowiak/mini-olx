import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        inputValue: ''
    }

    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { inputValue } = this.state;
        const { fetchAdverts } = this.props;
        fetchAdverts(inputValue);
        this.setState({ inputValue: '' });
    }

    render() {
        const { inputValue } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Czego szukasz?' value={inputValue} id='searchValue' onChange={this.handleInputChange} />
                    <button type='submit'>Szukaj</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;