import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Search from './Search';
import Result from './Result';

import * as actions from '../actions/searchActions';
import buyMeACoffeeImage from '../assets/buy-me-a-coffee.png';

class HomePage extends React.Component {
    storeSearchResults = (results) => {
        this.props.actions.storeSearchResults(this.props.searchState, results);
    }

    render() {
        return (
            <div>
                <h1>File Extension Explorer</h1>
                <p>This application allows you to search our embedded SQLite file extension. I needed to use this Database for an embedded project that is why I share it with you.</p>
                <p>Note that this React project load and parse the database in browser thanks to WebAssembly. You can acces the source code at <a href="https://github.com/FlyersWeb/file-extension-api" target="_blank" rel="noopener noreferrer">https://github.com/FlyersWeb/file-extension-api</a></p>
                <p>
                    <a href="https://paypal.me/nac1dbois">
                        <img src={buyMeACoffeeImage} alt="buy me a coffee"></img>
                    </a>
                </p>
                <p>If you like this project feel free to buy me a coffe as it was done on my spare time.</p>

                <h2>Search a file extension</h2>

                <p>Search for a file extension to know if it exists in our database.</p>
                
                <Search onSearchClick={this.storeSearchResults} />

                <Result results={this.props.searchState.results}></Result>
            </div>
        );
    }
}

HomePage.propTypes = {
    actions: PropTypes.object.isRequired,
    searchState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
      searchState: state.searchReducer
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);
