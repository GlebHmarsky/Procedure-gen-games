/*
 * These are webpack-specific ways to solve import problems.
 * Webpack allows us to js-`import` any file and use its contents
 * (especially useful to open html files to append them somewhere to another html)
 *
 * But we need to let typescript know what is inside. Almost always inside is just
 * a simple string of data, and for now we type it as `any`.
 */

declare module '*.html' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.json' {
  const content: any;
  export default content;
}
declare module '*.mp3' {
  const content: any;
  export default content;
}
