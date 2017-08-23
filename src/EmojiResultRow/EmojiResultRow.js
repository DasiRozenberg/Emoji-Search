import React from 'react';
import './EmojiResultRow.css';

class EmojiResultsRow extends React.Component {
  copySymbol() {
    this.props.clickHandler(this.props.symbol);
  }

  render() {
    return (
      <div className="component-emoji-result-row" onClick={this.copySymbol.bind(this)}>
        <span 
            className="emoji-symbol"
        >
            {this.props.symbol}
        </span>
        <span
          className="title"
        >
          {this.props.title}
        </span>
      </div>
    );
  }
}
EmojiResultsRow.propTypes = {
  title: React.PropTypes.string,
  symbol: React.PropTypes.string,
  clickHandler: React.PropTypes.func
};
export default EmojiResultsRow;
