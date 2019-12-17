import React, { Component } from 'react';
import Alert from '../Alert/Alert';
import './AddAdView.css'
import { Link } from 'react-router-dom';


class AddAdView extends Component {
    state = {
        titleInput: '',
        selectValue: '',
        imageURLInput: '',
        descriptionInput: '',
        adAdded: null,
        addedAdId: ''
    };

    handleInputChange = e => {
        const id = e.target.id;
        switch (id) {
            case 'title': {
                this.setState({ titleInput: e.target.value });
                break;
            }
            case 'select': {
                this.setState({ selectValue: e.target.value });
                break;
            }
            case 'imageURL': {
                this.setState({ imageURLInput: e.target.value });
                break;
            }
            case 'description': {
                this.setState({ descriptionInput: e.target.value });
                break;
            }
            default:
        }
        this.setState({ adAdded: null });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { titleInput, selectValue, imageURLInput, descriptionInput } = this.state;
        const options = {
            method: "POST",
            body: JSON.stringify({ title: titleInput, category: selectValue, imageURL: imageURLInput, description: descriptionInput }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch("http://localhost:3003/advertisements", options)
            .then(res => res.json())
            .then(res => this.setState({ addedAdId: res.id }))
            .then(e.target.reset());
        this.setState({ adAdded: true, titleInput: '', imageURLInput: '', descriptionInput: '' })
    };

    render() {
        const { titleInput, imageURLInput, descriptionInput, adAdded, addedAdId } = this.state;
        return (
            <>
                <form onSubmit={this.handleSubmit} id='add-ad-form'>
                    <input type='text' id='title' value={titleInput} placeholder='Tytuł' onChange={this.handleInputChange} />
                    <select id='select' onChange={this.handleInputChange} >
                        <option value='Motoryzacja'>Motoryzacja</option>
                        <option value='Dom'>Dom</option>
                        <option value='Praca'>Praca</option>
                        <option value='Elektronika'>Elektronika</option>
                        <option value='Hobby'>Hobby</option>
                        <option value='Inne'>Inne</option>
                    </select>
                    <input type='text' id='imageURL' value={imageURLInput} placeholder='Image URL' onChange={this.handleInputChange} />
                    <textarea id='description' value={descriptionInput} placeholder='Opis' onChange={this.handleInputChange} />
                    <button type='submit'>Dodaj</button>
                </form>
                {adAdded && <Alert status='success'>
                    Ogłoszenie zostało dodane! <br />
                    Możesz je wyświetlić <Link to={`/advertisements/${addedAdId}`} >tutaj</Link>
                </Alert>}
                {/* {!adAdded && <Alert status='error'>Ogłoszenie nie zostało dodane :(</Alert>} */}
            </>
        )
    };
}

export default AddAdView;