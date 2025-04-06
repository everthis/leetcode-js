class Router {
    constructor(memoryLimit) {
        this.memoryLimit = memoryLimit;
        this.storage = [];
        this.packetSet = new Set();
        this.destMap = new Map();
    }

    addPacket(source, destination, timestamp) {
        const packet = [source, destination, timestamp];
        if (this.packetSet.has(packet.toString())) {
            return false;
        }

        if (this.storage.length >= this.memoryLimit) {
            this._removeOldest();
        }

        this.storage.push(packet);
        this.packetSet.add(packet.toString());

        if (!this.destMap.has(destination)) {
            this.destMap.set(destination, []);
        }

        this.destMap.get(destination).push(timestamp);
        return true;
    }

    forwardPacket() {
        if (this.storage.length === 0) {
            return [];
        }

        const packet = this.storage.shift();
        const [source, destination, timestamp] = packet;
        this.packetSet.delete(packet.toString());

        const tsList = this.destMap.get(destination);
        const idx = this._binarySearch(tsList, timestamp);
        if (idx < tsList.length && tsList[idx] === timestamp) {
            tsList.splice(idx, 1);
        }

        if (tsList.length === 0) {
            this.destMap.delete(destination);
        }

        return [source, destination, timestamp];
    }

    getCount(destination, startTime, endTime) {
        if (!this.destMap.has(destination)) {
            return 0;
        }

        const tsList = this.destMap.get(destination);
        const leftIndex = this._binarySearch(tsList, startTime);
        const rightIndex = this._binarySearch(tsList, endTime, true);
        return rightIndex - leftIndex;
    }

    _removeOldest() {
        if (this.storage.length > 0) {
            const packet = this.storage.shift();
            const [source, destination, timestamp] = packet;
            this.packetSet.delete(packet.toString());

            const tsList = this.destMap.get(destination);
            const idx = this._binarySearch(tsList, timestamp);
            if (idx < tsList.length && tsList[idx] === timestamp) {
                tsList.splice(idx, 1);
            }

            if (tsList.length === 0) {
                this.destMap.delete(destination);
            }
        }
    }

    _binarySearch(arr, target, isRight = false) {
        let left = 0;
        let right = arr.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] < target || (isRight && arr[mid] === target)) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }
}
