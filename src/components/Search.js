import React from 'react';
import PropTypes from 'prop-types';
import initSqlJs from 'sql.js';
import database from '../assets/database.sqlite';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            db: null,
            searched: ''
        };

        this.storeTerm = this.storeTerm.bind(this);
        this.search = this.search.bind(this);
        this.loadDatabase = this.loadDatabase.bind(this);
    }

    async componentDidMount() {
        await this.loadDatabase();
    }

    // load and parse sqlite database on mount
    async loadDatabase() {
        // Sadly it is not possible at the moment to load wasm using webpack 4
        let config = {
            locateFile: filename => `https://cdn.rawgit.com/kripken/sql.js/v1.0.1/dist/${filename}`
        }
        return initSqlJs(config).then(SQL => {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', database, true);
            xhr.responseType = 'arraybuffer';

            xhr.onload = () => {
                var uInt8Array = new Uint8Array(xhr.response);
                var db = new SQL.Database(uInt8Array);

                this.setState({
                    db: db
                });
            };
            xhr.send();
        });
    }

    // used to store value from input to state
    storeTerm(e) {
        this.setState({
            searched: e.target.value,
        });
    }

    // when clicked on search
    search(e) {
        e.preventDefault();

        const db = this.state.db;
        const searchedTerm = this.state.searched;
        console.log(`Searched Term is ${this.state.searched}`);

        const results = db.exec(`SELECT * FROM Files WHERE name LIKE '%${searchedTerm}%'`);
        console.log(results);

        if (results.length > 0) {
            const resultsLength = results[0].values.length;
            console.log(`found ${resultsLength} results`);

            this.props.onSearchClick(results[0].values);
        } else {
            this.props.onSearchClick([]);
        }
    }

    render() {
        return (
            <div id="search">
                <form>
                    <input type="text" placeholder="zip" onChange={this.storeTerm}></input>
                    <button type="submit" className="btn-primary" onClick={this.search}>Search</button>
                </form>
            </div>
        );
    }
}

Search.propTypes = {
    onSearchClick: PropTypes.func.isRequired,
};

export default Search;
