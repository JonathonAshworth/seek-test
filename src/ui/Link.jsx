import React from 'react'

import history from '../utils/history.js'

const Link = ({ style, href, children }) => {
    const onClick = (e) => {
        e.preventDefault()
        history.push(href)
    }

    return (
        <a style={style} href={href} onClick={onClick}>
            {children}
        </a>
    )
}

export default Link
