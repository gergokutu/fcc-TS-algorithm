const convertHTML = (str: string): string => {
  const entitiesHTML: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&apos;',
    '"': '&quot;'
  };

  return str.replace(/[&<>'"]/g, tag => entitiesHTML[tag]);
};

console.log('Should be Dolce &amp; Gabbana>', convertHTML('Dolce & Gabbana'));
