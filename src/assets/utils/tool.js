/*
 * 传入一个数字,返回颜色对象
 * return 一个 obj
 */
export function openLink (URL) {
  const URLreg = /^http|https:\/\/.+/i
  if (URLreg.test(URL)) {
    window.open(URL, '_blank')
  }
}

/**
 * 获取cookie
 * @param {String} cookie的名称
 */
export function getCookie (cName) {
  let cookies = document.cookie

  if (cookies.length > 0) {
    let start = cookies.indexOf(cName + '=')

    if (start != -1) {
      let end = cookies.indexOf(';', start)

      if (end == -1) {
        end = cookies.length
      }

      let fullCookies = cookies.substring(start, end)

      return fullCookies.split('=')[1]
    }
  }

  return ''
}

