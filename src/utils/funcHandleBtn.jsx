import {play} from "./soundsBar.jsx";
import sound from '../assets/sounds/add-to-favorite.mp3';

const handleBtn = (saved, item, localStorage, setSaved) => {
        play(sound);
        if (saved.some(el => el.id === item.id)) {
            const filtered = saved.filter(elem => elem.id !== item.id);
            if (filtered.length === 0) {
                window.localStorage.removeItem(localStorage);
                setSaved([])
            } else {
            setSaved(filtered)
             }
            return
        }
        setSaved([item, ...saved])
}
    
export default handleBtn