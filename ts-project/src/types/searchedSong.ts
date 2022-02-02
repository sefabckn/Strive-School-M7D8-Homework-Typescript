export interface SearchedSongs {
    id: number,
    title_short: string,
    link: string ,
    artist: {
        id: number,
        name: string,
        link: string,
        picture_small: string,
        picture_medium: string,
    
    },
    album: {
        id: number,
        title:string,
        cover_small: string,
        cover_medium: string,
        tracklist: string,
}
}