import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';

registerIconLibrary('keyrune', {
  resolver: name => {
    const filename = name.replace(/^ss-/, '');
    return `https://cdn.jsdelivr.net/npm/keyrune@latest/svg/${filename}.svg`;
  },
  mutator: svg => {
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('width', '1rem');
    svg.setAttribute('height', '1rem');
  }
});
