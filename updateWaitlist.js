// this class will take the restaurant object created by the user and update a waitlist html file
// using the tables and waitlist array contained within it

class updater {
    constructor(restaurant) {
        this.newTables = restaurant.getTables;
        this.newWaitlist = restaurant.getWaitlist;
    }
    updateList() {
        // get divs and clear them
        const tablesDiv= document.getElementById('tables');
        const waitlistDiv = document.getElementById('waitlist');
        tablesDiv.innerHTML = '';
        waitlistDiv.innerHTML = '';
        
        // use the data from the restaurant object to create div tags and then add to the newly emptied divs
        for(reservation in this.newTables) {
            const table = this.createListItem(reservation);
            tablesDiv.appendChild(table);
        }
        for(reservation in this.newWaitlist) {
            const table = this.createListItem(reservation);
            waitlistDiv.appendChild(table);
        }
    }
    createListItem(reservation) {
        // uses the data in the reservation passed to it and creates a formatted div and returns it
        const div = document.createElement('div');
        const data = [reservation.getName(), reservation.getEmail(), reservation.getPhone(), reservation.getId()];
        for(item in data) {
            const element = document.createElement('h2');
            element.textContent = item;
            div.appendChild(element);
        }
        return div; 
    }
}

module.exports = updater;