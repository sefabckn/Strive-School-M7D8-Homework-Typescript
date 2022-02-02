
import {Card, Button} from 'react-bootstrap'
import {SearchedSongs} from '../types/searchedSong'

interface SingleSongProps {
    song: SearchedSongs
}

const SingleSong = ({song}: SingleSongProps) => {
    return (

        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={song.artist.picture_medium} />
                <Card.Body>
                    <Card.Title>{song.title_short}</Card.Title>
                    <Card.Text>
                     {song.artist.name}
                    </Card.Text>
                    <Button variant="info">Go To Music</Button>
                </Card.Body>
            </Card>
        </>
    )
}


export default SingleSong;