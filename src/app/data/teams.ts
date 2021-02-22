import { Team } from '../models/team';
import * as Players from '../data/players';

export const TEAMS: Team[] = [
    {
        name: 'Kissapässit',
        strength: 1000,
        players: Players.KISSAPÄSSIT_PLAYERS
    },
    {
        name: 'Simpukat',
        strength: 1000,
        players: Players.SIMPUKAT_PLAYERS
    },
    {
        name: 'Myrrysmiehet',
        strength: 1000,
        players: Players.MYRRYSMIEHET_PLAYERS
    },
    {
        name: 'Väen Puhti',
        strength: 1000,
        players: Players.VÄEN_PUHTI_PLAYERS
    },
    {
        name: 'Sorkat',
        strength: 1000,
        players: Players.SORKAT_PLAYERS
    },
    {
        name: 'Kanuuna',
        strength: 1000,
        players: Players.KANUUNA_PLAYERS
    },
    {
        name: 'Sähisijät',
        strength: 1000,
        players: Players.SÄHISIJÄT_PLAYERS
    },
    {
        name: 'Kärpässienet',
        strength: 1000,
        players: Players.KÄRPÄSSIENET_PLAYERS
    }
    // Kissakalat, Jäämaisterit, Jäärengit, Tiiliskivet
];
