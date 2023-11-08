export default function midiCalculate(mark: string) {
  const tempMark = mark.toUpperCase();
  let value = 0;

  switch (tempMark) {
    case 'E1':
      value = 28;
      break;
    case 'F1':
      value = 29;
      break;
    case 'F#1':
      value = 30;
      break;
    case 'G1':
      value = 31;
      break;
    case 'G#1':
      value = 32;
      break;
    case 'A1':
      value = 33;
      break;
    case 'H1':
      value = 34;
      break;
    case 'B1':
      value = 35;
      break;
    case 'C1':
      value = 36;
      break;
    case 'C#1':
      value = 37;
      break;
    case 'D1':
      value = 38;
      break;
    case 'D#1':
      value = 39;
      break;
    case 'E2':
      value = 40;
      break;
    case 'F2':
      value = 41;
      break;
    case 'F#2':
      value = 42;
      break;
    case 'G2':
      value = 43;
      break;
    case 'G#2':
      value = 44;
      break;
    case 'A2':
      value = 45;
      break;
    case 'H2':
      value = 46;
      break;
    case 'B2':
      value = 47;
      break;
    case 'C2':
      value = 48;
      break;
    case 'C#2':
      value = 49;
      break;
    case 'D2':
      value = 50;
      break;
    case 'D#2':
      value = 51;
      break;
    case 'E3':
      value = 52;
      break;
    case 'F3':
      value = 53;
      break;
    case 'F#3':
      value = 54;
      break;
    case 'G3':
      value = 55;
      break;
    case 'G#3':
      value = 56;
      break;
    case 'A3':
      value = 57;
      break;
    case 'H3':
      value = 58;
      break;
    case 'B3':
      value = 59;
      break;
    case 'C3':
      value = 60;
      break;
    case 'C#3':
      value = 61;
      break;
    case 'D3':
      value = 62;
      break;
    case 'D#3':
      value = 63;
      break;
    case 'E4':
      value = 64;
      break;
    case 'F4':
      value = 65;
      break;
    case 'F#4':
      value = 66;
      break;
    case 'G4':
      value = 67;
      break;
    case 'G#4':
      value = 68;
      break;
    case 'A4':
      value = 69;
      break;
    case 'H4':
      value = 70;
      break;
    case 'B4':
      value = 71;
      break;
    case 'C4':
      value = 72;
      break;
    case 'C#4':
      value = 73;
      break;
    case 'D4':
      value = 74;
      break;
    case 'D#4':
      value = 75;
      break;
    case 'E5':
      value = 76;
      break;
  }

  return value;
}
