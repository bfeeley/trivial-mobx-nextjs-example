import React from 'react'
import Link from 'next/Link'

const linkStyle = {
    marginRight: 15
}

const Header = (): JSX.Element => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/events">
            <a style={linkStyle}>Events</a>
        </Link>
    </div>
)

export default Header
