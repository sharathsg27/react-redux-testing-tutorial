import React, {Component} from 'react';

class HeadLine extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {header, desc} = this.props;

        return (
            <div data-test="headlineComponent">
                <h1 data-test="header">{header}</h1>
                <p data-test="description">{desc}</p>
            </div>
        );
    }
}

export default HeadLine;
