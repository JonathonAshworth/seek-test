# Coding Test

## Build Instructions

Run `yarn` then `yarn run dev-server`

## Notes

- I've had some fun with the styling here, this is a pattern I came up with to make inline styles a bit more sane (it implements style composition similar to CSS Modules), it still has a few major hurdles to overcome before it's usable in production though
- In a real app, all the static data (like the product types etc) would obviously be pulled from a back-end rather than hard coded into the front-end. If I was spending a bit more time on this I'd refactor so as to show that process a bit better
- I've gone for basically zero styling outside of basic positioning to save some time. I'm pretty comfortable implementing almost anything using css/svg, having done lots of work with graphs and visualisations in the past. Most of that stuff is very time consuming though so I can't think of a good way to show it with this task. I'm happy to show some past examples in person!
- Realised while building this that Parcel has some problems with caching. You may have to delete the .cache folder or re-run the dev server a few times to get it working
- I chose not to use Flow or TS for this to save a bit of time since it's such a small task. I'm comfortable with both typed and un-typed JS, although when working on an un-typed codebase I like to comment-type anything that's non-obvious when quickly scanning a file. You can see some of that in the `data.js` file
