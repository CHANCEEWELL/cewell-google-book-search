// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import API from '../utils/API';
import Results from '../components/Results';

function Search() {

    const [results, setResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    // useEffect(() => {
    //     console.log('results returned', results)
    // }, [results]);

    const handleSearch = async (e) => {
        e.preventDefault();
        setResults(await API.search(encodeURI(searchInput)));
    };

    const handleSave = async (book) => {
        // e.preventDefault();
        const result = await API.post(book);
        console.log(result)
    }


    return (
        <>
            <Row className='mt-5'>
                <Container style={{ border: '2px solid #000000' }} className='mx-3' fluid>
                    <h5 className='mt-3'>Book Search</h5>
                    <p>Book:</p>
                    <input value={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder='Harry Potter'></input>
                    <Button onClick={handleSearch} variant='dark' className="float-right my-3">Search</Button>
                </Container>
            </Row>
            <Row className='mt-5'>
                <Container style={{ border: '2px solid #000000' }} className='mx-3' fluid>
                    <h5 className='mt-3'>Results:</h5>
                    {results.length ? (
                        <>
                            {
                                results.map(book => {
                                    return (
                                        <Results
                                            key={book.id}
                                            title={book.title}
                                            authors={book.authors}
                                            description={book.description}
                                            image={book.image}
                                            link={book.link}
                                            btn1='Save'
                                            btnClick={handleSave}
                                        />
                                    )
                                })
                            }
                        </>
                    ) : (
                            <h5 className='text-center'>Search to get results</h5>
                        )}
                </Container>
            </Row>
        </>
    )
};

export default Search;