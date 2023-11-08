export type HHMMSSType = {
  hrs: string;
  mins: string;
  secs: string;
};

export const secondsToHHMMSS = (seconds: number | string) => {
  // credits - https://stackoverflow.com/a/37096512
  seconds = Number(seconds);
  const h = (seconds / 3600).toFixed(0);
  const m = ((seconds % 3600) / 60).toFixed(0);
  const s = ((seconds % 3600) % 60).toFixed(0);

  return {
    hrs: h.padStart(2, '0'),
    mins: m.padStart(2, '0'),
    secs: s.padStart(2, '0'),
  };
};
