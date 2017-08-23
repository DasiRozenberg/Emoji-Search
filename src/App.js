import React from 'react';
import Header from './Header/Header';
import SearchInput from './SearchInput/SearchInput';
import EmojiResults from './EmojiResults/EmojiResults';
import CopyToClipboard from './CopyToClipboard/CopyToClipboard';
import filterEmoji from './filterEmoji';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji('', 2000),
      copy: '',
    };
  }

  handleSearchChange = (event) => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 2000),
    });
  }

  copyText = (text) => {
    this.setState({
      copy: this.state.copy + text
    });
  }

  copyTextChanged(text) {
    this.setState({
      copy: text
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <SearchInput
          textChange={this.handleSearchChange}
        />
        <EmojiResults
          emojiData={this.state.filteredEmoji}
          clickHandler={this.copyText}
        />
        <CopyToClipboard
          value={this.state.copy}
          changeTextHandler={this.copyTextChanged.bind(this)}
        />
      </div>
    );
  }
}
export default App;
