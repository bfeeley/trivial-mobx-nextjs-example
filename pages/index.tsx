import React from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'
import { Fragment } from 'react'
import { useRootData } from '../hooks/useRootData'

const Home: NextPage = () => {
    const { foo } = useRootData(store => ({
        foo: store.foo.get()
    }))

    return (
        <Fragment>
            <H1>Hello world!</H1>
            <p>{foo}</p>
        </Fragment>
    )
}

const H1 = styled.h1`
    color: ${p => p.theme.colors.primary};
`;

export default Home
