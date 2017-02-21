/*
 * 传入一个数字,返回颜色对象
 * return 一个 obj
 */
export function color (num) {
  switch (true) {
    case num == 0:
      return {}
    case num > 0:
      return { color: '#fe5333' }   // 涨红色
    case num < 0:
      return { color: '#3caa00' }   // 跌绿色
  }
}

/*
 * 输入一个数字,转化为百分比.比保留两位小数   如果数字大于0,会带上加号
 * @num 传入的数字
 */
export function formatPct (num) {
  /* 将传入值转为浮点数，如果不是数字类型，则直接返回该传入值 */
  var _num = parseFloat(num)

  if (isNaN(_num)) {
    return num
  }

  var resNum = (_num * 100).toFixed(2)

  if (resNum > 0) {
    return '+' + resNum + '%'
  } else {
    return resNum + '%'
  }
}

/* 输入一个数字,转化为百分比.
 * @num 传入的数字
 * @keepNum 保留小数位数
 */

export function formatPctKeepNum (num, keepNum) {
  /* 将传入值转为浮点数，如果不是数字类型，则直接返回该传入值 */
  var _num = parseFloat(num)

  if (isNaN(_num)) {
    return num
  }

  var resNum = (_num * 100).toFixed(keepNum)
  return resNum + '%'
}

/*
 * 输入一个数字,返回一个保留指定小数的数字. 如果是正数,会加上 加号
 * @num 传入的数字
 * @keepNum 保留的小数位数
 */
export function formatNum (num, keepNum) {
  // 如果是0 直接返回原来的数字
  if (num == 0) {
    return num
  }
  /* 将传入值转为浮点数，如果不是数字类型，则直接返回该传入值 */
  var _num = parseFloat(num)

  if (isNaN(_num)) {
    return num
  }
  var resNum

  if (keepNum) {
    resNum = _num.toFixed(keepNum)
  } else {
    resNum = _num
  }

  if (resNum > 0) {
    return '+' + resNum
  } else {
    return resNum
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

/*
 * 格式化中文数字
 * @num: 需要格式的值
 * @round: 是否需要四舍五入
 */
export function formatChineseNum (num, round = false) {
  let value = parseFloat(num)

  if (isNaN(value)) {
    return num
  }

  let yi = 100000000 // 亿
  let wan = 10000 // 万

  if (Math.abs((num / yi) >= 1)) {
    let yiVal = formatNumDecimal(num / yi)

    if (round == true) {
      yiVal = Math.round(yiVal)
    }

    value = yiVal + '亿'
  } else if (Math.abs((num / wan) >= 1)) {
    let wanVal = formatNumDecimal(num / wan)

    if (round == true) {
      wanVal = Math.round(wanVal)
    }

    value = wanVal + '万'
  } else {
    value = num
  }

  return value
}

/*
 * 格式化数字小数点
 * @num: 需要格式化的数字
 * @keepNum: 保留的位数，默认保留两位
 */
export function formatNumDecimal (num, keepNum) {
  let sNum = parseFloat(num)

  if (isNaN(sNum)) {
    return num
  } else {
    sNum = num.toString()
  }

  keepNum = keepNum || 2

  let decimalIndex = sNum.indexOf('.')

  if (decimalIndex < 0) {
    decimalIndex = sNum.length
    sNum += '.'
  } else {
    sNum = sNum.substring(0, decimalIndex + keepNum + 1)
  }

  // 补零
  while (sNum.length <= decimalIndex + keepNum) {
    sNum += '0'
  }

  return sNum
}
