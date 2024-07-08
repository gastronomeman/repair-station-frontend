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
    message: text,
    type: 'error',
    center: true
  })
}