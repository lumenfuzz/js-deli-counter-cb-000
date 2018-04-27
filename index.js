function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(array) {
  if (array === []) {
    return `There is nobody waiting to be served!`
  }
  var person = array.shift()
  return `Currently serving ${person}.`
}