export function capitalizeSentence(sentence: string) {
  const words = sentence.split(' ')

  const result = words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1)
    })
    .join(' ')

  return result
}
