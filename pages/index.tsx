import { NextPage } from 'next'
import styled from 'styled-components'
import { Fragment } from 'react'

const Home: NextPage = () => {
    return (
        <Fragment>
            <H1>Hello world!</H1>
        </Fragment>
    )
}

const H1 = styled.h1`
    color: purple;
`;

export default Home;
