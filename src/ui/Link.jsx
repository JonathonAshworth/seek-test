import React from 'react'

import history from '../utils/history.js'

const Link = ({ href, children }) => {
    const onClick = (e) => { history.push(href) }

    return (
        <a href={href} onClick={onClick}>
            {children}
        </a>
    )
}

export default Link
