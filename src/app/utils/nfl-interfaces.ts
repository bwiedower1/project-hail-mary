export interface NFLData {
    leagues: League[];
    season: Season;
    week: Week;
    events: EventInfo[];
}

export interface League {
    id: string;
    uid: string;
    name: string;
    abbreviation: string;
    slug: string;
    season: LeagueSeason;
    logos: Logo[];
    calendarType: string;
    calendarIsWhitelist: boolean;
    calendarStartDate: string;
    calendarEndDate: string;
    calendar: CalendarEntry[];
}

export interface LeagueSeason {
    year: number;
    startDate: string;
    endDate: string;
    displayName: string;
    type: SeasonType;
}

export interface SeasonType {
    id: string;
    type: number;
    name: string;
    abbreviation: string;
}

export interface Logo {
    href: string;
    width: number;
    height: number;
    alt: string;
    rel: string[];
    lastUpdated: string;
}

export interface CalendarEntry {
    label: string;
    value: string;
    startDate: string;
    endDate: string;
    entries: CalendarWeek[];
}

export interface CalendarWeek {
    label: string;
    alternateLabel: string;
    detail: string;
    value: string;
    startDate: string;
    endDate: string;
}

export interface Season {
    type: number;
    year: number;
}

export interface Week {
    number: number;
}

export interface EventInfo {
    id: string;
    uid: string;
    date: string;
    name: string;
    shortName: string;
    season: SeasonDetails;
    week: Week;
    competitions: Competition[];
    links: Link[];
    status: Status;
}

export interface SeasonDetails {
    year: number;
    type: number;
    slug: string;
}

export interface Competition {
    id: string;
    uid: string;
    date: string;
    attendance: number;
    type: CompetitionType;
    timeValid: boolean;
    neutralSite: boolean;
    conferenceCompetition: boolean;
    playByPlayAvailable: boolean;
    recent: boolean;
    venue: Venue;
    competitors: Competitor[];
    notes: any[];
    status: Status;
    broadcasts: Broadcast[];
    format: Format;
    tickets: Ticket[];
    startDate: string;
    broadcast: string;
    geoBroadcasts: GeoBroadcast[];
    odds: Odds[];
    highlights: any[];
}

export interface CompetitionType {
    id: string;
    abbreviation: string;
}

export interface Venue {
    id: string;
    fullName?: string;
    address?: Address;
    indoor?: boolean;
}

export interface Address {
    city: string;
    state: string;
    country: string;
}

export interface Competitor {
    id: string;
    uid: string;
    type: string;
    order: number;
    homeAway: string;
    team: Team;
    score: string;
    statistics: any[];
    records: Record[];
    leaders?: Leader[];
    winner?: boolean;
}

export interface Team {
    id: string;
    uid: string;
    location: string;
    name: string;
    abbreviation: string;
    displayName: string;
    shortDisplayName: string;
    color: string;
    alternateColor: string;
    isActive: boolean;
    venue: { id: string };
    links: Link[];
    logo: string;
}

export interface Link {
    language?: string;
    rel: string[];
    href: string;
    text?: string;
    shortText?: string;
    isExternal?: boolean;
    isPremium?: boolean;
    tracking?: Tracking;
}

export interface Tracking {
    campaign: string;
    tags: { [key: string]: string | number };
}

export interface Record {
    name: string;
    abbreviation?: string;
    type: string;
    summary: string;
}

export interface Leader {
    name: string;
    displayName: string;
    shortDisplayName: string;
    abbreviation: string;
    leaders: LeaderDetails[];
}

export interface LeaderDetails {
    displayValue: string;
    value: number;
    athlete: Athlete;
    team: { id: string };
}

export interface Athlete {
    id: string;
    fullName: string;
    displayName: string;
    shortName: string;
    links: Link[];
    headshot: string;
    jersey: string;
    position: { abbreviation: string };
    team: { id: string };
    active: boolean;
}

export interface Status {
    clock: number;
    displayClock: string;
    period: number;
    type: StatusType;
    isTBDFlex?: boolean;
}

export interface StatusType {
    id: string;
    name: string;
    state: string;
    completed: boolean;
    description: string;
    detail: string;
    shortDetail: string;
}

export interface Broadcast {
    market: string;
    names: string[];
}

export interface Format {
    regulation: { periods: number };
}

export interface Ticket {
    summary: string;
    numberAvailable: number;
    links: { href: string }[];
}

export interface GeoBroadcast {
    type: GeoType;
    market: GeoMarket;
    media: GeoMedia;
    lang: string;
    region: string;
}

export interface GeoType {
    id: string;
    shortName: string;
}

export interface GeoMarket {
    id: string;
    type: string;
}

export interface GeoMedia {
    shortName: string;
    logo?: string;
    darkLogo?: string;
}

export interface Odds {
    provider: OddsProvider;
    details: string;
    overUnder: number;
    spread: number;
    awayTeamOdds: TeamOdds;
    homeTeamOdds: TeamOdds;
    links: Link[];
    moneyline: Moneyline;
    pointSpread: PointSpread;
    total: Total;
    link: Link;
    header: OddsHeader;
}

export interface OddsProvider {
    id: string;
    name: string;
    priority: number;
    logos: OddsLogo[];
}

export interface OddsLogo {
    href: string;
    rel: string[];
}

export interface TeamOdds {
    favorite: boolean;
    underdog: boolean;
    moneyLine?: number;
    spreadOdds: number;
    team: TeamShort;
    favoriteAtOpen: boolean;
}

export interface TeamShort {
    id: string;
    abbreviation: string;
    displayName: string;
    shortDisplayName: string;
}

export interface Moneyline {
    displayName: string;
    shortDisplayName: string;
    home: MoneylineDetails;
    away: MoneylineDetails;
}

export interface MoneylineDetails {
    close: MoneylineCloseOpen;
    open: MoneylineCloseOpen;
}

export interface MoneylineCloseOpen {
    odds: string;
    link?: Link;
}

export interface PointSpread {
    displayName: string;
    shortDisplayName: string;
    home: PointSpreadDetails;
    away: PointSpreadDetails;
}

export interface PointSpreadDetails {
    close: PointSpreadCloseOpen;
    open: PointSpreadCloseOpen;
}

export interface PointSpreadCloseOpen {
    line: string;
    odds: string;
    link?: Link;
}

export interface Total {
    displayName: string;
    shortDisplayName: string;
    over: TotalDetails;
    under: TotalDetails;
}

export interface TotalDetails {
    close: TotalCloseOpen;
    open: TotalCloseOpen;
}

export interface TotalCloseOpen {
    line: string;
    odds: string;
    link?: Link;
}

export interface OddsHeader {
    logo: OddsHeaderLogo;
    text: string;
}

export interface OddsHeaderLogo {
    dark: string;
    light: string;
}
