export default function laneCalculate(mark: string) {
  const tempMark = mark.toUpperCase();
  const value: LaneType = {
    row: 0,
    lane: 1,
  };

  if (
    tempMark === 'E1' ||
    tempMark === 'A1' ||
    tempMark === 'D1' ||
    tempMark === 'G2' ||
    tempMark === 'B2' ||
    tempMark === 'E3' ||
    tempMark === 'A3' ||
    tempMark === 'D3' ||
    tempMark === 'G4' ||
    tempMark === 'B4' ||
    tempMark === 'E5'
  ) {
    value.lane = 1;
  }
  if (
    tempMark === 'F1' ||
    tempMark === 'A#1' ||
    tempMark === 'D#1' ||
    tempMark === 'G#2' ||
    tempMark === 'C2' ||
    tempMark === 'F3' ||
    tempMark === 'A#3' ||
    tempMark === 'D#3' ||
    tempMark === 'G#4' ||
    tempMark === 'C4'
  ) {
    value.lane = 2;
  }
  if (
    tempMark === 'F#1' ||
    tempMark === 'B1' ||
    tempMark === 'E2' ||
    tempMark === 'A2' ||
    tempMark === 'C#2' ||
    tempMark === 'F#3' ||
    tempMark === 'B3' ||
    tempMark === 'E4' ||
    tempMark === 'A4' ||
    tempMark === 'C#4'
  ) {
    value.lane = 3;
  }
  if (
    tempMark === 'G1' ||
    tempMark === 'C1' ||
    tempMark === 'F2' ||
    tempMark === 'A#2' ||
    tempMark === 'D2' ||
    tempMark === 'G3' ||
    tempMark === 'C3' ||
    tempMark === 'F4' ||
    tempMark === 'A#4' ||
    tempMark === 'D4'
  ) {
    value.lane = 4;
  }
  if (
    tempMark === 'G#1' ||
    tempMark === 'C#1' ||
    tempMark === 'F#2' ||
    tempMark === 'D#2' ||
    tempMark === 'G#3' ||
    tempMark === 'C#3' ||
    tempMark === 'F#4' ||
    tempMark === 'D#4'
  ) {
    value.lane = 5;
  }
  if (
    tempMark === 'E3' ||
    tempMark === 'F3' ||
    tempMark === 'F#3' ||
    tempMark === 'G3' ||
    tempMark === 'G#3' ||
    tempMark === 'E5'
  ) {
    value.row = 1;
  }
  if (
    tempMark === 'B2' ||
    tempMark === 'C2' ||
    tempMark === 'C#2' ||
    tempMark === 'D2' ||
    tempMark === 'D#2' ||
    tempMark === 'B4' ||
    tempMark === 'C4' ||
    tempMark === 'C#4' ||
    tempMark === 'D4' ||
    tempMark === 'D#4'
  ) {
    value.row = 2;
  }
  if (
    tempMark === 'G2' ||
    tempMark === 'G#2' ||
    tempMark === 'A2' ||
    tempMark === 'A#2' ||
    tempMark === 'G4' ||
    tempMark === 'G#4' ||
    tempMark === 'A4' ||
    tempMark === 'A#4'
  ) {
    value.row = 3;
  }
  if (
    tempMark === 'D1' ||
    tempMark === 'D#1' ||
    tempMark === 'E2' ||
    tempMark === 'F2' ||
    tempMark === 'F#2' ||
    tempMark === 'D3' ||
    tempMark === 'D#3' ||
    tempMark === 'E4' ||
    tempMark === 'F4' ||
    tempMark === 'F#4'
  ) {
    value.row = 4;
  }
  if (
    tempMark === 'A1' ||
    tempMark === 'A#1' ||
    tempMark === 'B1' ||
    tempMark === 'C1' ||
    tempMark === 'C#1' ||
    tempMark === 'A3' ||
    tempMark === 'A#3' ||
    tempMark === 'B3' ||
    tempMark === 'C3' ||
    tempMark === 'C#3'
  ) {
    value.row = 5;
  }
  if (
    tempMark === 'E1' ||
    tempMark === 'F1' ||
    tempMark === 'F#1' ||
    tempMark === 'G1' ||
    tempMark === 'G#1'
  ) {
    value.row = 6;
  }

  return value;
}
