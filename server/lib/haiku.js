const adjs = [  'ab1', 'ab2', 'ab3', 'ab4', 'ab5', 'ab6', 'ab7', 'ab8', 'ab9', 'ab10',  
'ab11', 'ab12', 'ab13', 'ab14', 'ab15', 'ab16', 'ab17', 'ab18', 'ab19', 'ab20',  'ab21', 
'ab22', 'ab23', 'ab24', 'ab25', 'ab26', 'ab27', 'ab28', 'ab29', 'ab30',  'ab31', 'ab32',
 'ab33', 'ab34', 'ab35', 'ab36', 'ab37', 'ab38', 'ab39', 'ab40',  'ab41', 'ab42', 'ab43',
 'ab44', 'ab45', 'ab46', 'ab47', 'ab48', 'ab49', 'ab50',  'ab51', 'ab52', 'ab53', 'ab54',
 'ab55', 'ab56', 'ab57', 'ab58', 'ab59', 'ab60',  'ab61', 'ab62', 'ab63', 'ab64'];


const nouns = [  'esoft1', 'esoft2', 'esoft3', 'esoft4', 'esoft5', 'esoft6', 'esoft7', 'esoft8',
  'esoft9', 'esoft10', 'esoft11', 'esoft12', 'esoft13', 'esoft14', 'esoft15', 'esoft16',  'esoft17',
  'esoft18', 'esoft19', 'esoft20', 'esoft21', 'esoft22', 'esoft23', 'esoft24',  'esoft25', 'esoft26', 
  'esoft27', 'esoft28', 'esoft29', 'esoft30', 'esoft31', 'esoft32',  'esoft33', 'esoft34', 'esoft35',
  'esoft36', 'esoft37', 'esoft38', 'esoft39', 'esoft40',  'esoft41', 'esoft42', 'esoft43', 'esoft44',
  'esoft45', 'esoft46', 'esoft47', 'esoft48',  'esoft49', 'esoft50', 'esoft51', 'esoft52', 'esoft53',
  'esoft54', 'esoft55', 'esoft56',  'esoft57', 'esoft58', 'esoft59', 'esoft60', 'esoft61', 'esoft62', 
  'esoft63', 'esoft64'];

module.exports = () => {
  const adj = adjs[Math.floor(Math.random() * adjs.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const MIN = 1000;
  const MAX = 9999;
  const num = Math.floor(Math.random() * ((MAX + 1) - MIN)) + MIN;

  return `${adj}-${noun}-${num}`;
};
