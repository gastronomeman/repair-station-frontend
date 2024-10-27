export const warningMsg = (text) => {
  ElMessage({
    message: text,
    type: 'warning',
    center: true
  })
}

export const successMsg = (text) => {
  ElMessage({
    message: text,
    type: 'success',
    center: true
  })
}

export const errorMsg = (text) => {
  ElMessage({
    dangerouslyUseHTMLString: true,
    message: `<strong>${text}</strong>`,
    duration: 6000,
    type: 'error',
    center: true
  })
}
