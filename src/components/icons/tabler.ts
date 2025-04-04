import { registerIconLibrary } from "@shoelace-style/shoelace";

registerIconLibrary('tabler', {
  resolver: name => `https://cdn.jsdelivr.net/npm/@tabler/icons@1.68.0/icons/${name}.svg`
});

// library="tabler" name="alert-triangle"
