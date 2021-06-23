type ViewHandler = () => string;
// type RoutePath = string;
const view1: ViewHandler = () => "<b>Page 1</b>";
const view2: ViewHandler = () => "<b>Page 2</b>";
const view3: ViewHandler = () => "<b>Page 3</b>";
interface Route {
    title: string;
    path: string;
    view: ViewHandler;
}
const routes: { [key: string]: Route } = {};
let viewContainer: HTMLDivElement;
interface RouterState {
    path: string;
}
function route(path: string, title: string, view: ViewHandler) {
    routes[path] = {
        path,
        title,
        view,
    };
}
route("/page1", "Page 1", view1);
route("/page2", "Page 2", view2);
route("/page3", "Page 3", view3);
function navigate(path: string, push = true) {
    const route = routes[path];
    viewContainer = viewContainer || document.getElementById("view");
    if (viewContainer && route) {
        viewContainer.innerHTML = route.view();
    }
    const routerState: RouterState = {
        path: route.path,
    };
    if (push) history.pushState(routerState, route.title, route.path);
}
window.onpopstate = function (event: PopStateEvent) {
    const { path } = event.state as RouterState;
    navigate(path, false);
};
document.addEventListener("click", (event) => {
    //event.preventDefault();
    navigate((event.target as HTMLAnchorElement).pathname);
});
