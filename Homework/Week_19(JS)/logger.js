export class ConsoleLogger {
    log(errorText) {
        console.log(errorText);
    }
}
export class AlertLogger {
    log(errorText) {
        alert(errorText);
    }
}
export class DomLogger {
    log(errorText) {
        let div = document.getElementById('content');
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
        let p = document.createElement('p');
        p.textContent = errorText;
        p.style.textAlign = 'center';
        p.style.color = 'red';
        p.style.fontSize = '24px';
        div.append(p);
    }
}