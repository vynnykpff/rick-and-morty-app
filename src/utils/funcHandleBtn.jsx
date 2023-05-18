const handleBtn = (saved, item, localStorage, setSaved) => {
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