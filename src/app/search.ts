interface RootObject {
    tracks: Tracks;
  }
  interface Tracks {
    track: Track[];
    '@attr': Attr2;
  }
  interface Attr2 {
    country: string;
    page: string;
    perPage: string;
    totalPages: string;
    total: string;
  }
  interface Track {
    name: string;
    duration: string;
    listeners: string;
    mbid: string;
    url: string;
    streamable: Streamable;
    artist: Artist;
    image: Image[];
    '@attr': Attr;
  }
  interface Attr {
    rank: string;
  }
  interface Image {
    '#text': string;
    size: string;
  }
  interface Artist {
    name: string;
    mbid: string;
    url: string;
  }
  interface Streamable {
    '#text': string;
    fulltrack: string;
  }
 