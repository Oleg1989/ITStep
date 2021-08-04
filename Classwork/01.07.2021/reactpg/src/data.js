
export async function getData() {
    let response = await window.fetch('https://bt-21-playground-vppfc.ondigitalocean.app/forecast');
    if (response.ok) {
        let data = await response.json();
        return data;
    } else {
        alert("Ошибка HTTP: " + response.status);
    }

}
