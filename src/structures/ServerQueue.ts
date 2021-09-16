import { SongManager } from "../utils/SongManager";
import { AudioPlayer, AudioPlayerStatus, VoiceConnection } from "@discordjs/voice";
import { TextBasedChannels } from "discord.js";

export class ServerQueue {
    public loopMode: 0 | 1 | 2 = 0;
    public connection: VoiceConnection|null = null;
    public player: AudioPlayer|null = null;
    public readonly songs = new SongManager();

    public constructor(public readonly textChannel: TextBasedChannels) {}

    public set playing(value: boolean) {
        if (value) {
            this.player?.pause();
        } else {
            this.player?.unpause();
        }
    }

    public get playing(): boolean {
        return this.player?.state.status === AudioPlayerStatus.Playing;
    }
}