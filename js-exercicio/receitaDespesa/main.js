let familia = {
  receitas: [2000, 150, 500],
  despesas: [150, 1500, 200, 100],
}

function soma(array) {
  let total = 0
  for (let value of array) total += value
  return total
}

function saldoFamilia() {
  const calcReceitas = soma(familia.receitas)
  const calcDespesas = soma(familia.despesas)

  const total = calcReceitas - calcDespesas

  const ok = total >= 0

  let situacao = "negativo"

  if (ok) {
    situacao = "positivo"
  }

  let resultado = document.querySelector("#resultado")
  //resultado.innerText = "R$ " + total + " e você está " + situacao
  resultado.innerText = `R$ ${total}: e você está ${situacao}`
  //console.log(`Seu saldo é ${situacao}: ${total}`)
}
