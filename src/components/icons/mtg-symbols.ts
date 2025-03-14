import { registerIconLibrary } from '@shoelace-style/shoelace';

registerIconLibrary('keyrune', {
  resolver: name => {
    const filename = name.replace(/^ss-/, '');
    return `https://cdn.jsdelivr.net/npm/keyrune@latest/svg/${filename}.svg`;
  },
  mutator: svg => {
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('width', '16px');
    svg.setAttribute('height', '16px');
  }
});
