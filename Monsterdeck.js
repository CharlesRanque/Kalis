const BRONZE_UNITS_MONSTERS = [
  { name: 'Duwende', type: 'Unit', faction: 'monsters', cost: 1, row: 'melee', atk: 2, hp: 2, maxHp: 2, passive: 'Thorns 1' },
  { name: 'Sirena', type: 'Unit', faction: 'monsters', cost: 1, row: 'ranged', atk: 2, hp: 1, maxHp: 1, passive: 'Lifesteal' },
  { name: 'Tiyanak', type: 'Unit', faction: 'monsters', cost: 1, row: 'melee', atk: 3, hp: 1, maxHp: 1, passive: 'Pierce' },
  { name: 'Tikbalang', type: 'Unit', faction: 'monsters', cost: 2, row: 'melee', atk: 3, hp: 2, maxHp: 2, passive: 'Taunt' },
  { name: 'Sigbin', type: 'Unit', faction: 'monsters', cost: 2, row: 'ranged', atk: 2, hp: 3, maxHp: 3, passive: 'Pierce' },
  { name: 'Kapre', type: 'Unit', faction: 'monsters', cost: 3, row: 'melee', atk: 4, hp: 4, maxHp: 4, passive: 'Shield 1' },
  { name: 'Aswang', type: 'Unit', faction: 'monsters', cost: 3, row: 'melee', atk: 5, hp: 2, maxHp: 2, passive: 'Lifesteal' },
  { name: 'Acolyte', type: 'Unit', faction: 'monsters', cost: 4, row: 'ranged', atk: 5, hp: 4, maxHp: 4, passive: 'Overheal' },
  { name: 'Minokawa', type: 'Unit', faction: 'monsters', cost: 5, row: 'melee', atk: 6, hp: 6, maxHp: 6, passive: 'shield 1' },
  { name: 'Berberoka', type: 'Unit', faction: 'monsters', cost: 3, row: 'ranged', atk: 3, hp: 5, maxHp: 5, passive: 'Taunt' },
  { name: 'Mangkukulam', type: 'Unit', faction: 'monsters', cost: 2, row: 'melee', atk: 2, hp: 4, maxHp: 4, passive: 'Thorns 1' },
  { name: 'Manananggal', type: 'Unit', faction: 'monsters', cost: 4, row: 'ranged', atk: 4, hp: 3, maxHp: 3, passive: 'Lifesteal' },
  { name: 'Santelmo', type: 'Unit', faction: 'monsters', cost: 5, row: 'melee', atk: 6, hp: 3, maxHp: 3, passive: 'thorns 1' },
];

const GOLD_UNITS_MONSTERS = [
  { name: 'Siyokoy', type: 'Unit', faction: 'monsters', cost: 6, row: 'ranged', atk: 7, hp: 5, maxHp: 5, passive: 'Pierce' },
  { name: 'Kataw', type: 'Unit', faction: 'monsters', cost: 7, row: 'melee', atk: 7, hp: 5, maxHp: 5, passive: 'Taunt' },
  { name: 'Pugot', type: 'Unit', faction: 'monsters', cost: 6, row: 'ranged', atk: 6, hp: 6, maxHp: 6, passive: 'shield 1' },
  { name: 'Busaw', type: 'Unit', faction: 'monsters', cost: 8, row: 'melee', atk: 8, hp: 6, maxHp: 6, passive: 'thorns 1' },
  { name: 'Mambabarang', type: 'Unit', faction: 'monsters', cost: 7, row: 'ranged', atk: 5, hp: 7, maxHp: 7, passive: 'Pierce' },
  { name: 'Wakwak', type: 'Unit', faction: 'monsters', cost: 6, row: 'melee', atk: 6, hp: 5, maxHp: 5, passive: 'Lifesteal' },
  { name: 'Ikugan', type: 'Unit', faction: 'monsters', cost: 7, row: 'melee', atk: 7, hp: 6, maxHp: 6, passive: 'Taunt' },
];

window.GODS = window.GODS || {};
GODS.monsters = [
  { name: 'Bakunawa', power: 'Moon Devourer', desc: 'Deal 2 damage to all enemy cards in a row', effect: 'bakunawa_ult' },
  { name: 'Engkanto', power: 'Mystic Ward', desc: 'Give +3 HP to 3 of your cards', effect: 'engkanto_ult' }
];