This is a starter template for [Learn Next.js](https://nextjs.org/learn).

### Some comments

I've only explored a tiny % of what this framework brings, but the convenience of almost everything I've seen so far has blown my mind.
From the Image component serving you everything you need for an image from the getgo with its automatic image optimization (lazyloading, size optimization according to screen size, visual stability, sizing image to avoid layout shifts when images load, among other things), and this is only ONE component (!!!!). Other things such as having its own Head component to incorporate metadata (making a lot of sense given how server-side-render-centric Next is supposed to be), or how convenient and easy routing seems to be, where all you need to do is add your 'Page' to the pages folder, and boom, the route is automatically there for that file -- if you visit this route, this also won't normally trigger a whole reload and serve an entirely new HTML file, it just loads it like a regular React component within a SPA. (crazy, wow)

The way it supports most popular ways to write CSS, and (ESPECIALLY) how comfortable the support for writing regular good ol' CSS is, making it super easy to have a CSS module for each page while making it so two CSS classes will never share a name. WHEW!

Learned about "utility-first" approach to CSS and styling in general. Kinda accidentally knew and used this approach by using Tailwind, since it's what TW essentially does.
Can give images the 'priority' tag to NOT lazy load them, every other img is lazy loaded by default.
