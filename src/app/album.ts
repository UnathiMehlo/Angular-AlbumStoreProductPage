import { Track } from './track'

export interface Album {
    name: string;
    releadeDate: string;
    coverImage: string;
    tracks: Track[]
}
