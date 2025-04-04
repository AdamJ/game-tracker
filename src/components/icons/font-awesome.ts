
import { registerIconLibrary } from "@shoelace-style/shoelace";

  registerIconLibrary('fa', {
    resolver: name => {
      const filename = name.replace(/^fa[rbs]-/, '');
      let folder = 'regular';
      if (name.substring(0, 4) === 'fas-') folder = 'solid';
      if (name.substring(0, 4) === 'fab-') folder = 'brands';
      return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.7.2/svgs/${folder}/${filename}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
