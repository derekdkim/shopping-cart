const formatMoney = (int) => {
  const moneyStr = int.toString();
  const strLen = moneyStr.length;

  if (strLen < 3) {
    return `$ 0.${moneyStr.substring(strLen - 2, strLen)}`;
  } else {
    return `$ ${moneyStr.substring(0, strLen - 2)}.${moneyStr.substring(strLen - 2, strLen)}`;
  }
}

export default formatMoney;