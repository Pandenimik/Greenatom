import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = []
        this._devices = []
        this._selectedType = {}
        this._page = 1
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    
    setPage(page) {
        this._page = page
    }
    

    get types() {
        return this._types
    }
    
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
