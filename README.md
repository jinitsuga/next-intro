This is a starter template for [Learn Next.js](https://nextjs.org/learn).

### Some comments

I've only explored a tiny % of what this framework brings, but the convenience of almost everything I've seen so far has blown my mind.
From the Image component serving you everything you need for an image from the getgo with its automatic image optimization (lazyloading, size optimization according to screen size, visual stability, sizing image to avoid layout shifts when images load, among other things), and this is only ONE component (!!!!). Other things such as having its own Head component to incorporate metadata (making a lot of sense given how server-side-render-centric Next is supposed to be), or how convenient and easy routing seems to be, where all you need to do is add your 'Page' to the pages folder, and boom, the route is automatically there for that file -- if you visit this route, this also won't normally trigger a whole reload and serve an entirely new HTML file, it just loads it like a regular React component within a SPA. (crazy, wow)

The way it supports most popular ways to write CSS, and (ESPECIALLY) how comfortable the support for writing regular good ol' CSS is, making it super easy to have a CSS module for each page while making it so two CSS classes will never share a name. WHEW!

Learned about "utility-first" approach to CSS and styling in general. Kinda accidentally knew and used this approach by using Tailwind, since it's what TW essentially does.
Can give images the 'priority' tag to NOT lazy load them, every other img is lazy loaded by default.
I had already taken a look at some videos about how Next works (thanks Theo) but hadn't really dove that deep into Static Generation vs Server-side Rendering. In all honesty, I thought Static Generation just meant regularly loading the page on the client side as one has been doing forever. This was NOT the case!! It appears that Next ALWAYS pre-renders its HTML, the key difference being that Staticly Generated pages are only generated once, and the same HTML is reused on each request, where as SSR'd pages are re-generated on every request from the user.
This makes it seemingly obvious that we'd wanna try to make it so our pages on our site or app are Statically Generated as much as we can.
After this comes Hydration, which works similarly for both types of pre-rendering. (The generation of react components and interactivity of the site).
"Can I pre-render this page ahead of the user's request?" -- if the answer is yes, then we should use static generation. In other words, if the page is not going to change according to whatever the user requests, statically generate it, otherwise, if whatever will be on the page depends on the user's request (like the user sending some sort of info, etc), the rendering should be handled Server-Side. Examples of this could be pages that need to show frequently updated data, or pages which data changes on every request. When we decide on Server-Side rendering, another posing question is: should we render it server side, or leave it up to Javascript on the client-side to update the data? At this point I can't really answer this with precision.
For dynamic routes, the array we return from the function that will establish the filenames, needs to be an array of objects that contain a params property, with the "id" key in it (or whatever dynamic [name] we used for our dynamic routes) and its value being the file's name.

All the setup done to establish dynamic routes seems a little overly complicated when I compare it to something like React Router, but may be just me very used to React-Router while being completely new to Next's dynamic routes.

Dynamic routes recap: If I want to generate static routes, for simplicity's sake lets say /posts/{id} where id is dynamic (post's name), then:

- We'll need a page at /posts/[id].jsx (square brackets means dynamic)
- this [id] page will need a React component to render the contents, and the usage of getStaticPaths (should return array of possible values for [id])
- our [id] page will also need a getStaticProps functions, which will the necessary data depending on the value of "id".
- This process includes some node.js shenaningans that I hadn't seen in a while, using the filesystem (fs) to read some filenames and contents,
- as well as using the path system, which I also hadn't seen in a while... but feels a little more intuitive.
  All in all it doesn't seem that complicated but the lack of practice certainly makes me feel like it i. I can't wait to get my hands dirty with Next while building some projects that I've had in mind.
