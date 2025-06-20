import sum from '../sum.js';

console.log('Résultat :', sum(2, 3)); // Optionnel, juste pour tester manuellement

if (sum(2, 3) !== 5) {
  throw new Error('Test échoué : sum(2, 3) doit être égal à 5');
} else {
  console.log('✅ Test passé !');
}
