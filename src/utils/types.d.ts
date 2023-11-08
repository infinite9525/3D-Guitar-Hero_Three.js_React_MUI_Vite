interface AudioDataType {
  name: string;
  lane: number;
  time: number;
  velocity: number;
  duration: number;
}

interface LaneType {
  row: number;
  lane: number;
}

interface VerticalLinesType {
  position: {
    x: number;
    y: number;
    z: number;
  };
  rotation: {
    x: number;
    y: number;
    z: number;
  };
  radius: number;
  length: number;
  color: string;
}

interface MusicDataType {
  title?: string;
  description?: number;
  beginnerMusic: string;
  intermediateMusic: string;
  advancedMusic: string;
  beginnerData: any;
  intermediateData: any;
  advancedData: any;
  bgSong: string;
  bgImage: string;
  delay: number;
  volume: number;
}

interface CurrentMusicDataType {
  title?: string;
  description?: number;
  midMusic: string;
  midData: any;
  bgSong: string;
  bgImage: string;
  delay: number;
  volume: number;
}

interface CameraPropertyType {
  fov: number;
  position: [number, number, number];
}

interface jsonType {
  name: string;
  midi: number[];
  time: number;
  duration: number;
}
