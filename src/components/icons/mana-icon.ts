// @ts-ignore
import { registerIconLibrary } from 'https://early.webawesome.com/webawesome@3.0.0-alpha.11/dist/webawesome.js';
import 'https://early.webawesome.com/webawesome@3.0.0-alpha.11/dist/components/icon/icon.js';

registerIconLibrary('mana', {
  // @ts-ignore
  resolver: name => {
    const filename = name.replace(/^ms-/, '');
    return `https://cdn.jsdelivr.net/npm/mana-font@latest/svg/${filename}.svg`;
  },
  // @ts-ignore
  mutator: svg => {
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('width', '16px');
    svg.setAttribute('height', '16px');
  }
});
