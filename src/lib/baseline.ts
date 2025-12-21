export function media(nums: (number | null | undefined)[]) {
  const arr = nums.filter((n): n is number => typeof n === "number");
  if (!arr.length) return null;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function baselineInicial(serie: { valor: number | null }[], n = 3) {
  const vals = serie.slice(0, n).map((x) => x.valor).filter((v): v is number => typeof v === "number");
  const m = media(vals);
  return m == null ? null : Number(m.toFixed(1));
}

export function mediaMovel(serie: { valor: number | null }[], n = 7) {
  const vals = serie.slice(-n).map((x) => x.valor).filter((v): v is number => typeof v === "number");
  const m = media(vals);
  return m == null ? null : Number(m.toFixed(1));
}
