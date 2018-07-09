/*
    Notes

        - I tend to go with .jsx extensions even though everyone else seems to do .js these
          days. Seperate extensions are more descriptive (you'd generally expect a js file
          to contain js and run in a browser/node environment, I mean you don't name a C++
          file .o or .exe right? And whatever reason typescript has to use .ts must apply to
          JSX too, surely). Even though that's a pretty weak argument I don't see any actual
          benefits to the other way that are worth trading for.
        - I also tend to use the file extension in import statements rather than relying on
          webpack to resolve it, for the same reason (descriptiveness). Dropping extensions
          just saves a couple of characters (which means nothing since coding speed isn't
          constrained by typing speed and import statements are transpiled during the build
          process anyway)
        - These things are pretty insignificant, but they represent arcane knowledge about
          a project or environment that every developer needs to know. 1 or 2 of them
          doesn't matter, but 100 of them can floor a newcomer and make ramp up much
          harder than it needs to be. Some would disagree, but I think it makes a difference
*/

import React from 'react'

import Products from './Products.jsx'
import Cart from './Cart.jsx'

const pages = {
    '/': Products,
    '/cart': Cart,
}

const App = () => <Products />

export default App
