function convert (text) {
  const tableHeader = []
  let tableHeaderComplete = false
  const table = []

  for (let line of text.split(/\n(?=[a-z])/i)) {
    const [column, value] = line.split(/\s+/)
    if (line.startsWith('Page ')) { continue }
    if (line.startsWith('obs') && tableHeader.length) { tableHeaderComplete = true }
    if (!tableHeaderComplete) { tableHeader.push(column) }
    if (line.startsWith('obs')) { table.unshift([]) }
    table[0].push(value)
  }

  return [tableHeader, ...table.reverse()].map(row => row.join('\t')).join('\n')
}
