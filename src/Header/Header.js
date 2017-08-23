import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="component-header">
        <span className="emoji-symbol">
          😸
        </span>
        Emoji Search
        <span className="emoji-symbol">
          😺
        </span>
      </header>
    );
  }
}
export default Header;
