/*
    Notes
        - I've had some fun with styling here. This is my own pattern that I developed
          a while ago for using inline styles. It's not my go-to (that would be css
          modules), but I thought I would showcase something a bit different.

        - I love the concept of inline styles. CSS is a level of abstraction
          that's of dubous usefulness when dealing with React, since the main pain
          point it solves (re-usability) is also solved by component re-use.

        - The three remaining barriers to using inline styles (in my experience) are
          composition, media queries, and pseudo-selectors (hover etc). This is a
          solution for the first. There are a few libraries that solve the second
          two but I'm not thrilled with their patterns for doing so, I think there's
          still simpler abstractions to be found.

        - Another small niggle with this approach is you can't take advantage of
          css combinators, so style props pollute your markup a bit with extra
          identifiers that don't really add much in the way of comprehension when
          reading the code. For example if you have a structure like this:
            <div style={styles.foo}> <p/> <img/> </div>
          you'd have to add another identifier to the p and img to style them. However
          this structure is trivial enough that their identity as "the children of foo"
          should be enough to understand their place in the markup. This is reflected in
          a css descendant selector i.e '.foo p' or '.foo img', but there's no
          equivalent approach in the inline style pattern

*/

import React from 'react'

// Higher order function for creating components that use inline styles
// styleFunction is a function mapping props to styles, whatever it returns
// will be injected into Component as a prop called 'styles'

// Also implements declarative style composition, similar to css modules

const resolveComposition = styles =>
    Object.entries(styles).reduce((prev, [key, value]) =>
        typeof value !== 'object' || !value.hasOwnProperty('composes')
            ? { ...prev, [key]: value }
            : { ...prev, [key]: { ...styles[value.composes], ...value } }
    , {})

export default (Component, styleFunction) => props =>
    <Component {...props} styles={resolveComposition(styleFunction(props))} />
