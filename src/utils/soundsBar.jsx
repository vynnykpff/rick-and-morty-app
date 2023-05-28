export function play(sound, volume) {
    const audio = new Audio(sound)
    audio.volume = volume ? volume : 0.05;
    return audio.play();
}
