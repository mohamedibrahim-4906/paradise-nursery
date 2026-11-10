// 3 categories x 6 unique houseplants. Images are in /public/plants (swap for photo URLs if you like).
const img = (file) => `/${file}.svg`;
const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', image: img('snake-plant'), description: 'Produces oxygen at night.', cost: 15 },
      { name: 'Spider Plant', image: img('spider-plant'), description: 'Filters formaldehyde and xylene.', cost: 12 },
      { name: 'Peace Lily', image: img('peace-lily'), description: 'Removes mold spores and toxins.', cost: 18 },
      { name: 'Boston Fern', image: img('boston-fern'), description: 'Adds humidity and clears the air.', cost: 14 },
      { name: 'Rubber Plant', image: img('rubber-plant'), description: 'Large leaves absorb airborne toxins.', cost: 20 },
      { name: 'Areca Palm', image: img('areca-palm'), description: 'A natural humidifier.', cost: 25 },
    ],
  },
  {
    category: 'Aromatic & Herb Plants',
    plants: [
      { name: 'Lavender', image: img('lavender'), description: 'Calming scent that aids sleep.', cost: 16 },
      { name: 'Jasmine', image: img('jasmine'), description: 'Sweet fragrance and white blooms.', cost: 18 },
      { name: 'Rosemary', image: img('rosemary'), description: 'Fragrant herb for the kitchen.', cost: 12 },
      { name: 'Mint', image: img('mint'), description: 'Fresh, cooling aroma.', cost: 8 },
      { name: 'Lemon Balm', image: img('lemon-balm'), description: 'Citrus scent that repels mosquitoes.', cost: 10 },
      { name: 'Basil', image: img('basil'), description: 'Aromatic leaves for cooking.', cost: 9 },
    ],
  },
  {
    category: 'Easy Care Plants',
    plants: [
      { name: 'ZZ Plant', image: img('zz-plant'), description: 'Thrives on neglect and low light.', cost: 22 },
      { name: 'Pothos', image: img('pothos'), description: 'Trailing vines, very forgiving.', cost: 12 },
      { name: 'Cast Iron Plant', image: img('cast-iron-plant'), description: 'Nearly indestructible in shade.', cost: 19 },
      { name: 'Chinese Evergreen', image: img('chinese-evergreen'), description: 'Patterned leaves, low light friendly.', cost: 17 },
      { name: 'Aloe Vera', image: img('aloe-vera'), description: 'Soothing gel for minor burns.', cost: 11 },
      { name: 'Jade Plant', image: img('jade-plant'), description: 'A long-lived succulent.', cost: 13 },
    ],
  },
];

export default plantsArray;
