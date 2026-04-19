import { Wave } from "./wave.js";

export class WaveGroup {
    constructor() {
        this.waveCount = 4;
        this.wavePoints = 5;

        this.waves = [];

        this.color = ["rgba(0,199,235,0.4)", "rgba(0,146,199,0.4)", "rgba(0,87,158,0.4)"]

        for(let i = 0; i < this.waveCount; i++) {
            const wave = new Wave(
                i,
                this.wavePoints,
                this.color[i]
            );

            this.waves[i] = wave;
        }
    }

    resize(stageWidth, stageHeight) {
        for(let i = 0; i < this.waveCount; i++) {
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx, stageWidth, stageHeight) {
        for(let i = 0; i < this.waveCount; i++) {
            const wave = this.waves[i];
            wave.draw(ctx, stageWidth, stageHeight);
        }
    }
}