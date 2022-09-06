const REGEX = {
  TIDM: '([0-9A-Z\.]{3,4})',
  GENERAL_TEXT: '((\w*(\/)?(\s)?)*)',
  CURRENCY: '(GBX|GBP|USD)',
  PRICE: '((-)?(-|([0-9]{1,3},)?[0-9]{1,3}\.[0-9]{2,3}))',
  PERCENT_CHANGE: '((-)?(-|([0-9]{1,3},)?[0-9]{1,3}\.[0-9]{2,3}%))'
}

export default REGEX
