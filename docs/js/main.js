//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: JS  F O R   H E A D E R : :  :   :    :     :
// ────────────────────────────────────────────────────────────────────
//
var myElement = document.querySelector("header");
var headroom  = new Headroom(myElement);
headroom.init(); 

var headroom = new Headroom(myElement, {
  "offset": 200,
  "tolerance": {
    "up" : 30,
    "down" : 10
},
  "classes": {
    "initial": "animated",
    "pinned": "slideDown",
    "unpinned": "slideUp"
  }
});
headroom.init();


//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: J S O N   L I S T  O F  P R O D U C T S : :  :   :    :     :
// ────────────────────────────────────────────────────────────────────
// Just roll it up
var fodmapList = [
  {
    "id": "1",
    "name": "Polenta",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "2",
    "name": "Fennel",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "3",
    "name": "Vegetable oil",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "4",
    "name": "Peanut oil",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "5",
    "name": "Cocoa powder",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "7",
    "name": "Hummus / houmous",
    "fodmap": "high",
    "category": "Condiments",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "8",
    "name": "Instant coffee (only if not made with lactose or other FODMAPS)",
    "fodmap": "low",
    "category": "Drinks",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "9",
    "name": "Coffee (regular or decaf)",
    "fodmap": "low",
    "category": "Drinks",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "10",
    "name": "Tofu (drained or firm)",
    "fodmap": "low",
    "category": "Meat and Substitutes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "11",
    "name": "Canola oil",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "12",
    "name": "Brussel sprouts",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "qty":"2",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "13",
    "name": "Peanut butter",
    "fodmap": "low",
    "category": "Condiments",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "14",
    "name": "Almond butter",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
    "qty":"1 tbsp",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "15",
    "name": "Seaweed / nori",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "16",
    "name": "Pine nuts",
    "fodmap": "low",
    "category": "Nuts and Seeds",
    "qty":"15",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "17",
    "name": "Lime juice",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "18",
    "name": "Lime",
    "fodmap": "low",
    "category": "Fruit",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "19",
    "name": "Figs, dried",
    "fodmap": "high",
    "category": "Fruit",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "20",
    "name": "Silverbeet / chard",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "21",
    "name": "Ginger",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "22",
    "name": "Coconut oil",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "23",
    "name": "Scallop",
    "fodmap": "low",
    "category": "Meat and Substitutes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "24",
    "name": "Flax seeds/lineseed",
    "fodmap": "low",
    "category": "Nuts and Seeds",
    "qty":"1 teaspoon",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "25",
    "name": "Leeks",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "26",
    "name": "Kholrabi",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "27",
    "name": "Cherries",
    "fodmap": "high",
    "category": "Fruit",
	  "details": {"oligos":0,"fructose":2,"polyols":1,"lactose":0}
  },
  {
    "id": "28",
    "name": "Baking soda",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "29",
    "name": "Turmeric",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "30",
    "name": "Baking powder",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "32",
    "name": "Pomegranate",
    "fodmap": "high",
    "category": "Fruit",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "33",
    "name": "Pinto beans",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "34",
    "name": "Dates",
    "fodmap": "high",
    "category": "Fruit",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "35",
    "name": "Curry powder",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "36",
    "name": "Coconut sugar ",
    "fodmap": "low",
    "category": "Sweeteners",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "37",
    "name": "Coconut cream",
    "fodmap": "low",
    "category": "Milk",
    "qty":"1/2 cup",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "38",
    "name": "Vinegar",
    "fodmap": "low",
    "category": "Condiments",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "39",
    "name": "Bacon",
    "fodmap": "low",
    "category": "Meat and Substitutes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "40",
    "name": "Vanilla",
    "fodmap": "low",
    "category": "Sweeteners",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "41",
    "name": "Prune",
    "fodmap": "high",
    "category": "Fruit",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 2 ,"lactose": 0}
  },
  {
    "id": "43",
    "name": "Brown sugar",
    "fodmap": "low",
    "category": "Sweeteners",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "44",
    "name": "White sugar",
    "fodmap": "low",
    "category": "Sweeteners",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "45",
    "name": "Maple syrup",
    "fodmap": "low",
    "category": "Sweeteners",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "46",
    "name": "Ground beef",
    "fodmap": "low",
    "category": "Meat and Substitutes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "48",
    "name": "Croissants",
    "fodmap": "high",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": "?","fructose": "?", "polyols": "?" ,"lactose": "?"}
  },
  {
    "id": "49",
    "name": "Crumpets",
    "fodmap": "high",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": "?","fructose": "?", "polyols": "?" ,"lactose": "?"}
  },
  {
    "id": "51",
    "name": "Margarine",
    "fodmap": "low",
    "category": "Dairy",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "52",
    "name": "Ketchup (USA)",
    "fodmap": "low",
    "category": "Condiments",
    "qty":"1 sachet",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "53",
    "name": "Lentils, boiled",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "qty":"1/4 cup",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "54",
    "name": "Shallot",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "55",
    "name": "Nectarine",
    "fodmap": "high",
    "category": "Fruit",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 2 ,"lactose": 0}
  },
  {
    "id": "56",
    "name": "Mandarin",
    "fodmap": "low",
    "category": "Fruit",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "57",
    "name": "Whiskey",
    "fodmap": "low",
    "category": "Drinks",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "58",
    "name": "Vodka",
    "fodmap": "low",
    "category": "Drinks",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "59",
    "name": "Yam",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "60",
    "name": "Rutabaga",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "61",
    "name": "Radish",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "62",
    "name": "Olives",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "63",
    "name": "Chives",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "64",
    "name": "Bell pepper",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "65",
    "name": "Arugula",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "66",
    "name": "Bok choy",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "67",
    "name": "Taro",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "68",
    "name": "Soy beans, boiled",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "69",
    "name": "Mung beans, boiled",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "70",
    "name": "Lima beans, boiled",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "71",
    "name": "Haricot beans, boiled",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "72",
    "name": "Sauerkraut",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 2, "polyols": 2 ,"lactose": 0}
  },
  {
    "id": "73",
    "name": "Falafel",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "74",
    "name": "Chayote / choko",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "75",
    "name": "Cho Cho",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "76",
    "name": "Cassava",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "77",
    "name": "Butter beans, canned",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "78",
    "name": "Broad beans",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 2, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "79",
    "name": "Kidney beans, boiled",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "80",
    "name": "Black eyed peas",
    "fodmap": "high",
    "category": "Vegetables and legumes",
    "details": {"oligos": "?","fructose": "?", "polyols": "?" ,"lactose": "?"}
  },
  {
    "id": "81",
    "name": "Black beans, boiled",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "82",
    "name": "Beetroots/Beets",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "83",
    "name": "Baked beans",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 2, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "84",
    "name": "Artichoke, globe",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "85",
    "name": "Kefir",
    "fodmap": "high",
    "category": "Dairy",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 2}
  },
  {
    "id": "86",
    "name": "White tea",
    "fodmap": "low",
    "category": "Drinks",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "87",
    "name": "Green tea",
    "fodmap": "low",
    "category": "Drinks",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "88",
    "name": "Black tea, weak",
    "fodmap": "low",
    "category": "Drinks",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "89",
    "name": "Black tea, strong",
    "fodmap": "high",
    "category": "Drinks",
	  "details": {"oligos": 1,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "90",
    "name": "Chai tea, weak",
    "fodmap": "low",
    "category": "Drinks",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "91",
    "name": "Oolong tea",
    "fodmap": "high",
    "category": "Drinks",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "92",
    "name": "Dandelion tea, strong",
    "fodmap": "high",
    "category": "Drinks",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "93",
    "name": "Chai tea, strong",
    "fodmap": "high",
    "category": "Drinks",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "94",
    "name": "Chamomile tea",
    "fodmap": "high",
    "category": "Drinks",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "96",
    "name": "Rum",
    "fodmap": "high",
    "category": "Drinks",
	  "details": {"oligos": 0,"fructose": 2, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "97",
    "name": "Cold cuts / deli meat / cold meats such as ham",
    "fodmap": "low",
    "category": "Meat and Substitutes",
    "details": {"oligos": "?","fructose": "?", "polyols": "?" ,"lactose": "?"}
  },
  {
    "id": "98",
    "name": "Turkey",
    "fodmap": "low",
    "category": "Meat and Substitutes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "99",
    "name": "Prosciutto",
    "fodmap": "low",
    "category": "Meat and Substitutes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "100",
    "name": "Thyme",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "101",
    "name": "Tarragon",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "102",
    "name": "Rosemary",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "103",
    "name": "Rampa / pandan leaves",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "105",
    "name": "Oregano",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "106",
    "name": "Mint",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "107",
    "name": "Lemongrass",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "108",
    "name": "Gotukala",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "109",
    "name": "Fenugreek leaves, dried",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "110",
    "name": "Curry leaves",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "111",
    "name": "Coriander",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "112",
    "name": "Cilantro",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "113",
    "name": "Basil",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "114",
    "name": "Parsley",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "115",
    "name": "Cinnamon",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "116",
    "name": "Acesulfame K",
    "fodmap": "low",
    "category": "Sweeteners",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "117",
    "name": "Agave",
    "fodmap": "high",
    "category": "Sweeteners",
	  "details": {"oligos": 2,"fructose": 2, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "118",
    "name": "Almond milk",
    "fodmap": "low",
    "category": "Milk",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "119",
    "name": "Almonds",
    "fodmap": "high",
    "category": "Nuts and Seeds",
    "qty":"10",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "120",
    "name": "Apple juice",
    "fodmap": "high",
    "category": "Drinks",
	  "details": {"oligos": 0,"fructose": 2, "polyols": 2 ,"lactose": 0}
  },
  {
    "id": "122",
    "name": "Apricot",
    "fodmap": "high",
    "category": "Fruit",
	  "details": {"oligos": 1,"fructose": 0, "polyols": 2 ,"lactose": 0}
  },
  {
    "id": "123",
    "name": "Asparagus",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 2, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "124",
    "name": "Aspartame",
    "fodmap": "low",
    "category": "Sweeteners",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "125",
    "name": "Avocado",
    "fodmap": "high",
    "category": "Fruit",
	  "details": {"oligos": 0,"fructose": 2, "polyols": 2 ,"lactose": 0}
  },
  {
    "id": "126",
    "name": "Bamboo shoots",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "127",
    "name": "Bananas, ripe",
    "fodmap": "high",
    "category": "Fruit",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "128",
    "name": "Barbeque sauce",
    "fodmap": "low",
    "category": "Condiments",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "129",
    "name": "Barley, pearl",
    "fodmap": "high",
    "category": "Breads, Cereals, Grains and Pasta",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "130",
    "name": "Bean sprouts",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "131",
    "name": "Beef",
    "fodmap": "low",
    "category": "Meat and Substitutes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "132",
    "name": "Eggs",
    "fodmap": "low",
    "category": "Dairy",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "133",
    "name": "Beer",
    "fodmap": "low",
    "category": "Drinks",
    "qty":"1",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "134",
    "name": "Blackberry",
    "fodmap": "high",
    "category": "Fruit",
	  "details": {"oligos": 0,"fructose": 2, "polyols": 2 ,"lactose": 0}
  },
  {
    "id": "135",
    "name": "Blueberry",
    "fodmap": "low",
    "category": "Fruit",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "136",
    "name": "Wheat bran, pellets",
    "fodmap": "high",
    "category": "Breads, Cereals, Grains and Pasta",
	  "details": {"oligos":2,"fructose":1,"polyols":0,"lactose":0}
  },
  {
    "id": "137",
    "name": "Brazil Nuts",
    "fodmap": "low",
    "category": "Nuts and Seeds",
    "qty":"10",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "138",
    "name": "Brie cheese",
    "fodmap": "low",
    "category": "Cheese",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "139",
    "name": "Broccoli",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "qty":"1/2 cup",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "140",
    "name": "Buckwheat, flour",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "141",
    "name": "Butter",
    "fodmap": "low",
    "category": "Dairy",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "142",
    "name": "Buttermilk",
    "fodmap": "high",
    "category": "Dairy",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 2}
  },
  {
    "id": "143",
    "name": "Cabbage, common",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "144",
    "name": "Cabbage, savoy",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "145",
    "name": "Camembert cheese",
    "fodmap": "low",
    "category": "Cheese",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "146",
    "name": "Cantaloupe",
    "fodmap": "low",
    "category": "Fruit",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "147",
    "name": "Carrots",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "148",
    "name": "Cashews",
    "fodmap": "high",
    "category": "Nuts and Seeds",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "149",
    "name": "Cauliflower",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 2, "polyols": 2 ,"lactose": 0}
  },
  {
    "id": "150",
    "name": "Celery",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "qty":"5cm",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 1 ,"lactose": 0}
  },
  {
    "id": "151",
    "name": "Cheddar cheese",
    "fodmap": "low",
    "category": "Cheese",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "152",
    "name": "Chestnuts",
    "fodmap": "low",
    "category": "Nuts and Seeds",
    "qty":"10",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "153",
    "name": "Chia seeds",
    "fodmap": "low",
    "category": "Nuts and Seeds",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "154",
    "name": "Chickpeas, canned",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "qty":"1/4 cup",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "155",
    "name": "Chicken",
    "fodmap": "low",
    "category": "Meat and Substitutes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "156",
    "name": "Chips, potato crisps (plain)",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "157",
    "name": "Chorizo",
    "fodmap": "high",
    "category": "Meat and Substitutes",
    "details": {"oligos": "?","fructose": "?", "polyols": "?" ,"lactose": "?"}
  },
  {
    "id": "158",
    "name": "Chutney",
    "fodmap": "low",
    "category": "Condiments",
    "qty":"1 tbsp",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "159",
    "name": "Clementine",
    "fodmap": "low",
    "category": "Fruit",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "160",
    "name": "Coconut (fresh or dried)",
    "fodmap": "low",
    "category": "Fruit",
	  "qty":"1/2 cup",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 1 ,"lactose": 0}
  },
  {
    "id": "161",
    "name": "Coconut milk, canned",
    "fodmap": "low",
    "category": "Milk",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "162",
    "name": "Coconut water",
    "fodmap": "high",
    "category": "Drinks",
	"details": {"oligos": 1,"fructose": 0, "polyols": 2 ,"lactose": 0}
  },
  {
    "id": "163",
    "name": "Coffee, black",
    "fodmap": "low",
    "category": "Drinks",
    "details": {"oligos": "?","fructose": "?", "polyols": "?" ,"lactose": "?"}
  },
  {
    "id": "164",
    "name": "Colby cheese",
    "fodmap": "low",
    "category": "Cheese",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "165",
    "name": "Corn / Sweet corn",
    "fodmap": "high",
    "category": "Vegetables and legumes",
    "qty":"1/2 cob",
	  "details": {"oligos": 1,"fructose": 0, "polyols": 2 ,"lactose": 0}
  },
  {
    "id": "166",
    "name": "Cornf lour",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "167",
    "name": "Cottage cheese",
    "fodmap": "low",
    "category": "Cheese",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "169",
    "name": "Cous cous, wheat",
    "fodmap": "high",
    "category": "Breads, Cereals, Grains and Pasta",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "170",
    "name": "Cow milk",
    "fodmap": "high",
    "category": "Milk",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 2}
  },
  {
    "id": "171",
    "name": "Cranberry",
    "fodmap": "low",
    "category": "Fruit",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "172",
    "name": "Cream, regular fat",
    "fodmap": "high",
    "category": "Dairy",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 1}
  },
  {
    "id": "173",
    "name": "Cream cheese",
    "fodmap": "high",
    "category": "Cheese",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 1}
  },
  {
    "id": "174",
    "name": "Cucumber",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "175",
    "name": "Custard",
    "fodmap": "high",
    "category": "Dairy",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 2}
  },
  {
    "id": "176",
    "name": "Dark chocolate",
    "fodmap": "low",
    "category": "Sweeteners",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "177",
    "name": "Dragon Fruit",
    "fodmap": "low",
    "category": "Fruit",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "178",
    "name": "Drinking chocolate powder (any % cocoa)",
    "fodmap": "low",
    "category": "Drinks",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "179",
    "name": "Durian",
    "fodmap": "low",
    "category": "Fruit",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "180",
    "name": "Eggplant",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "181",
    "name": "Fennel tea",
    "fodmap": "high",
    "category": "Drinks",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "182",
    "name": "Feta cheese",
    "fodmap": "low",
    "category": "Cheese",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "183",
    "name": "Garlic",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "184",
    "name": "Garlic infused oil",
    "fodmap": "low",
    "category": "Condiments",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "185",
    "name": "Glucose",
    "fodmap": "low",
    "category": "Sweeteners",
    "details": {"oligos": "?","fructose": "?", "polyols": "?" ,"lactose": "?"}
  },
  {
    "id": "186",
    "name": "Gluten free wheat products (e.g. breads, cereals, pasta) made without high fodmap ingredients like honey or garlic",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "187",
    "name": "Gnocchi, wheat",
    "fodmap": "high",
    "category": "Breads, Cereals, Grains and Pasta",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "188",
    "name": "Goat cheese (ok not for all)",
    "fodmap": "low",
    "category": "Cheese",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "189",
    "name": "Goat milk",
    "fodmap": "high",
    "category": "Milk",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 2}
  },
  {
    "id": "190",
    "name": "Golden syrup / light tracle",
    "fodmap": "low",
    "category": "Condiments",
    "qty": "1/2 tbsp",
    "details": {"oligos": "2","fructose": "0", "polyols": "0" ,"lactose": "0"}
  },
  {
    "id": "191",
    "name": "Granola",
    "fodmap": "high",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": "?","fructose": "?", "polyols": "?" ,"lactose": "?"}
  },
  {
    "id": "192",
    "name": "Grapefruit",
    "fodmap": "high",
    "category": "Fruit",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "193",
    "name": "Grapes (Red, Green and Black)",
    "fodmap": "low",
    "category": "Fruit",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "194",
    "name": "Greek yogurt",
    "fodmap": "low",
    "category": "Dairy",
    "qty":"small amounts",
    "details": {"oligos": "?","fructose": "?", "polyols": "?" ,"lactose": "?"}
  },
  {
    "id": "195",
    "name": "Goat yogurt",
    "fodmap": "low",
    "category": "Dairy",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "196",
    "name": "Lactose free yogurt",
    "fodmap": "low",
    "category": "Dairy",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "197",
    "name": "Yogurt",
    "fodmap": "high",
    "category": "Dairy",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 2}
  },
  {
    "id": "198",
    "name": "Green Beans",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "199",
    "name": "Green Pepper",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "200",
    "name": "Havarti cheese",
    "fodmap": "low",
    "category": "Cheese",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "201",
    "name": "Hazelnuts",
    "fodmap": "low",
    "category": "Nuts and Seeds",
    "qty":"10",
    "details": {"oligos": 1,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "202",
    "name": "Hemp milk",
    "fodmap": "low",
    "category": "Milk",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "203",
    "name": "Oats",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "204",
    "name": "Herbal tea (strong)",
    "fodmap": "high",
    "category": "Drinks",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "205",
    "name": "Herbal tea (weak)",
    "fodmap": "low",
    "category": "Drinks",
    "details": {"oligos": 1,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "206",
    "name": "High Fructose Corn Syrup (HFCS)",
    "fodmap": "high",
    "category": "Sweeteners",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "207",
    "name": "Hommus dip",
    "fodmap": "high",
    "category": "Condiments",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "208",
    "name": "Honey",
    "fodmap": "high",
    "category": "Sweeteners",
    "details": {"oligos": 0,"fructose": 2, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "209",
    "name": "Ice cream",
    "fodmap": "high",
    "category": "Dairy",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 1}
  },
  {
    "id": "210",
    "name": "Inulin",
    "fodmap": "high",
    "category": "Sweeteners",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "211",
    "name": "Isomalt",
    "fodmap": "high",
    "category": "Sweeteners",
    "details": {"oligos": "?","fructose": "?", "polyols": "?" ,"lactose": "?"}
  },
  {
    "id": "212",
    "name": "Jam (mixed berries)",
    "fodmap": "high",
    "category": "Condiments",
    "details": {"oligos": 0,"fructose": 2, "polyols": 2 ,"lactose": 0}
  },
  {
    "id": "213",
    "name": "Kale",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "214",
    "name": "Kiwi fruit",
    "fodmap": "low",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "215",
    "name": "Kumquat",
    "fodmap": "low",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "216",
    "name": "Lactose free milk",
    "fodmap": "low",
    "category": "Milk",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "217",
    "name": "Lamb",
    "fodmap": "low",
    "category": "Meat and Substitutes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "218",
    "name": "Lemon",
    "fodmap": "low",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "219",
    "name": "Lettuce (e.g. rocket, butter, iceberg, radicchio, red coral)",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "220",
    "name": "Macadamia nuts",
    "fodmap": "low",
    "category": "Nuts and Seeds",
    "qty":"20",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "221",
    "name": "Maltitol",
    "fodmap": "high",
    "category": "Sweeteners",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "223",
    "name": "Mango",
    "fodmap": "high",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 2, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "224",
    "name": "Mango juice",
    "fodmap": "high",
    "category": "Drinks",
    "details": {"oligos": 0,"fructose": 2, "polyols": 2 ,"lactose": 0}
  },
  {
    "id": "225",
    "name": "Mannitol",
    "fodmap": "high",
    "category": "Sweeteners",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "226",
    "name": "Mayonnaise",
    "fodmap": "low",
    "category": "Condiments",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "227",
    "name": "Melons e.g. Honeydew, galia",
    "fodmap": "low",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "228",
    "name": "Milk chocolate",
    "fodmap": "low",
    "category": "Dairy",
    "qty":"3 squares",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 1}
  },
  {
    "id": "229",
    "name": "Mozzarella cheese",
    "fodmap": "low",
    "category": "Cheese",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "230",
    "name": "Muesli",
    "fodmap": "high",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "231",
    "name": "Muffins",
    "fodmap": "high",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": "?","fructose": "?", "polyols": "?" ,"lactose": "?"}
  },
  {
    "id": "232",
    "name": "Mushrooms",
    "fodmap": "high",
    "category": "Vegetables and legumes",
    "details": {"oligos": 1,"fructose": 0, "polyols": 2 ,"lactose": 0}
  },
  {
    "id": "233",
    "name": "Mustard",
    "fodmap": "low",
    "category": "Condiments",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "234",
    "name": "Oat milk",
    "fodmap": "low",
    "category": "Milk",
    "qty":"30ml",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "235",
    "name": "Oatmeal",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "qty":"1/2 cup",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "236",
    "name": "Onions",
    "fodmap": "high",
    "category": "Vegetables and legumes",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "237",
    "name": "Orange",
    "fodmap": "low",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "238",
    "name": "Orange juice",
    "fodmap": "high",
    "category": "Drinks",
    "qty":"125ml",
    "details": {"oligos": 0,"fructose": 2, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "239",
    "name": "Papaya",
    "fodmap": "low",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "240",
    "name": "Parmesan cheese",
    "fodmap": "low",
    "category": "Cheese",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "241",
    "name": "Parsnip",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "242",
    "name": "Passion Fruit",
    "fodmap": "low",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "243",
    "name": "Pasta sauce (cream based)",
    "fodmap": "high",
    "category": "Condiments",
    "details": {"oligos":2,"fructose":0,"polyols":0,"lactose":1}
  },
  {
    "id": "244",
    "name": "Peaches",
    "fodmap": "high",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 2, "polyols": 2 ,"lactose": 0}
  },
  {
    "id": "245",
    "name": "Peanuts",
    "fodmap": "low",
    "category": "Nuts and Seeds",
    "qty":"32",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "246",
    "name": "Pear juice",
    "fodmap": "high",
    "category": "Drinks",
    "details": {"oligos": 0,"fructose": 2, "polyols": 2 ,"lactose": 0}
  },
  {
    "id": "247",
    "name": "Pears",
    "fodmap": "high",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 2, "polyols": 2 ,"lactose": 0}
  },
  {
    "id": "248",
    "name": "Peas",
    "fodmap": "high",
    "category": "Vegetables and legumes",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "249",
    "name": "Pecans",
    "fodmap": "low",
    "category": "Nuts and Seeds",
    "qty":"10",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "250",
    "name": "Pecorino cheese",
    "fodmap": "low",
    "category": "Cheese",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "251",
    "name": "Peppermint tea",
    "fodmap": "low",
    "category": "Drinks",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "252",
    "name": "Pineapple",
    "fodmap": "low",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "253",
    "name": "Pistachio",
    "fodmap": "high",
    "category": "Nuts and Seeds",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "254",
    "name": "Plums",
    "fodmap": "high",
    "category": "Fruit",
    "details": {"oligos": 2,"fructose": 0, "polyols": 2 ,"lactose": 0}
  },
  {
    "id": "255",
    "name": "Popcorn",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "256",
    "name": "Poppy seeds",
    "fodmap": "low",
    "category": "Nuts and Seeds",
    "qty":"2 tablespoons",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "257",
    "name": "Pork",
    "fodmap": "low",
    "category": "Meat and Substitutes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "258",
    "name": "Potato",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "259",
    "name": "Pretzels",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "260",
    "name": "Pumpkin",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "261",
    "name": "Pumpkin seeds",
    "fodmap": "low",
    "category": "Nuts and Seeds",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "262",
    "name": "Quinoa",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "263",
    "name": "Quorn mince",
    "fodmap": "low",
    "category": "Meat and Substitutes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "264",
    "name": "Raisins",
    "fodmap": "high",
    "category": "Fruit",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "265",
    "name": "Raspberry",
    "fodmap": "low",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "266",
    "name": "Red Peppers",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "267",
    "name": "Relish",
    "fodmap": "high",
    "category": "Condiments",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "268",
    "name": "Rhubarb",
    "fodmap": "low",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "269",
    "name": "Brown rice",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "270",
    "name": "White rice",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "271",
    "name": "Basmati rice",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "272",
    "name": "Rice milk",
    "fodmap": "low",
    "category": "Milk",
    "qty":"200ml",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "273",
    "name": "Ricotta cheese",
    "fodmap": "high",
    "category": "Cheese",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 1}
  },
  {
    "id": "274",
    "name": "Rye",
    "fodmap": "high",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 2,"fructose": 2, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "275",
    "name": "Saccharine",
    "fodmap": "low",
    "category": "Sweeteners",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "276",
    "name": "Sausages",
    "fodmap": "high",
    "category": "Meat and Substitutes",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "277",
    "name": "Savory biscuits",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "278",
    "name": "Scallions / Spring onions / Green onions (green part)",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "279",
    "name": "Scallions / Spring onions / Green onions (white part)",
    "fodmap": "high",
    "category": "Vegetables and legumes",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "280",
    "name": "Semolina",
    "fodmap": "high",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": "?","fructose": "?", "polyols": "?" ,"lactose": "?"}
  },
  {
    "id": "281",
    "name": "Sesame seeds",
    "fodmap": "low",
    "category": "Nuts and Seeds",
    "qty":"2 tablespoons",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "282",
    "name": "Sheep's milk",
    "fodmap": "high",
    "category": "Milk",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "283",
    "name": "Sodas with HFCS",
    "fodmap": "high",
    "category": "Drinks",
    "details": {"oligos": "?","fructose": "?", "polyols": "?" ,"lactose": "?"}
  },
  {
    "id": "284",
    "name": "Sorbitol",
    "fodmap": "high",
    "category": "Sweeteners",
    "details": {"oligos": "?","fructose": "?", "polyols": "?" ,"lactose": "?"}
  },
  {
    "id": "285",
    "name": "Sour cream",
    "fodmap": "high",
    "category": "Dairy",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 2}
  },
  {
    "id": "286",
    "name": "Soy milk made with soy beans",
    "fodmap": "high",
    "category": "Milk",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "287",
    "name": "Soy sauce",
    "fodmap": "low",
    "category": "Condiments",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "288",
    "name": "Soya milk made with soy protein",
    "fodmap": "low",
    "category": "Milk",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "289",
    "name": "Spelt flakes",
    "fodmap": "high",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "290",
    "name": "Spelt bread (non-sourdough)",
    "fodmap": "high",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "291",
    "name": "Spelt bread (sourdough)",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "292",
    "name": "Spelt pasta",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "qty":"1/2 cup",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "293",
    "name": "Butternut squash",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "qty":"1/4 cup",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "294",
    "name": "Star Fruit",
    "fodmap": "low",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "295",
    "name": "Stevia",
    "fodmap": "low",
    "category": "Sweeteners",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "296",
    "name": "Strawberry",
    "fodmap": "low",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "297",
    "name": "Strawberry jam / jelly (without HFCS)",
    "fodmap": "low",
    "category": "Condiments",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "298",
    "name": "Sucralose",
    "fodmap": "low",
    "category": "Sweeteners",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "299",
    "name": "Sugar/sucrose",
    "fodmap": "low",
    "category": "Sweeteners",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "300",
    "name": "Sultanas",
    "fodmap": "high",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "301",
    "name": "Sunflower seeds",
    "fodmap": "low",
    "category": "Nuts and Seeds",
    "qty":"2 teaspoons",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "302",
    "name": "Sweet Potato",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "303",
    "name": "Swiss cheese",
    "fodmap": "low",
    "category": "Cheese",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "304",
    "name": "Tamarind",
    "fodmap": "low",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "305",
    "name": "Tangelo",
    "fodmap": "low",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "306",
    "name": "Tomato sauce",
    "fodmap": "low",
    "category": "Condiments",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "307",
    "name": "Tomatoes",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "308",
    "name": "Chips, tortilla",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "309",
    "name": "Turnip",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "310",
    "name": "Tzatziki dip",
    "fodmap": "high",
    "category": "Condiments",
    "details": {"oligos": 2,"fructose": 2, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "311",
    "name": "Walnuts",
    "fodmap": "low",
    "category": "Nuts and Seeds",
    "qty":"10",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "312",
    "name": "Water",
    "fodmap": "low",
    "category": "Drinks",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "313",
    "name": "Watermelon",
    "fodmap": "high",
    "category": "Fruit",
    "details": {"oligos":2,"fructose":2,"polyols":2,"lactose":0}
  },
  {
    "id": "314",
    "name": "Wheat foods e.g. Bread, cereal, pasta",
    "fodmap": "high",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "315",
    "name": "White chocolate",
    "fodmap": "low",
    "category": "Dairy",
    "qty":"3 squares",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 1}
  },
  {
    "id": "316",
    "name": "Wine",
    "fodmap": "low",
    "category": "Drinks",
    "qty":"1",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "317",
    "name": "Xylitol",
    "fodmap": "high",
    "category": "Sweeteners",
    "details": {"oligos": "?","fructose": "?", "polyols": "?" ,"lactose": "?"}
  },
  {
    "id": "318",
    "name": "Zucchini / courgette",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "319",
    "name": "Tahini",
    "fodmap": "high",
    "category": "Condiments",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "320",
    "name": "Spinach",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "321",
    "name": "Shrimp",
    "fodmap": "low",
    "category": "Meat and Substitutes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "322",
    "name": "Prawns",
    "fodmap": "low",
    "category": "Meat and Substitutes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "323",
    "name": "Oysters",
    "fodmap": "low",
    "category": "Meat and Substitutes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "324",
    "name": "Mussels",
    "fodmap": "low",
    "category": "Meat and Substitutes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "325",
    "name": "Lobster",
    "fodmap": "low",
    "category": "Meat and Substitutes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "326",
    "name": "Crab",
    "fodmap": "low",
    "category": "Meat and Substitutes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "327",
    "name": "Tuna",
    "fodmap": "low",
    "category": "Meat and Substitutes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "328",
    "name": "Trout",
    "fodmap": "low",
    "category": "Meat and Substitutes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "329",
    "name": "Salmon",
    "fodmap": "low",
    "category": "Meat and Substitutes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "330",
    "name": "Cod",
    "fodmap": "low",
    "category": "Meat and Substitutes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "331",
    "name": "Haddock",
    "fodmap": "low",
    "category": "Meat and Substitutes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "332",
    "name": "Olive Oil",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "333",
    "name": "Goji Berries",
    "fodmap": "high",
    "category": "Fruit",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "334",
    "name": "Rice Crackers",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "335",
    "name": "Rice Cakes",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "336",
    "name": "Edamame",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "337",
    "name": "Acorn Squash",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "338",
    "name": "Balsamic Vinegar",
    "fodmap": "low",
    "category": "Condiments",
    "qty":"2 tbsp",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "339",
    "name": "Apple Cider Vinegar",
    "fodmap": "low",
    "category": "Condiments",
    "qty":"2 tbsp",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "340",
    "name": "Split Peas",
    "fodmap": "high",
    "category": "Vegetables and legumes",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "341",
    "name": "Blue Cheese",
    "fodmap": "low",
    "category": "Cheese",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "342",
    "name": "Tapioca",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "343",
    "name": "Sesame Oil",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "344",
    "name": "Spaghetti squash",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "qty":"2.5 cups",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "345",
    "name": "Okra",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "346",
    "name": "Capers",
    "fodmap": "low",
    "category": "Condiments",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "347",
    "name": "Gin",
    "fodmap": "low",
    "category": "Drinks",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "348",
    "name": "Jasmine rice",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "349",
    "name": "Kombucha",
    "fodmap": "high",
    "category": "Drinks",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "350",
    "name": "Molasses",
    "fodmap": "high",
    "category": "Condiments",
    "details": {"oligos": "?","fructose": "?", "polyols": "?" ,"lactose": "?"}
  },
  {
    "id": "351",
    "name": "Sorghum",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "qty":"2/3 cups",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "352",
    "name": "Almond flour",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "qty":"1/4 cup",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "353",
    "name": "Coconut flour",
    "fodmap": "high",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos":2,"fructose":2,"polyols":2,"lactose":0}
  },
  {
    "id": "354",
    "name": "Cumin",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "355",
    "name": "Endive",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "356",
    "name": "Garlic powder",
    "fodmap": "high",
    "category": "Cooking ingredients, Herbs and Spices",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "357",
    "name": "Garlic salt",
    "fodmap": "high",
    "category": "Cooking ingredients, Herbs and Spices",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "358",
    "name": "Millet flour",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "qty":"2/3 cup",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "359",
    "name": "Halloumi / Hellim",
    "fodmap": "low",
    "category": "Cheese",
    "qty":"50g",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "360",
    "name": "Rice noodles",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "361",
    "name": "Watercress",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "362",
    "name": "Celeriac",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "363",
    "name": "Salt",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "364",
    "name": "Pepper, black",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "365",
    "name": "Jicama",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "366",
    "name": "Paprika",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "367",
    "name": "Asiago cheese",
    "fodmap": "low",
    "category": "Cheese",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "368",
    "name": "Miso paste",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "369",
    "name": "Tomato paste",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "370",
    "name": "Baby spinach",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "371",
    "name": "Apricots, dried",
    "fodmap": "high",
    "category": "Fruit",
    "details": {"oligos": 1,"fructose": 0, "polyols": 2 ,"lactose": 0}
  },
  {
    "id": "372",
    "name": "Guava, ripe",
    "fodmap": "low",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "373",
    "name": "Guava, unripe",
    "fodmap": "high",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 2, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "374",
    "name": "Banana, dried",
    "fodmap": "low",
    "category": "Fruit",
    "qty":"20",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "375",
    "name": "Yucca root",
    "fodmap": "high",
    "category": "Vegetables and legumes",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "376",
    "name": "Feijoa",
    "fodmap": "high",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 2, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "377",
    "name": "Chips, corn (plain)",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "378",
    "name": "Nutritional Yeast",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "379",
    "name": "Tempeh",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "380",
    "name": "Snow peas",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "qty":"5 pods",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "381",
    "name": "Capsicum",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "382",
    "name": "Collard greens",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "383",
    "name": "Lemonade",
    "fodmap": "low",
    "category": "Drinks",
    "qty":"small amounts",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "384",
    "name": "Nutmeg",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "385",
    "name": "Persimmon",
    "fodmap": "high",
    "category": "Fruit",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "386",
    "name": "Tumeric",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "387",
    "name": "Wheat flour",
    "fodmap": "high",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "388",
    "name": "Wild rice",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "389",
    "name": "Alfalfa sprouts",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "390",
    "name": "Amaranth flour",
    "fodmap": "high",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "391",
    "name": "Amaranth, puffed grain",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "qty":"1/4 cup",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "392",
    "name": "Cardamom",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "393",
    "name": "Carob powder",
    "fodmap": "high",
    "category": "Vegetables and legumes",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "394",
    "name": "Chicory leaves",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "395",
    "name": "Garbanzo beans, canned",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "qty":"1/4 cup",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "396",
    "name": "Gherkins in vinegar",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "397",
    "name": "Lychee",
    "fodmap": "high",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 2, "polyols": 2 ,"lactose": 0}
  },
  {
    "id": "398",
    "name": "Palm sugar",
    "fodmap": "low",
    "category": "Sweeteners",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "399",
    "name": "Pesto sauce",
    "fodmap": "low",
    "category": "Condiments",
    "qty":"10g",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "400",
    "name": "Sunflower oil",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "401",
    "name": "Grits",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "402",
    "name": "Horseradish",
    "fodmap": "low",
    "category": "Condiments",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "403",
    "name": "Plantains",
    "fodmap": "low",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "404",
    "name": "Ghee",
    "fodmap": "low",
    "category": "Cooking ingredients, Herbs and Spices",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "405",
    "name": "Oatcake",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "406",
    "name": "Dried Cranberries",
    "fodmap": "low",
    "category": "Fruit",
    "qty": "1/2 tablespoon",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "407",
    "name": "Currants",
    "fodmap": "high",
    "category": "Fruit",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "408",
    "name": "Vegemite",
    "fodmap": "low",
    "category": "Condiments",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "409",
    "name": "Marmite",
    "fodmap": "low",
    "category": "Condiments",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "410",
    "name": "Onion Powder",
    "fodmap": "high",
    "category": "Cooking ingredients, Herbs and Spices",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "411",
    "name": "Garlic Powder",
    "fodmap": "high",
    "category": "Cooking ingredients, Herbs and Spices",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "412",
    "name": "Rambutan",
    "fodmap": "low",
    "category": "Fruit",
    "qty":"2 rambutans",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "413",
    "name": "Soba noodles",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "414",
    "name": "Wasabi powder",
    "fodmap": "low",
    "category": "Condiments",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "415",
    "name": "Figs, fresh",
    "fodmap": "high",
    "category": "Fruit",
	  "details": {"oligos": 0,"fructose": 2, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "416",
    "name": "Dandelion tea, weak",
    "fodmap": "low",
    "category": "Drinks",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "417",
    "name": "Lentils, canned",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 1,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "418",
    "name": "Mung beans, sprouted",
    "fodmap": "low",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "419",
    "name": "Kidney beans, sprouted",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "420",
    "name": "Black beans, canned",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "421",
    "name": "Bananas, unripe",
    "fodmap": "low",
    "category": "Fruit",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "422",
    "name": "Barley, sprouted",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "423",
    "name": "Barley, flour",
    "fodmap": "high",
    "category": "Breads, Cereals, Grains and Pasta",
	"details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "424",
    "name": "Chickpeas, sprouted",
    "fodmap": "high",
    "category": "Vegetables and legumes",
	    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "425",
    "name": "Cranberry, dried",
    "fodmap": "low",
    "category": "Fruit",
	    "qty":"1 tbsp",
	    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "426",
    "name": "Apple (any, even dried)",
    "fodmap": "high",
    "category": "Fruits",
	  "details": {"oligos": 0,"fructose": 2, "polyols": 2 ,"lactose": 0}
  },
  {
    "id": "427",
    "name": "Tortillas, corn",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "429",
    "name": "White rice",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "430",
    "name": "Flour, spelt, white",
    "fodmap": "high",
    "category": "Breads, Cereals, Grains and Pasta",
	  "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "431",
    "name": "Flour, rice",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "432",
    "name": "Flour, quinoa",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "433",
    "name": "Flour, millet",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "434",
    "name": "Flour, maize",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
	  "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "435",
    "name": "Oats, quick (dry)",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 1,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "436",
    "name": "Flakes, barley",
    "fodmap": "high",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "437",
    "name": "Flakes, quinoa",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "438",
    "name": "Flakes, rice",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "439",
    "name": "Flakes, of corn",
    "fodmap": "high",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "440",
    "name": "Flakes, of corn (gluten free)",
    "fodmap": "low",
    "category": "Breads, Cereals, Grains and Pasta",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "441",
    "name": "Aubergine",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "442",
    "name": "Cabbage, red",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "443",
    "name": "Chilli, green",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "444",
    "name": "Chilli, red",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "445",
    "name": "Chinese cabbage",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "446",
    "name": "Pumpkin, canned",
    "fodmap": "low",
    "category": "Vegetables and legumes",
    "details": {"oligos": 1,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "447",
    "name": "Boysenberry",
    "fodmap": "high",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 2, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "448",
    "name": "Carambola",
    "fodmap": "low",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "449",
    "name": "Paw paw",
    "fodmap": "low",
    "category": "Fruit",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "450",
    "name": "Cheese, soy",
    "fodmap": "low",
    "category": "Cheese",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "451",
    "name": "Agar agar",
    "fodmap": "low",
    "category": "Sweeteners",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "452",
    "name": "Kvass",
    "fodmap": "low",
    "category": "Drinks",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "453",
    "name": "Fish",
    "fodmap": "low",
    "category": "Meat and Substitutes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "454",
    "name": "Kangaroo",
    "fodmap": "low",
    "category": "Meat and Substitutes",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "455",
    "name": "Biscuit with chocolate",
    "fodmap": "high",
    "category": "Sweeteners",
    "details": {"oligos": 2,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "456",
    "name": "Biscuit oatcakes",
    "fodmap": "low",
    "category": "Sweeteners",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "457",
    "name": "Biscuit, savoury, plain",
    "fodmap": "low",
    "category": "Sweeteners",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "458",
    "name": "Fruit bar",
    "fodmap": "high",
    "category": "Sweeteners",
    "details": {"oligos": 2,"fructose": 2, "polyols": 0 ,"lactose": 0}
  },
  {
    "id": "459",
    "name": "Sugar, raw",
    "fodmap": "low",
    "category": "Sweeteners",
    "details": {"oligos": 0,"fructose": 0, "polyols": 0 ,"lactose": 0}
  },






];


//
// ────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: C R E A T I N G   A   B L O C K S  W I T H  F O O D: :  :   :    :     :
// ────────────────────────────────────────────────────────────────────────────────
//

// Creating a preety circles right of Oligos, lactose....
for (var i = 0; i < fodmapList.length; i++) {
  if (fodmapList[i].details.oligos === 0) {
    var oligos = document.createElement("span");
    oligos.className = "circle__good";
  } else if (fodmapList[i].details.oligos === 1 ){
    var oligos = document.createElement("span");
    oligos.className = "circle__middle";
  } else if (fodmapList[i].details.oligos === 2 ){
    var oligos = document.createElement("span");
    oligos.className = "circle__bad";
  }

  if (fodmapList[i].details.fructose === 0) {
    var fructose = document.createElement("span");
    fructose.className = "circle__good";
  } else if (fodmapList[i].details.fructose === 1 ){
    var fructose = document.createElement("span");
    fructose.className = "circle__middle";
  } else if (fodmapList[i].details.fructose === 2 ){
    var fructose = document.createElement("span");
    fructose.className = "circle__bad";
  }

  if (fodmapList[i].details.polyols === 0) {
    var polyols = document.createElement("span");
    polyols.className = "circle__good";
  } else if (fodmapList[i].details.polyols === 1 ){
    var polyols = document.createElement("span");
    polyols.className = "circle__middle";
  } else if (fodmapList[i].details.polyols === 2 ){
    var polyols = document.createElement("span");
    polyols.className = "circle__bad";
  }

  if (fodmapList[i].details.lactose === 0) {
    var lactose = document.createElement("span");
    lactose.className = "circle__good";
  } else if (fodmapList[i].details.lactose === 1 ){
    var lactose = document.createElement("span");
    lactose.className = "circle__middle";
  } else if (fodmapList[i].details.lactose === 2 ){
    var lactose = document.createElement("span");
    lactose.className = "circle__bad";
  }

//Creating a blocks with food
  var container = document.getElementById("js-container");
  var food = document.createElement("div");
  var foodInfo = document.createElement("div");
  var foodTitle = document.createElement("div");
  var foodName = document.createElement("div");
  var foodFodmap = document.createElement("div");
  var foodDetails = document.createElement("p");
  var foodNameText = document.createTextNode(fodmapList[i].name);
  var foodFodmapText = document.createTextNode(fodmapList[i].fodmap);
  var oligosWrapper = document.createElement("span");
  var oligosText = document.createTextNode(" Oligos: ");
  var oligosColor = document.createElement("span");
  var fructoseWrapper = document.createElement("span");
  var fructoseText = document.createTextNode(" Fructose: ");
  var fructoseColor = document.createElement("span");
  var polyolsWrapper = document.createElement("span");
  var polyolsText = document.createTextNode(" Polyols: ");
  var polyolsColor = document.createElement("span");
  var lactoseWrapper = document.createElement("span");
  var lactoseText = document.createTextNode(" Lactose: ");
  var lactoseColor = document.createElement("span");
  container.appendChild(food);
  food.appendChild(foodInfo);
  foodInfo.appendChild(foodTitle);
  foodInfo.appendChild(foodDetails);
  foodTitle.appendChild(foodName);
  foodTitle.appendChild(foodFodmap);
  foodName.appendChild(foodNameText);
  foodFodmap.appendChild(foodFodmapText);
  foodDetails.appendChild(oligosWrapper);
  oligosWrapper.appendChild(oligosText);
  oligosWrapper.appendChild(oligos);
  foodDetails.appendChild(fructoseWrapper);
  fructoseWrapper.appendChild(fructoseText);
  fructoseWrapper.appendChild(fructose);
  foodDetails.appendChild(polyolsWrapper);
  polyolsWrapper.appendChild(polyolsText);
  polyolsWrapper.appendChild(polyols);
  foodDetails.appendChild(lactoseWrapper);
  lactoseWrapper.appendChild(lactoseText);
  lactoseWrapper.appendChild(lactose);
  food.className = "food";
  foodInfo.className = "food__info";
  foodTitle.className = "food__title";
  foodName.className = "food__title-name";
  foodFodmap.className = "food__fodmap";
  foodDetails.className = "food__details";
  oligosWrapper.className = "food__details-wrapper";
  fructoseWrapper.className = "food__details-wrapper";
  polyolsWrapper.className = "food__details-wrapper";
  lactoseWrapper.className = "food__details-wrapper";
}

//Add classes for low of high fodmap
for (var i = 0; i<fodmapList.length; i++) {
  if (fodmapList[i].fodmap === "low") {
    document.getElementsByClassName("food__fodmap")[i].className += " food__fodmap--low";
  } else {
    document.getElementsByClassName("food__fodmap")[i].className += " food__fodmap--high";
  }
}

for (var i = 0; i<fodmapList.length; i++) {
  document.getElementsByClassName("food")[i].style.display="block";
}

 //
 // ────────────────────────────────────────────────────────────────────── I ──────────
 //   :::::: S E A R C H I N G   B Y   I N P U T : :  :   :    :     :        :          :
 // ────────────────────────────────────────────────────────────────────────────────
 //
document.getElementById("js-search").oninput=function(){
  var matcher = new RegExp(document.getElementById("js-search").value, "i"); //  i = case-insensitive
  for (var i = 0; i<fodmapList.length; i++) {
    if (matcher.test(fodmapList[i].name)) {
      document.getElementsByClassName("food")[i].style.display="block";
    } else {
      document.getElementsByClassName("food")[i].style.display="none";
    }
      
  }
};


//
// ────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: F I L T E R I N G   B Y   C A T E G O R Y : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────
//
// 1) if category === clicked category show items from this categorry
// 2) all categories change their colors to "unpicked"
// 3) category wich was clicked ("categories__content-item")[number writed by hand] change color to "picked"
// 4) categories name changed to name of clicked categories 
// 5) categories dropdown hide when clicked by display none and after 100ms display = ""

function breads() {
  for (var i = 0; i<fodmapList.length; i++) {
    if (fodmapList[i].category === "Breads, Cereals, Grains and Pasta") {
      document.getElementsByClassName("food")[i].style.display="block";
    } else {
      document.getElementsByClassName("food")[i].style.display="none";
    }
  }
  for (var a = 0; a<document.getElementsByClassName("categories__content-item").length; a++){
    document.getElementsByClassName("categories__content-item")[a].style.color="blue";
  }
  document.getElementsByClassName("categories__content-item")[1].style.color="red";
  document.getElementsByClassName("categories__allowed")[0].style.color="grey";
  document.getElementsByClassName("categories__name")[0].innerHTML="Breads, Cereals, Grains and Pasta";
  document.getElementsByClassName("categories__content")[0].style.display="none";
    setTimeout(function(){
  document.getElementsByClassName("categories__content")[0].style.display="";
  }, 100); //LOL IT WORKS
}

function vegetables() {
  for (var i = 0; i<fodmapList.length; i++) {
    if (fodmapList[i].category === "Vegetables and legumes") {
      document.getElementsByClassName("food")[i].style.display="block";
    } else {
      document.getElementsByClassName("food")[i].style.display="none";
    }
  }
  for (var a = 0; a<document.getElementsByClassName("categories__content-item").length; a++){
    document.getElementsByClassName("categories__content-item")[a].style.color="blue";
  }
  document.getElementsByClassName("categories__content-item")[2].style.color="red";
  document.getElementsByClassName("categories__allowed")[0].style.color="grey";
  document.getElementsByClassName("categories__name")[0].innerHTML="Vegetables and legumes";
  document.getElementsByClassName("categories__content")[0].style.display="none";
  setTimeout(function(){
    document.getElementsByClassName("categories__content")[0].style.display="";
  }, 100); 
}

function fruits() {
  for (var i = 0; i<fodmapList.length; i++) {
    if (fodmapList[i].category === "Fruit") {
      document.getElementsByClassName("food")[i].style.display="block";
    } else {
      document.getElementsByClassName("food")[i].style.display="none";
    }
    for (var a = 0; a<document.getElementsByClassName("categories__content-item").length; a++){
      document.getElementsByClassName("categories__content-item")[a].style.color="blue";
    }
  }
  document.getElementsByClassName("categories__content-item")[3].style.color="red";
  document.getElementsByClassName("categories__allowed")[0].style.color="grey";
  document.getElementsByClassName("categories__name")[0].innerHTML="Fruit";
  document.getElementsByClassName("categories__content")[0].style.display="none";
  setTimeout(function(){
    document.getElementsByClassName("categories__content")[0].style.display="";
  }, 100); 
}

function drinks() {
  for (var i = 0; i<fodmapList.length; i++) {
    if (fodmapList[i].category === "Drinks") {
      document.getElementsByClassName("food")[i].style.display="block";
    } else {
      document.getElementsByClassName("food")[i].style.display="none";
    }
  }
  for (var a = 0; a<document.getElementsByClassName("categories__content-item").length; a++){
    document.getElementsByClassName("categories__content-item")[a].style.color="blue";
  }
  document.getElementsByClassName("categories__content-item")[4].style.color="red";
  document.getElementsByClassName("categories__allowed")[0].style.color="grey";
  document.getElementsByClassName("categories__name")[0].innerHTML="Drinks";
  document.getElementsByClassName("categories__content")[0].style.display="none";
  setTimeout(function(){
    document.getElementsByClassName("categories__content")[0].style.display="";
  }, 100); 
}

function meat() {
  for (var i = 0; i<fodmapList.length; i++) {
    if (fodmapList[i].category === "Meat and Substitutes") {
      document.getElementsByClassName("food")[i].style.display="block";
    } else {
      document.getElementsByClassName("food")[i].style.display="none";
    }
  }
  for (var a = 0; a<document.getElementsByClassName("categories__content-item").length; a++){
    document.getElementsByClassName("categories__content-item")[a].style.color="blue";
  }
  document.getElementsByClassName("categories__content-item")[5].style.color="red";
  document.getElementsByClassName("categories__allowed")[0].style.color="grey";
  document.getElementsByClassName("categories__name")[0].innerHTML="Meat and Substitutes";
  document.getElementsByClassName("categories__content")[0].style.display="none";
  setTimeout(function(){
    document.getElementsByClassName("categories__content")[0].style.display="";
  }, 100); 
}

function condiments() {
  for (var i = 0; i<fodmapList.length; i++) {
    if (fodmapList[i].category === "Condiments") {
      document.getElementsByClassName("food")[i].style.display="block";
    } else {
      document.getElementsByClassName("food")[i].style.display="none";
    }
  }
  for (var a = 0; a<document.getElementsByClassName("categories__content-item").length; a++){
    document.getElementsByClassName("categories__content-item")[a].style.color="blue";
  }
  document.getElementsByClassName("categories__content-item")[6].style.color="red";
  document.getElementsByClassName("categories__allowed")[0].style.color="grey";
  document.getElementsByClassName("categories__name")[0].innerHTML="Condiments";
  document.getElementsByClassName("categories__content")[0].style.display="none";
  setTimeout(function(){
    document.getElementsByClassName("categories__content")[0].style.display="";
  }, 100); 
}

function milk() {
  for (var i = 0; i<fodmapList.length; i++) {
    if (fodmapList[i].category === "Milk") {
      document.getElementsByClassName("food")[i].style.display="block";
    } else {
      document.getElementsByClassName("food")[i].style.display="none";
    }
  }
  for (var a = 0; a<document.getElementsByClassName("categories__content-item").length; a++){
    document.getElementsByClassName("categories__content-item")[a].style.color="blue";
  }
  document.getElementsByClassName("categories__content-item")[7].style.color="red";
  document.getElementsByClassName("categories__allowed")[0].style.color="grey";
  document.getElementsByClassName("categories__name")[0].innerHTML="Milk";
  document.getElementsByClassName("categories__content")[0].style.display="none";
  setTimeout(function(){
    document.getElementsByClassName("categories__content")[0].style.display="";
  }, 100); 
}

function sweeteners() {
  for (var i = 0; i<fodmapList.length; i++) {
    if (fodmapList[i].category === "Sweeteners") {
      document.getElementsByClassName("food")[i].style.display="block";
    } else {
      document.getElementsByClassName("food")[i].style.display="none";
    }
    for (var a = 0; a<document.getElementsByClassName("categories__content-item").length; a++){
      document.getElementsByClassName("categories__content-item")[a].style.color="blue";
    }
  }
  document.getElementsByClassName("categories__content-item")[8].style.color="red";
  document.getElementsByClassName("categories__allowed")[0].style.color="grey";
  document.getElementsByClassName("categories__name")[0].innerHTML="Sweeteners";
  document.getElementsByClassName("categories__content")[0].style.display="none";
  setTimeout(function(){
    document.getElementsByClassName("categories__content")[0].style.display="";
  }, 100); 
}

function dairy() {
  for (var i = 0; i<fodmapList.length; i++) {
    if (fodmapList[i].category === "Dairy") {
      document.getElementsByClassName("food")[i].style.display="block";
    } else {
      document.getElementsByClassName("food")[i].style.display="none";
    }
    for (var a = 0; a<document.getElementsByClassName("categories__content-item").length; a++){
      document.getElementsByClassName("categories__content-item")[a].style.color="blue";
    }
  }
  document.getElementsByClassName("categories__content-item")[9].style.color="red";
  document.getElementsByClassName("categories__allowed")[0].style.color="grey";
  document.getElementsByClassName("categories__name")[0].innerHTML="Dairy";
  document.getElementsByClassName("categories__content")[0].style.display="none";
    setTimeout(function(){
  document.getElementsByClassName("categories__content")[0].style.display="";
  }, 100); 
}

function cheese() {
  for (var i = 0; i<fodmapList.length; i++) {
    if (fodmapList[i].category === "Cheese") {
      document.getElementsByClassName("food")[i].style.display="block";
    } else {
      document.getElementsByClassName("food")[i].style.display="none";
    }
  }
  for (var a = 0; a<document.getElementsByClassName("categories__content-item").length; a++){
    document.getElementsByClassName("categories__content-item")[a].style.color="blue";
  }
  document.getElementsByClassName("categories__content-item")[10].style.color="red";
  document.getElementsByClassName("categories__allowed")[0].style.color="grey";
  document.getElementsByClassName("categories__name")[0].innerHTML="Cheese";
  document.getElementsByClassName("categories__content")[0].style.display="none";
    setTimeout(function(){
  document.getElementsByClassName("categories__content")[0].style.display="";
  }, 100); 
}

function nuts() {
  for (var i = 0; i<fodmapList.length; i++) {
    if (fodmapList[i].category === "Nuts and Seeds") {
      document.getElementsByClassName("food")[i].style.display="block";
    } else {
      document.getElementsByClassName("food")[i].style.display="none";
    }
  }
  for (var a = 0; a<document.getElementsByClassName("categories__content-item").length; a++){
    document.getElementsByClassName("categories__content-item")[a].style.color="blue";
  }
  document.getElementsByClassName("categories__content-item")[11].style.color="red";
  document.getElementsByClassName("categories__allowed")[0].style.color="grey";
  document.getElementsByClassName("categories__name")[0].innerHTML="Nuts and Seeds";
  document.getElementsByClassName("categories__content")[0].style.display="none";
    setTimeout(function(){
  document.getElementsByClassName("categories__content")[0].style.display="";
  }, 100); 
}

function everything() {  //all() doesnt work, idk why
  for (var i = 0; i<fodmapList.length; i++) {
    document.getElementsByClassName("food")[i].style.display="block";
  }
  for (var a = 0; a<document.getElementsByClassName("categories__content-item").length; a++){
    document.getElementsByClassName("categories__content-item")[a].style.color="blue";
  }
  document.getElementsByClassName("categories__content-item")[0].style.color="red";
  document.getElementsByClassName("categories__allowed")[0].style.color="grey";
  document.getElementsByClassName("categories__name")[0].innerHTML="All";
  document.getElementsByClassName("categories__content")[0].style.display="none";
    setTimeout(function(){
  document.getElementsByClassName("categories__content")[0].style.display="";
  }, 150); 
}

function allowed() {
  for (var i = 0; i<fodmapList.length; i++) {
    if ((fodmapList[i].fodmap === "low") && (document.getElementsByClassName("food")[i].style.display === "block")) {
      document.getElementsByClassName("food")[i].style.display="block";
    } else {
      document.getElementsByClassName("food")[i].style.display="none";
    }
   }
   document.getElementsByClassName("categories__allowed")[0].style.color="red";
  }



