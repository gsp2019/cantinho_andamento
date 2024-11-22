import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

// Função para calcular o total
function calculateTotal() {
  const inputs = document.querySelectorAll('input.quantity-input');
  let total = 0;

  inputs.forEach((input) => {
    const quantity = parseInt(input.value) || 0;
    const price = parseFloat(input.getAttribute('data-price'));
    total += quantity * price;
  });

  return total.toFixed(2); // Retorna o total formatado
}

// Função para salvar o pedido no Firestore
async function saveOrder(event) {
  event.preventDefault(); // Impedir o reload da página

  const tableNumber = document.getElementById('mesa').value;
  const total = calculateTotal();

  if (!tableNumber) {
    alert('Por favor, selecione o número da mesa!');
    return;
  }

  try {
    await addDoc(collection(db, 'pedidos'), {
      mesa: tableNumber,
      total: parseFloat(total),
      timestamp: new Date(),
    });
    alert(`Pedido para a mesa ${tableNumber} salvo com sucesso!`);
  } catch (error) {
    console.error('Erro ao salvar o pedido:', error);
    alert('Erro ao salvar o pedido. Tente novamente.');
  }
}
