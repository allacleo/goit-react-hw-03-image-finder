import React, {Component} from 'react';
import T from 'prop-types';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
    static propTypes = {
        onSubmit: T.func.isRequired,
    };

    state = {
        query: '',
    };


    handleChange = e => {
        this.setState({
            query: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.query);

        this.setState({query: ''});
    };

    render() {
        const { query} = this.state;
    
        return (
            <form className={styles.searchForm} onSubmit={this.handleSubmit}>
                <input
                type="text"
                autoComplete="off"
                placeholder="Search images..."
                value={query}
                onChange={this.handleChange}
                ></input>
            </form>
        );
    
    
    }
}