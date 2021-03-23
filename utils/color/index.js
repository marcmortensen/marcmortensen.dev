export const colorShade = (col, amount) => {
  col = col.replace(/^#/, '');
  if (col.length === 3)
    col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2];

  let [r, g, b] = col.match(/.{2}/g);
  [r, g, b] = [
    parseInt(r, 16) + amount,
    parseInt(g, 16) + amount,
    parseInt(b, 16) + amount,
  ];

  r = Math.max(Math.min(255, r), 0).toString(16);
  g = Math.max(Math.min(255, g), 0).toString(16);
  b = Math.max(Math.min(255, b), 0).toString(16);

  const rr = (r.length < 2 ? '0' : '') + r;
  const gg = (g.length < 2 ? '0' : '') + g;
  const bb = (b.length < 2 ? '0' : '') + b;

  return `#${rr}${gg}${bb}`;
};

export const rgbToHex = (r, g, b) =>
  '#' + [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('');

export const hexToRgb = (hex) =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => '#' + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));

export const hexColorToGrayScaleHex = (hex) => {
  const avg = Number.parseInt(
    (
      hexToRgb(hex).reduce((acc, currentValue) => acc + currentValue) / 3
    ).toFixed(0)
  );
  return rgbToHex(avg, avg, avg);
};
