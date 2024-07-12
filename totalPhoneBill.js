function phoneBillFunction() {
    return {
        initialBalance: 0,
        phoneBill: '',
        totalBill: '',
        remainingBalance: '',
        calculateBill() {
            const bills = this.phoneBill.toLowerCase().split(', ');
            let countForCall = 0;
            let countForSms = 0;

            for (let i = 0; i < bills.length; i++) {
                const activity = bills[i];
                if (activity === 'call') {
                    countForCall++;
                } else if (activity === 'sms') {
                    countForSms++;
                }
            }

            const callsCost = countForCall * 2.75;
            const smsCost = countForSms * 0.65;
            const totalCost = callsCost + smsCost;

            this.totalBill = 'R' + totalCost.toFixed(2);

            const balance = this.initialBalance - totalCost;
            this.remainingBalance = balance >= 0 ? 'R' + balance.toFixed(2) : 'Ahh insufficient funds!';
        }
    };
}