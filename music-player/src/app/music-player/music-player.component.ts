import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  @ViewChild('audio', { static: true }) audio: ElementRef;
  @ViewChild('progressCOntainer', { static: true }) progressCOntainer: ElementRef;

  public playPause = 'play_circle_filled';
  public isPlaying = false;
  public songs = ['hey', 'summer', 'ukulele'];
  public songIndex = 2;
  public title;
  public cWidth = '0';

  constructor() { }

  ngOnInit() {
    this.loadSong(this.songs[this.songIndex])
  }

  loadSong(song) {
    this.title = song
    this.audio.nativeElement.src = `../../assets/${song}.mp3`;
  }

  onPlayBtnCLick() {
    if (!this.isPlaying) {
      this.playSong();
    } else {
      this.pauseSong();
    }
  }

  onNextBtnCLick() {
    this.songIndex++;
    this.songIndex = this.songIndex > this.songs.length - 1 ? 0 : this.songIndex;
    this.loadSong(this.songs[this.songIndex]);
    this.playSong();
  }

  onPrevBtnCLick() {
    this.songIndex--;
    this.songIndex = this.songIndex < 0 ? this.songs.length - 1 : this.songIndex;
    this.loadSong(this.songs[this.songIndex]);
    this.playSong();
  }

  playSong() {
    this.isPlaying = true;
    this.playPause = 'pause_circle_filled'
    this.audio.nativeElement.play();
  }
  pauseSong() {
    this.isPlaying = false;
    this.playPause = 'play_circle_filled';
    this.audio.nativeElement.pause();
  }

  updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    this.cWidth = `${progressPercent}%`;
  }

  // Set progress bar
  setProgress(e) {
    const width = this.progressCOntainer.nativeElement.clientWidth;
    // const width = e.clientWidth;
    const clickX = e.offsetX;
    const duration = this.audio.nativeElement.duration;
    console.log(width, clickX)

    this.audio.nativeElement.currentTime = (clickX / width) * duration;
  }
}
