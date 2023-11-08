import FreedomOfThePressBeginnerData from '../jsons/Freedom Of The Press/beginner.json';
import FreedomOfThePressIntermediateData from '../jsons/Freedom Of The Press/intermediate.json';
import FreedomOfThePressAdvancedData from '../jsons/Freedom Of The Press/advanced.json';
import FreedomOfThePressBeginnerMusic from '../assets/songs/Freedom Of The Press/FOTP Midi Git Beginner.mp3';
import FreedomOfThePressIntermediateMusic from '../assets/songs/Freedom Of The Press/FOTP Midi Git Intermediate.mp3';
import FreedomOfThePressAdvancedMusic from '../assets/songs/Freedom Of The Press/FOTP Midi Git Advanced.mp3';
import FreedomOfThePressBgSong from '../assets/songs/Freedom Of The Press/Mp3 Freedom Of The Press.mp3';
import FreedomOfThePressBgSongFlac from '../assets/songs/Freedom Of The Press/Flac Freedom Of The Press.flac';
import FreedomOfThePressBgImage from '../assets/songs/Freedom Of The Press/Freedom Of The Press.jpg';

import JourneyIntoTheUnknownBeginnerData from '../jsons/Journey Into The Unknown/beginner.json';
import JourneyIntoTheUnknownIntermediateData from '../jsons/Journey Into The Unknown/intermediate.json';
import JourneyIntoTheUnknownAdvancedData from '../jsons/Journey Into The Unknown/advanced.json';
import JourneyIntoTheUnknownBeginnerMusic from '../assets/songs/Journey Into The Unknown/Midi Beginner JITU.mp3';
import JourneyIntoTheUnknownIntermediateMusic from '../assets/songs/Journey Into The Unknown/Midi Intermediate JITU.mp3';
import JourneyIntoTheUnknownAdvancedMusic from '../assets/songs/Journey Into The Unknown/Midi Advanced JITU.mp3';
import JourneyIntoTheUnknownBgSong from '../assets/songs/Journey Into The Unknown/Mp3 A Journey Into The Unknown.mp3';
import JourneyIntoTheUnknownBgSongFlac from '../assets/songs/Journey Into The Unknown/Flac Journey Into The Unknown.flac';
import JourneyIntoTheUnknownBgImage from '../assets/songs/Journey Into The Unknown/Mentalist_Cover_Journey_RGB.jpg';

import DentalistBeginnerData from '../jsons/Dentalist/beginner.json';
import DentalistIntermediateData from '../jsons/Dentalist/intermediate.json';
import DentalistAdvancedData from '../jsons/Dentalist/advanced.json';
import DentalistBeginnerMusic from '../assets/songs/Dentalist/Midi Beginner Dentalist.mp3';
import DentalistIntermediateMusic from '../assets/songs/Dentalist/Midi Intermediate Dentalist.mp3';
import DentalistAdvancedMusic from '../assets/songs/Dentalist/Midi Advanced Dentalist.mp3';
import DentalistBgSong from '../assets/songs/Dentalist/Mp3 Dentalist.mp3';
import DentalistBgSongFlac from '../assets/songs/Dentalist/Flac Dentalist.flac';
import DentalistBgImage from '../assets/songs/Dentalist/Mentalist_Cover_Journey_RGB.jpg';

import SolutionRevolutionBeginnerData from '../jsons/Solution Revolution/beginner.json';
import SolutionRevolutionIntermediateData from '../jsons/Solution Revolution/intermediate.json';
import SolutionRevolutionAdvancedData from '../jsons/Solution Revolution/advanced.json';
import SolutionRevolutionBeginnerMusic from '../assets/songs/Solution Revolution/SR Midi Gits Beginner.mp3';
import SolutionRevolutionIntermediateMusic from '../assets/songs/Solution Revolution/SR Midi Gits Intermediate.mp3';
import SolutionRevolutionAdvancedMusic from '../assets/songs/Solution Revolution/SR Midi Gits Advanced.mp3';
import SolutionRevolutionBgSong from '../assets/songs/Solution Revolution/Mp3 Solution Revolution.mp3';
import SolutionRevolutionBgSongFlac from '../assets/songs/Solution Revolution/Flac Solution Revolution.flac';
import SolutionRevolutionBgImage from '../assets/songs/Solution Revolution/Mentalist_Cover_Empire_rgb.jpg';

