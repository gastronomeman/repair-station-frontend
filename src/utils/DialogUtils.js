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
    let confirmButtonText = `确定（${count}）` // 初始显示文本为 "3"
    let confirmButtonDisabled = true // 初始禁用按钮

    // 显示确认框
    const showDialog = () => {
      showConfirmDialog({
        allowHtml: true,
        title: title,
        message: str,
        confirmButtonText: confirmButtonText,
        confirmButtonDisabled: confirmButtonDisabled
      })
        .then(() => {
          resolve(true) // 用户点击确定按钮
        })
        .catch(() => {
          resolve(false) // 用户点击取消按钮
        })
    }

    // 初次显示确认框
    showDialog()

    // 创建一个计时器来更新按钮文本和状态
    const interval = setInterval(() => {
      count-- // 倒计时减 1
      confirmButtonText = `确定（${count}）` // 更新按钮文本为倒计时

      // 在每次倒计时变化时重新显示弹窗
      if (count <= 0) {
        clearInterval(interval) // 倒计时结束后清除计时器
        confirmButtonText = '确定' // 更新为"确定"
        confirmButtonDisabled = false // 启用按钮
      }

      // 重新显示弹窗
      showDialog()
    }, 1000) // 每秒更新一次
  })
}
