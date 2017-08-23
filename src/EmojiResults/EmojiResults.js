import React from 'react';
import EmojiResultRow from './../EmojiResultRow/EmojiResultRow';
import './EmojiResults.css';

class EmojiResults extends React.Component {
  render() {
    return (
      <div className="component-emoji-results">
        {
          this.props.emojiData.map((emojiData) => {
            return (
              <EmojiResultRow
                key={emojiData.symbol+' '+emojiData.title.substring(0,2)}
                symbol={emojiData.symbol}
                title={emojiData.title}
                clickHandler={this.props.clickHandler}
              />
            );
          })
        }
      </div>
    );
  }
}
EmojiResults.propTypes = {
  emojiData: React.PropTypes.array,
  clickHandler: React.PropTypes.func
};
export default EmojiResults;
