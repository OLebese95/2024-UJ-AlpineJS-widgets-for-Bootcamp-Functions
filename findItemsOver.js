function expensiveItemsFunction() {
    return {
        name: '',
        qty: '',
        threshold: 5,
        items: [],
        over20Results: [],
        thresholdResults: [],
        addItem() {
            if (this.name && this.qty) {
                this.items.push({ name: this.name, qty: Number(this.qty) });
                this.name = '';
                this.qty = '';
            }
        },
        findItemsOver20() {
            this.over20Results = findItemsOver20(this.items);
            this.clearResults('over20Results');
        },
        findItemsOverThreshold() {
            this.thresholdResults = findItemsOver(this.items, this.threshold);
            this.clearResults('thresholdResults');
        },
        clearResults(resultsType) {
            setTimeout(() => {
                this[resultsType] = [];
            }, 6000);
        }
    };
}

function findItemsOver(itemList, threshold) {
    return itemList.filter(item => item.qty > threshold);
}

function findItemsOver20(itemList) {
    return itemList.filter(item => item.qty > 20);
}