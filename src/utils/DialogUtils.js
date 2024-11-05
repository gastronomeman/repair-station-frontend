export const dialog = (str) => {
  showDialog({
    title: '`(*^﹏^*)′',
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
