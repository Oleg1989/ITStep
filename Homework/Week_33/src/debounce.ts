const debounce = (fn: Function, ms: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};

let onChange = (event: Event) => {
    console.log((event.target as HTMLInputElement)?.value);
}

onChange = debounce(onChange, 500);

document.getElementById('search')?.addEventListener('keyup', onChange);