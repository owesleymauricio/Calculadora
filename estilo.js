function displayNum(value) {
    document.calc.text1.value += value;
  }
  
  // Função para calcular o resultado da expressão matemática
  function calculateResult() {
    try {
      const result = eval(document.calc.text1.value);
      document.calc.text1.value = result;
    } catch (error) {
      alert('Erro na expressão!');
    }
  }
  
  // Função para limpar o campo de texto
  function clearDisplay() {
    document.calc.text1.value = '';
  }