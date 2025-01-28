export class Ringtone {
  constructor(private readonly ringtoneName: string) {}

  play(): void {
    if (this.ringtoneName.startsWith("custom")){
      console.log("custom ringtone")
      global.exports.domonlib.ui("audio", this.ringtoneName)
    } else {
      PlayPedRingtone(this.ringtoneName, PlayerPedId(), true);
    }
  }

  stop(): void {
    global.exports.domonlib.ui("audiostop", null);
  }

  static isPlaying(): boolean {
    return global.exports.domonlib.ui("audioplaying", null);
  }
}
