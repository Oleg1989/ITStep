export const fetchRooms = async () => {
    let response = await window.fetch('https://bt-21-playground-vppfc.ondigitalocean.app/rooms');
    if (response.ok) {
        let roomsList = await response.json();
        return roomsList;
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}