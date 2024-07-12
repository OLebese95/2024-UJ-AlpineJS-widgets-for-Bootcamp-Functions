function transportFunction() {
    return {
        shift: '',
        fee: '',
        showFee() {
            this.fee = '';
            if (this.shift === 'morning') {
                this.fee = 'R20';
            } else if (this.shift === 'afternoon') {
                this.fee = 'R10';
            } else if (this.shift === 'nightshift') {
                this.fee = 'Free';
            } else {
                this.fee = 'Invalid shift!';
            }
            setTimeout(() => {
                if (this.fee === 'Invalid shift') {
                    this.shift = '';
                    this.fee = '';
                }
            }, 4000);
        },
    };
}

