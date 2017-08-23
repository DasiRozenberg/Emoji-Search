import emojiList from './emojiList.json';

export default function filterEmoji(searchText, maxResults) {
  return emojiList.filter((emoji) => {
      searchText = searchText.toLowerCase();
      if (emoji.title.toLowerCase().includes(searchText)) {
      return true;
    }
    if (emoji.keywords.toLowerCase().includes(searchText)) {
      return true;
    }
    return false;
  }).slice(0, maxResults);
}
