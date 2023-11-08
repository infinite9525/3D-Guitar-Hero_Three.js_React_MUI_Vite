export default function noteCalculate(index: number) {
  const touchName = `${Math.floor(index / 5) + 1}/${(index % 5) + 1}`;
  let notes: string[] = [];
  console.log('touchName: ', touchName);
  switch (touchName) {
    case '1/1':
      notes = ['E3', 'E5'];
      break;
    case '1/2':
      notes = ['F3'];
      break;
    case '1/3':
      notes = ['F#3'];
      break;
    case '1/4':
      notes = ['G3'];
      break;
    case '1/5':
      notes = ['G#3'];
      break;
    case '2/1':
      notes = ['B2', 'B4'];
      break;
    case '2/2':
      notes = ['C2', 'C4'];
      break;
    case '2/3':
      notes = ['C#2', 'C#4'];
      break;
    case '2/4':
      notes = ['D2', 'D4'];
      break;
    case '2/5':
      notes = ['D#2', 'D#4'];
      break;
    case '3/1':
      notes = ['G2', 'G4'];
      break;
    case '3/2':
      notes = ['G#2', 'G#4'];
      break;
    case '3/3':
      notes = ['A2', 'A4'];
      break;
    case '3/4':
      notes = ['A#2', 'A#4'];
      break;
    case '3/5':
      notes = [];
      break;
    case '4/1':
      notes = ['D1', 'D3'];
      break;
    case '4/2':
      notes = ['D#1', 'D#3'];
      break;
    case '4/3':
      notes = ['E2', 'E4'];
      break;
    case '4/4':
      notes = ['F2', 'F4'];
      break;
    case '4/5':
      notes = ['F#2', 'F#4'];
      break;
    case '5/1':
      notes = ['A1', 'A3'];
      break;
    case '5/2':
      notes = ['A#1', 'A#3'];
      break;
    case '5/3':
      notes = ['B1', 'B3'];
      break;
    case '5/4':
      notes = ['C1', 'C3'];
      break;
    case '5/5':
      notes = ['C#1', 'C#3'];
      break;
    case '6/1':
      notes = ['E1'];
      break;
    case '6/2':
      notes = ['F1'];
      break;
    case '6/3':
      notes = ['F#1'];
      break;
    case '6/4':
      notes = ['G1'];
      break;
    case '6/5':
      notes = ['G#1'];
      break;
  }

  return notes;
}
