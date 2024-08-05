import stamp1 from "../../images/stamp1.jpg"
import stamp2 from "../../images/stamp2.jpg";
import stamp3 from "../../images/stamp3.jpg";
import stamp4 from "../../images/stamp4.jpg";
import stamp5 from "../../images/stamp5.jpg";
import stamp6 from "../../images/stamp6.jpg";
import stamp7 from "../../images/stamp7.jpg";
import stamp8 from "../../images/stamp8.jpg";
import stamp9 from "../../images/stamp9.jpg";
import stamp10 from "../../images/stamp10.jpg";
import stamp11 from "../../images/stamp11.jpg";
import pic1 from "../../images/pic1.jpg";
import pic2 from "../../images/pic2.jpg";
import pic3 from "../../images/pic3.jpg";
import pic4 from "../../images/pic4.jpg";
import pic5 from "../../images/pic5.jpg";
import pic6 from "../../images/pic6.jpg";
import pic7 from "../../images/pic7.jpg";
import pic8 from "../../images/pic8.jpg";
import pic9 from "../../images/pic9.jpg";
import music1 from "../../images/music1.jpg";
import music2 from "../../images/music2.jpg";
import music3 from "../../images/music3.jpg";
import music4 from "../../images/music4.jpg";
import music5 from "../../images/music5.jpg";
import music6 from "../../images/music6.jpg";
import music7 from "../../images/music7.jpg";
import music8 from "../../images/music8.jpg";
import music9 from "../../images/music9.jpg";
import music10 from "../../images/music10.jpg";
import music11 from "../../images/music11.jpg";
import music12 from "../../images/music12.jpg";
import music13 from "../../images/pic-music.jpg";
import music14 from "../../images/drum-music.jpg";
import music15 from "../../images/chines-music.jpg";
import music16 from "../../images/chambelo-music.jpg";
import music17 from "../../images/kalimbuah-music.jpg";
import car1 from "../../images/car1.jpg";
import car2 from "../../images/car2.jpg";

