import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default function Header() {
    return (
        <>
            <Row>
                <Container fluid className='text-center'>
                    <h1>(React) Google Books Search</h1>
                </Container>
            </Row>
            <Row>
                <Container fluid className='text-center'>
                    <h3>Search for and Save Books of Interest</h3>
                </Container>
            </Row>
        </>
    )
}
