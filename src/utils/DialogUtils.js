export const dialog = (str) => {
  showDialog({
    allowHtml: true,
    title: ' `(*^▽^*)′ ',
    message: str
  })
}

export const htmlDialog = (str) => {
  showDialog({
    allowHtml: true,
    theme: 'round-button',
    title: ' o(>﹏<)o ',
    message: str
  })
}

export const confirmDialog = (title, str) => {
  return new Promise((resolve) => {
    showConfirmDialog({
      allowHtml: true,
      title: title,
      message: str
    })
      .then(() => {
        resolve(true)
      })
      .catch(() => {
        resolve(false)
      })
  })
}

export const confirm3Dialog = (title, str) => {
  return new Promise((resolve) => {
    let count = 3 // 倒计时从 3 开始
    let confirmButtonText = `确定（${count}）` // 初始显示文本为 "确定（3）"
    let confirmButtonDisabled = true // 初始禁用按钮
    let isDialogClosed = false // 标志变量，确保对话框关闭后不再更新

    const updateDialog = () => {
      if (isDialogClosed) return // 如果对话框已关闭，直接返回，停止更新
      showConfirmDialog({
        allowHtml: true,
        title: title,
        message: str,
        confirmButtonText: confirmButtonText,
        confirmButtonDisabled: confirmButtonDisabled
      })
        .then(() => {
          isDialogClosed = true // 标记对话框已关闭
          clearInterval(interval) // 停止计时器
          resolve(true) // 用户点击确定按钮
        })
        .catch(() => {
          isDialogClosed = true // 标记对话框已关闭
          clearInterval(interval) // 停止计时器
          resolve(false) // 用户点击取消按钮
        })
    }

    // 初次显示确认框
    updateDialog()

    // 创建一个计时器来更新按钮文本和状态
    const interval = setInterval(() => {
      if (isDialogClosed) {
        clearInterval(interval) // 如果对话框已关闭，停止计时器
        return
      }
      count-- // 倒计时减 1
      if (count <= 0) {
        confirmButtonText = '确定' // 倒计时结束后更新为 "确定"
        confirmButtonDisabled = false // 启用按钮
        clearInterval(interval) // 停止计时器
      } else {
        confirmButtonText = `确定（${count}）` // 更新按钮文本为倒计时
      }
      updateDialog() // 更新对话框
    }, 1000) // 每秒更新一次
  })
}
