import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {
    render() {
        return (
            <div id="result">
                {this.props.results.length > 0 && 
                <table>
                    <thead>
                        <tr>
                            <th>Extension</th>
                            <th>Owned by Company</th>
                            <th>Classified as</th>
                            <th>Associated to software</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.results.map(result =>  
                            <tr key={result[0]}>
                                <td>{result[0]}</td>
                                <td>{result[1]}</td>
                                <td>{result[2]}</td>
                                <td>{result[3]}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                }
            </div>
        );
    }
}

Result.propTypes = {
    results: PropTypes.array.isRequired,
};

export default Result;
