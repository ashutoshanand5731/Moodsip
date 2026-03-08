export interface Drink {
  name: string;
  description: string;
}

export interface MoodBeverages {
  nonAlcoholic: Drink[];
  alcoholic: Drink[];
  indie: Drink[];
}

export interface Mood {
  id: 'heal' | 'sleep' | 'focus' | 'moment' | 'chill' | 'celebration';
  title: string;
  imageSeed: string;
  beverages: MoodBeverages;
}

export interface NonAlcoholicDrink {
  name: string;
  description: string;
}

export interface AlcoholicDrinkCategory {
  name: string;
  description: string;
  serving: string;
  dosage: string;
  dos: string[];
  donts: string[];
}
