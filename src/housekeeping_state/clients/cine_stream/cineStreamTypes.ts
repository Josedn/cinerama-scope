export interface FileStats {
    name: string,
    length: number,
    index: number,
}

export interface SwarmStats {
    name: string | null,
    infoHash: string,
    totalLength: number,
    downloaded: number,
    uploaded: number,
    downloadSpeed: number,
    uploadSpeed: number,
    totalPeers: number,
    activePeers: number,
    idleTime: number,
    interested: boolean,
    completed: boolean,
    hotswaps: number,
    verifiedPieces: number,
    invalidPieces: number,
    totalPieces?: number,
    downloadedPercentage: number,
    activeStreams: number,
    files: FileStats[],
}