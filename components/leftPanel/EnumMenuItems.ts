import MenuItem from "./MenuItem"

export default class EnumMenuItems {
     static readonly MAIN_PAGE = new MenuItem('mdi-apps', 'Dashboard', '/dashboard');

     static readonly ADD_ITEM = new MenuItem('mdi-plus-circle-outline', 'Add Item', '/addItem');

     static readonly ITEMS = new MenuItem('mdi-hammer-screwdriver', 'My items', '/myItems');

     static readonly PROFILE = new MenuItem('mdi-account-circle-outline', 'Profile', '/profile');

     static readonly LOGUT = new MenuItem('mdi-exit-to-app', 'log out', '/');



     static getAllKeys(): string[] {
        return Object.keys(this).filter((key) => { return typeof this[key] !== 'function'; });
    }

    static getAllValues(): MenuItem[] {
        return this.getAllKeys().map(k => this[k]);
    }
}