const initialState = [
    { id: 0, name: "stamp", qty: 10, image: stamp1, price: 100, description: "Stamp from Romania", qtyInCart: 0 },
    { id: 1, name: "stamp", qty: 2, image: stamp2, price: 520, description: "Stamp from Australia", qtyInCart: 0 },
    { id: 2, name: "stamp", qty: 5, image: stamp3, price: 555, description: "A stamp from Yemen", qtyInCart: 0 },
    { id: 3, name: "stamp", qty: 6, image: stamp4, price: 379, description: "A stamp from Yemen", qtyInCart: 0 },
    { id: 4, name: "stamp", qty: 7, image: stamp5, price: 1749, description: "Stamp from Romania", qtyInCart: 0 },
    { id: 5, name: "stamp", qty: 2, image: stamp6, price: 599, description: "A rare and ancient stamp", qtyInCart: 0 },
    { id: 6, name: "stamp", qty: 1, image: stamp7, price: 20425, description: "A stamp that belonged to deportees from Spain", qtyInCart: 0 },
    { id: 7, name: "stamp", qty: 5, image: stamp8, price: 600, description: "Stamp from Russia", qtyInCart: 0 },
    { id: 8, name: "stamp", qty: 4, image: stamp9, price: 380, description: "A rare and ancient stamp", qtyInCart: 0 },
    { id: 9, name: "stamp", qty: 1, image: stamp10, price: 1380, description: "Sold at auction in the United States for $1500", qtyInCart: 0 },
    { id: 10, name: "stamp", qty: 1, image: stamp11, price: 1600, description: "Over 150 years old!", qtyInCart: 0 },
    { id: 11, name: "Drawing", qty: 3, image: pic1, price: 240, description: "110-year-old painting", qtyInCart: 0 },
    { id: 12, name: "Drawing", qty: 1, image: pic2, price: 52000, description: "An original painting by the painter John John from 254 years ago", qtyInCart: 0 },
    { id: 13, name: "Drawing", qty: 2, image: pic3, price: 310, description: "A 100-year-old painting from Spain", qtyInCart: 0 },
    { id: 14, name: "Drawing", qty: 10, image: pic4, price: 550, description: "20-year-old painting of the painter Rocky", qtyInCart: 0 },
    { id: 15, name: "Drawing", qty: 5, image: pic5, price: 290, description: "70-year-old painting of the painter Rocky", qtyInCart: 0 },
    { id: 16, name: "Drawing", qty: 9, image: pic6, price: 260, description: "80-year-old painting", qtyInCart: 0 },
    { id: 17, name: "Drawing", qty: 3, image: pic7, price: 550, description: "110-year-old painting", qtyInCart: 0 },
    { id: 18, name: "Drawing", qty: 1, image: pic8, price: 1100, description: "An ancient picture from ancient France", qtyInCart: 0 },
    { id: 19, name: "Drawing", qty: 2, image: pic9, price: 1240, description: "The painter is unknown, from before the World War", qtyInCart: 0 },
    { id: 20, name: "music", qty: 1, image: music1, price: 1100, description: "description", qtyInCart: 0 },
    { id: 21, name: "music", qty: 1, image: music2, price: 5900, description: "description", qtyInCart: 0 },
    { id: 22, name: "music", qty: 2, image: music3, price: 4100, description: "description", qtyInCart: 0 },
    { id: 23, name: "music", qty: 5, image: music4, price: 1008, description: "description", qtyInCart: 0 },
    { id: 24, name: "music", qty: 11, image: music5, price: 1150, description: "description", qtyInCart: 0 },
    { id: 25, name: "music", qty: 2, image: music6, price: 2200, description: "description", qtyInCart: 0 },
    { id: 26, name: "music", qty: 1, image: music7, price: 2100, description: "description", qtyInCart: 0 },
    { id: 27, name: "music", qty: 5, image: music8, price: 1900, description: "description", qtyInCart: 0 },
    { id: 28, name: "music", qty: 2, image: music9, price: 690, description: "description", qtyInCart: 0 },
    { id: 29, name: "music", qty: 1, image: music10, price: 1100, description: "description", qtyInCart: 0 },
    { id: 30, name: "music", qty: 1, image: music11, price: 5100, description: "description", qtyInCart: 0 },
    { id: 31, name: "music", qty: 6, image: music12, price: 30100, description: "description", qtyInCart: 0 },
    { id: 32, name: "music", qty: 1, image: music13, price: 13100, description: "description", qtyInCart: 0 },
    { id: 33, name: "music", qty: 4, image: music14, price: 1600, description: "An ancient African drum was hidden for 49 years from the African authorities who wanted to lay their hands on it!", qtyInCart: 0 },
    { id: 34, name: "music", qty: 6, image: music15, price: 1100, description: "chines-music", qtyInCart: 0 },
    { id: 35, name: "music", qty: 1, image: music16, price: 1670, description: "Ancient chambelo from the Middle East, unknown place of formation", qtyInCart: 0 },
    { id: 36, name: "music", qty: 8, image: music17, price: 710, description: "Ancient kalimbuah", qtyInCart: 0 },
    { id: 37, name: "car", qty: 8, image: car1, price: 1710, description: "An antique car model from Italy", qtyInCart: 0 },
    { id: 38, name: "car", qty: 8, image: car2, price: 1510, description: "An antique car model from 110 years ago", qtyInCart: 0 }
]

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("DECREASEQTY"):
            const new_state = [...state]
            if (action.item.qty > 0) {
                action.item.qty -= 1;
                action.item.qtyInCart += 1;
            }
            return new_state
        case ("ADDQTY"):
            const new_state1 = [...state]
            if (action.product.qtyInCart > 0) {
                action.product.qty += 1;
                action.product.qtyInCart -= 1;
            }
            return new_state1
    }
    return state
}