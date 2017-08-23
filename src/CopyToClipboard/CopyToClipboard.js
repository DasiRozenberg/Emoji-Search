import React from 'react';
import ReactDom from 'react-dom';
import './CopyToClipboard.css';

class CopyToClipboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Copy'
    };
  }

  changeText() {
    this.props.changeTextHandler(this._text.value);
  }

  copyText() {
    var input = ReactDom.findDOMNode(this._text);
    input.select();
    document.execCommand('copy');
    input.blur();
    this.setState({ buttonText: 'Copied' });
    setTimeout(() => { this.setState({ buttonText: 'Copy' }); }, 1500);
  }

  render() {
    return (
      <div className="component-copy-to-clipboard">
        <div>
          <input
            value={this.props.value}
            onChange={this.changeText.bind(this)}
            ref={value => this._text = value}
            placeholder="Emojis to copy"
          />
          <span className="copy-button" onClick={this.copyText.bind(this)}>
            {this.state.buttonText}
          </span>
        </div>
      </div>
    );
  }
}
CopyToClipboard.propTypes = {
  value: React.PropTypes.string,
  changeTextHandler: React.PropTypes.func
};
export default CopyToClipboard;
