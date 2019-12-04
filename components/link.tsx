import React from 'react'
import Link from 'next/Link'
import { useRouter } from 'next/router'

type Props = {
    children: any;
    href: string;
}

export default (props: Props) => {
    const router = useRouter()
    const { children, href } = props;

    let className = children.props.className || ''
    if (router.pathname === href) {
        className = `${className} selected`
    }

    return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}
