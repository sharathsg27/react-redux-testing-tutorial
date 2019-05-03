import React, {Component} from 'react';
import PropTypes from 'prop-types';

class HeadLine extends Component {

    render() {
        const {header, desc, user} = this.props;
        return (
            <div data-test="headlineComponent">
                <h1 data-test="header">{header}</h1>
                <p data-test="description">{desc}</p>
                <p data-test="user">User stats:
                    Name: {user.firstName} {user.lastName},
                    skills: {user.skills}
                </p>
            </div>
        );
    }
}

HeadLine.propTypes = {
    header: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    user: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        isDeveloper: PropTypes.bool.isRequired,
        age: PropTypes.number.isRequired,
        skills: PropTypes.array.isRequired
    })
};

export default HeadLine;
