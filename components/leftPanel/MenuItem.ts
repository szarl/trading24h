
export default class MenuItem {
    icon: string;
    title: string;
    to: string;

    constructor(icon, title, to) {
        this.icon = icon;
        this.title = title;
        this.to = to;
    }
}