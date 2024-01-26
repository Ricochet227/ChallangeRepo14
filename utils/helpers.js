module.exports = {
    format_date: (date) => {
        return date.toLocateDateString();
    },
    format_amount: (amount) => {
        return parseInt(amount).toLocaleString();
    },
};