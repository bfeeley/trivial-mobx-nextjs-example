import Link from './link'

const linkStyle = {
    marginRight: 15
}

const Header = () => (
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
