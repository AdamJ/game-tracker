import { registerIconLibrary } from "@shoelace-style/shoelace";

registerIconLibrary('mana', {
  resolver: filename => `https://cdn.jsdelivr.net/npm/mana-font@latest/svg/${filename}.svg`
});

// registerIconLibrary('mana', {
//   resolver: name => {
//     const filename = name.replace(/^ms-/, '');
//     return `https://cdn.jsdelivr.net/npm/mana-font@latest/svg/${filename}.svg`;
//   },
//   mutator: svg => {
//     svg.setAttribute('fill', 'currentColor');
//     svg.setAttribute('width', '16px');
//     svg.setAttribute('height', '16px');
//   }
// });
