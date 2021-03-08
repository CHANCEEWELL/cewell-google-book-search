import React, { useState, useEffect } from 'react';
// import React from 'react';
// import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import Results from '../components/Results';
import API from '../utils/API';


function Saved() {

    const [savedBooks, setSavedBooks] = useState([]);

    const handleDelete = async (book) => {
        console.log(book);
        await API.delete(book.id);
        async function fetchData() {
            const books = await API.get()
            setSavedBooks(books.data);
        }
        fetchData();
        console.log(savedBooks)
    }

    // useEffect(() => {
    //     console.log(savedBooks)
    // }, [savedBooks]);

    useEffect(() => {
        async function fetchData() {
            const books = await API.get()
            setSavedBooks(books.data);
        }
        fetchData();
        console.log(savedBooks)
    }, []);

    return (
        <>
            <Row className='mt-5'>
                <Container style={{ border: '2px solid #000000' }} className='mx-3' fluid>
                    <h5 className='mt-3'>Saved Books</h5>
                    {savedBooks.length ? (
                        <>
                            {
                                savedBooks.map(book => {
                                    console.log(book)
                                    return (
                                        <Results
                                            key={book._id}
                                            title={book.title}
                                            authors={book.authors}
                                            description={book.description}
                                            image={book.image}
                                            link={book.link}
                                            id={book._id}
                                            btn1='Delete'
                                            btnClick={handleDelete}
                                        />
                                    )
                                })
                            }
                        </>
                    ) : (
                            <h5 className='text-center'>Save some books and check back after</h5>
                        )}
                </Container>
            </Row>
        </>
    )
};

export default Saved;