import StairsOfRagusaBeginnerData from '../jsons/Stairs Of Ragusa/beginner.json';
import StairsOfRagusaIntermediateData from '../jsons/Stairs Of Ragusa/intermediate.json';
import StairsOfRagusaAdvancedData from '../jsons/Stairs Of Ragusa/advanced.json';
import StairsOfRagusaBeginnerMusic from '../assets/songs/Stairs Of Ragusa/Stairs Beginner Midi.mp3';
import StairsOfRagusaIntermediateMusic from '../assets/songs/Stairs Of Ragusa/Stairs Intermediate Midi.mp3';
import StairsOfRagusaAdvancedMusic from '../assets/songs/Stairs Of Ragusa/Stairs Advanced Midi.mp3';
import StairsOfRagusaBgSong from '../assets/songs/Stairs Of Ragusa/Mp3 Stairs Of Ragusa.mp3';
import StairsOfRagusaBgSongFlac from '../assets/songs/Stairs Of Ragusa/Flac Stairs Of Ragusa.flac';
import StairsOfRagusaBgImage from '../assets/songs/Stairs Of Ragusa/Mentalist_Cover_Empire_rgb.jpg';

export const musicList: MusicDataType[] = [
  {
    title: 'Freedom Of The Press (mp3)',
    description: 365,
    beginnerMusic: FreedomOfThePressBeginnerMusic,
    intermediateMusic: FreedomOfThePressIntermediateMusic,
    advancedMusic: FreedomOfThePressAdvancedMusic,
    beginnerData: FreedomOfThePressBeginnerData,
    intermediateData: FreedomOfThePressIntermediateData,
    advancedData: FreedomOfThePressAdvancedData,
    bgSong: FreedomOfThePressBgSong,
    bgImage: FreedomOfThePressBgImage,
    delay: 2.94,
    volume: 0.09,
  },
  {
    title: 'Freedom Of The Press (flac)',
    description: 365,
    beginnerMusic: FreedomOfThePressBeginnerMusic,
    intermediateMusic: FreedomOfThePressIntermediateMusic,
    advancedMusic: FreedomOfThePressAdvancedMusic,
    beginnerData: FreedomOfThePressBeginnerData,
    intermediateData: FreedomOfThePressIntermediateData,
    advancedData: FreedomOfThePressAdvancedData,
    bgSong: FreedomOfThePressBgSongFlac,
    bgImage: FreedomOfThePressBgImage,
    delay: 2.94,
    volume: 0.3,
  },
  {
    title: 'Journey Into The Unknown (mp3)',
    description: 332,
    beginnerMusic: JourneyIntoTheUnknownBeginnerMusic,
    intermediateMusic: JourneyIntoTheUnknownIntermediateMusic,
    advancedMusic: JourneyIntoTheUnknownAdvancedMusic,
    beginnerData: JourneyIntoTheUnknownBeginnerData,
    intermediateData: JourneyIntoTheUnknownIntermediateData,
    advancedData: JourneyIntoTheUnknownAdvancedData,
    bgSong: JourneyIntoTheUnknownBgSong,
    bgImage: JourneyIntoTheUnknownBgImage,
    delay: 2.62,
    volume: 0.1,
  },
  {
    title: 'Journey Into The Unknown (flac)',
    description: 332,
    beginnerMusic: JourneyIntoTheUnknownBeginnerMusic,
    intermediateMusic: JourneyIntoTheUnknownIntermediateMusic,
    advancedMusic: JourneyIntoTheUnknownAdvancedMusic,
    beginnerData: JourneyIntoTheUnknownBeginnerData,
    intermediateData: JourneyIntoTheUnknownIntermediateData,
    advancedData: JourneyIntoTheUnknownAdvancedData,
    bgSong: JourneyIntoTheUnknownBgSongFlac,
    bgImage: JourneyIntoTheUnknownBgImage,
    delay: 2.62,
    volume: 0.4,
  },
  {
    title: 'Dentalist (mp3)',
    description: 240,
    beginnerMusic: DentalistBeginnerMusic,
    intermediateMusic: DentalistIntermediateMusic,
    advancedMusic: DentalistAdvancedMusic,
    beginnerData: DentalistBeginnerData,
    intermediateData: DentalistIntermediateData,
    advancedData: DentalistAdvancedData,
    bgSong: DentalistBgSong,
    bgImage: DentalistBgImage,
    delay: 2.57,
    volume: 0.09,
  },
  {
    title: 'Dentalist (flac)',
    description: 240,
    beginnerMusic: DentalistBeginnerMusic,
    intermediateMusic: DentalistIntermediateMusic,
    advancedMusic: DentalistAdvancedMusic,
    beginnerData: DentalistBeginnerData,
    intermediateData: DentalistIntermediateData,
    advancedData: DentalistAdvancedData,
    bgSong: DentalistBgSongFlac,
    bgImage: DentalistBgImage,
    delay: 2.57,
    volume: 0.09,
  },
  {
    title: 'Solution Revolution (mp3)',
    description: 269,
    beginnerMusic: SolutionRevolutionBeginnerMusic,
    intermediateMusic: SolutionRevolutionIntermediateMusic,
    advancedMusic: SolutionRevolutionAdvancedMusic,
    beginnerData: SolutionRevolutionBeginnerData,
    intermediateData: SolutionRevolutionIntermediateData,
    advancedData: SolutionRevolutionAdvancedData,
    bgSong: SolutionRevolutionBgSong,
    bgImage: SolutionRevolutionBgImage,
    delay: 2.84,
    volume: 0.09,
    // volume: 0.06,
  },
  {
    title: 'Solution Revolution (flac)',
    description: 269,
    beginnerMusic: SolutionRevolutionBeginnerMusic,
    intermediateMusic: SolutionRevolutionIntermediateMusic,
    advancedMusic: SolutionRevolutionAdvancedMusic,
    beginnerData: SolutionRevolutionBeginnerData,
    intermediateData: SolutionRevolutionIntermediateData,
    advancedData: SolutionRevolutionAdvancedData,
    bgSong: SolutionRevolutionBgSongFlac,
    bgImage: SolutionRevolutionBgImage,
    delay: 2.84,
    volume: 0.25,
  },
  {
    title: 'Stairs Of Ragusa (mp3)',
    description: 249,
    beginnerMusic: StairsOfRagusaBeginnerMusic,
    intermediateMusic: StairsOfRagusaIntermediateMusic,
    advancedMusic: StairsOfRagusaAdvancedMusic,
    beginnerData: StairsOfRagusaBeginnerData,
    intermediateData: StairsOfRagusaIntermediateData,
    advancedData: StairsOfRagusaAdvancedData,
    bgSong: StairsOfRagusaBgSong,
    bgImage: StairsOfRagusaBgImage,
    delay: 2.95,
    // volume: 0.08,
    volume: 0.1,
  },
  {
    title: 'Stairs Of Ragusa (flac)',
    description: 249,
    beginnerMusic: StairsOfRagusaBeginnerMusic,
    intermediateMusic: StairsOfRagusaIntermediateMusic,
    advancedMusic: StairsOfRagusaAdvancedMusic,
    beginnerData: StairsOfRagusaBeginnerData,
    intermediateData: StairsOfRagusaIntermediateData,
    advancedData: StairsOfRagusaAdvancedData,
    bgSong: StairsOfRagusaBgSongFlac,
    bgImage: StairsOfRagusaBgImage,
    delay: 2.95,
    volume: 0.35,
  },
];
