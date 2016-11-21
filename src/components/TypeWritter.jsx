import React from 'react';

let typeTimeout;

class Typewriter extends React.Component {
    constructor() {
        super();
        this.state = {
             text: ' ',
         };
    }

    componentWillMount() {
        let { text } = this.props;

        if (Array.isArray(text)) {
            this._originalString = text.reverse().pop();
        } else {
            this._originalString = text;
        }

        this._originalString = this._originalString.split('').reverse();

    }

    componentDidMount() {
        this.setState({ text: ' ' });
        this.type(this._originalString.pop());
    }

    componentWillUnmount() {
      clearTimeout(typeTimeout);
    }

    type(char) {
        let {
            speed, randomSpeed, text
        } = this.props;

        speed = randomSpeed ? this.randomizeSpeed(speed) : speed;

        typeTimeout = setTimeout(() => {
            this.setState({
                text: this.state.text + char
            });

            if (this._originalString.length) {
                this.type(this._originalString.pop());
            } else {
                if (Array.isArray(text) && text.length) {
                    this._originalString = text.pop().split('').reverse();

                    setTimeout(() => {
                        this.setState({text: ''});
                        this.type(this._originalString.pop());
                    }, 1000);
                }
            }
        }, speed);
    }

    randomizeSpeed(baseline = 150) {
        return Math.floor(Math.random() * (baseline - 220) + 220);
    }

    render() {
        return React.DOM[this.props.tag](null, this.state.text);
    }
}

Typewriter.defaultProps = {
    speed: 75,
    randomSpeed: false,
    tag: 'p'
};

export default Typewriter;
