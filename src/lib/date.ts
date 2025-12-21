export function hojeISO() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export function calcularIdade(dataNasc: string) {
  const dn = new Date(dataNasc);
  const now = new Date();
  let idade = now.getFullYear() - dn.getFullYear();
  const m = now.getMonth() - dn.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < dn.getDate())) idade--;
  return idade;
}

export function formatarData(dataISO: string) {
  const [year, month, day] = dataISO.split("-");
  return `${day}/${month}`;
}
