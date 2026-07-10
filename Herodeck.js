const BRONZE_UNITS_HEROES = [
  { name: 'Sakdalista', type: 'Unit', faction: 'heroes', cost: 1, row: 'melee', atk: 2, hp: 2, maxHp: 2, passive: 'Thorns 1' },
  { name: 'Kampilan', type: 'Unit', faction: 'heroes', cost: 1, row: 'melee', atk: 1, hp: 3, maxHp: 3, passive: 'Shield 1' },
  { name: 'Bantugan', type: 'Unit', faction: 'heroes', cost: 1, row: 'ranged', atk: 2, hp: 1, maxHp: 1, passive: 'Pierce' },
  { name: 'Agila', type: 'Unit', faction: 'heroes', cost: 2, row: 'ranged', atk: 3, hp: 2, maxHp: 2, passive: 'Lifesteal' },
  { name: 'Mandirigma', type: 'Unit', faction: 'heroes', cost: 2, row: 'melee', atk: 3, hp: 2, maxHp: 2, passive: 'Overheal' },
  { name: 'Handiong', type: 'Unit', faction: 'heroes', cost: 3, row: 'melee', atk: 4, hp: 4, maxHp: 4, passive: 'shield 1' },
  { name: 'Basi', type: 'Unit', faction: 'heroes', cost: 3, row: 'melee', atk: 3, hp: 5, maxHp: 5, passive: 'thorns 1' },
  { name: 'Sulayman', type: 'Unit', faction: 'heroes', cost: 4, row: 'ranged', atk: 5, hp: 4, maxHp: 4, passive: 'Pierce' },
  { name: 'Datu', type: 'Unit', faction: 'heroes', cost: 5, row: 'melee', atk: 5, hp: 5, maxHp: 5, passive: 'Taunt' },
  { name: 'Dayang', type: 'Unit', faction: 'heroes', cost: 3, row: 'ranged', atk: 2, hp: 6, maxHp: 6, passive: 'Overheal' },
  { name: 'Timawa', type: 'Unit', faction: 'heroes', cost: 2, row: 'melee', atk: 3, hp: 3, maxHp: 3, passive: 'Lifesteal' },
  { name: 'Babaylan', type: 'Unit', faction: 'heroes', cost: 4, row: 'ranged', atk: 4, hp: 3, maxHp: 3, passive: 'Overheal' },
  { name: 'Bagani', type: 'Unit', faction: 'heroes', cost: 5, row: 'melee', atk: 6, hp: 3, maxHp: 3, passive: 'Thorns 1' },
];

const GOLD_UNITS_HEROES = [
  { name: 'Aliguyon', type: 'Unit', faction: 'heroes', cost: 6, row: 'melee', atk: 6, hp: 6, maxHp: 6, passive: 'shield 1' },
  { name: 'Lakan', type: 'Unit', faction: 'heroes', cost: 7, row: 'melee', atk: 7, hp: 5, maxHp: 5, passive: 'Taunt' },
  { name: 'Maharlika', type: 'Unit', faction: 'heroes', cost: 6, row: 'ranged', atk: 5, hp: 7, maxHp: 7, passive: 'Pierce' },
  { name: 'Paragon', type: 'Unit', faction: 'heroes', cost: 8, row: 'melee', atk: 8, hp: 6, maxHp: 6, passive: 'shield 1' },
  { name: 'Sultan', type: 'Unit', faction: 'heroes', cost: 7, row: 'ranged', atk: 6, hp: 5, maxHp: 5, passive: 'Taunt' },
  { name: 'Babaylan', type: 'Unit', faction: 'heroes', cost: 6, row: 'melee', atk: 4, hp: 8, maxHp: 8, passive: 'Overheal' },
  { name: 'Bernardo Carpio', type: 'Unit', faction: 'heroes', cost: 7, row: 'melee', atk: 7, hp: 6, maxHp: 6, passive: 'thorns 1' },
];

const SPELLS = [
  { name: 'Divine', type: 'Spell', cost: 2, effect: 'divine_buff', desc: '+2 ATK & +2 HP' },
  { name: 'Agimat', type: 'Spell', cost: 2, effect: 'divine_buff', desc: '+2 ATK & +2 HP' },
  { name: 'Padugo', type: 'Spell', cost: 1, effect: 'damage_3', desc: 'Deal 3 damage' },
  { name: 'Sumpa', type: 'Spell', cost: 6, effect: 'damage_6', desc: 'Deal 6 damage' },
  { name: 'Mimirik', type: 'Spell', cost: 7, effect: 'resurrect_2', desc: 'Resurrect 2 cards' },
  { name: 'Tigalpo', type: 'Spell', cost: 4, effect: 'damage_all_2', desc: 'Deal 2 to all enemies' },
  { name: 'Barang', type: 'Spell', cost: 7, effect: 'destroy_strongest', desc: 'Destroy strongest enemy' },
  { name: 'Gaba', type: 'Spell', cost: 3, effect: 'damage_3', desc: 'Deal 3 damage' },
  { name: 'Orasyon', type: 'Spell', cost: 2, effect: 'divine_buff', desc: '+2 ATK & +2 HP' },
  { name: 'Kulam', type: 'Spell', cost: 5, effect: 'damage_6', desc: 'Deal 6 damage' },
];

window.GODS = window.GODS || {};
GODS.heroes = [
  { name: 'Tuwaang', power: 'Wrath of Heaven', desc: 'Destroy 2 random enemy cards', effect: 'Tuwaang_ult' },
  { name: 'Lam-Ang', power: 'Ancestral Resurrection', desc: 'Resurrect 2 random cards from your graveyard', effect: 'lamang_ult' }
];