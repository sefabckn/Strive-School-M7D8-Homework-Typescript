
import { Container, Row, Col, Form } from 'react-bootstrap';

import { useState } from 'react';
import { SearchedSongs } from '../types/searchedSong'
import SingleSong from './SingleSong';

const MainSearch = () => {

    const [query, setQuery] = useState('')
    const [songs, setSongs] = useState<SearchedSongs[]>([])

    const baseURL = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            let response = await fetch(baseURL + query);
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                setSongs(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e: any) => {
        setQuery(e.target.value)
    }

    return (
        <>
            <Container>
                <Row>
                    <Col xs={10} className="mx-auto my-3">
                        <h1>Music Search</h1>
                    </Col>
                    <Col xs={10} className="mx-auto">
                        <Form onSubmit={handleSubmit}>
                            <Form.Control
                                type="search"
                                value={query}
                                onChange={handleChange}
                                placeholder="type and press Enter"
                            />
                        </Form>
                    </Col>
                </Row>
                <Row>
                    {
                        songs.map((song)=>{
                            <Col>
                                <SingleSong  song={song} key={song.id}/>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default MainSearch