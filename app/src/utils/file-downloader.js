export const downloadFile = (data, format, filename) => {
  const link = document.createElement('a')
  document.body.appendChild(link)

  link.style.display = 'none'
  link.href = window.URL.createObjectURL(new Blob([data], { type: format }))
  link.setAttribute('download', filename)
  link.click()

  window.URL.revokeObjectURL(link.href)
  document.body.removeChild(link)
}
