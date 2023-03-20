export default function createIteratorObject(report) {
  const out = [];
  for (const emp of Object.values(report.allEmployees)) {
    out.push(...emp);
  }
  return out;
}
