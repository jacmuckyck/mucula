function fizzbuzz(n) {
  const myarray = Array.from({ length: n }, (_, i) => i + 1).map(
    (i) => {
      if (i % 15 === 0) {
        return `\nfizzbuzz, ${i}`
      } if (i % 3 === 0) {
        // then moves onto the next
        return `\nfizz, ${i}`
      } if (i % 5 === 0) {
        return `\nbuzz, ${i}`
      }
      return `\n${i.toString()}`
    }
  )
  console.log(myarray.toString())
}

