import MenuItem from "./MenuItem"

export default class EnumMenuItems {
     static readonly MAIN_PAGE = new MenuItem('mdi-apps', 'Dashboard', '/dashboard');


     static getAllKeys(): string[] {
        return Object.keys(this).filter((key) => { return typeof this[key] !== 'function'; });
    }

    static getAllValues(): MenuItem[] {
        return this.getAllKeys().map(k => this[k]);
    }
}