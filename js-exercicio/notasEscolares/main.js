function pegarValor() {
  let input = document.querySelector("#calc")
  let texto = input.value
  return texto
}

function gerarNota(score) {
  let scoreA = score >= 90 && score <= 100
  let scoreB = score >= 80 && score <= 89
  let scoreC = score >= 70 && score <= 79
  let scoreD = score >= 60 && score <= 69
  let scoreF = score < 60
  let scoreFinal
  if (scoreA) {
    scoreFinal = "nota é A"
  } else if (scoreB) {
    scoreFinal = "nota é B"
  } else if (scoreC) {
    scoreFinal = "nota é C"
  } else if (scoreD) {
    scoreFinal = "nota é D"
  } else if (scoreF) {
    scoreFinal = "nota é F"
  }
  let resultado = document.querySelector("#resultado")
  resultado.innerText = scoreFinal
}
