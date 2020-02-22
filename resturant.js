// const tables=[];
// const waitList=[];

class resturant{
    constructor(){
        this.tables=[];
        this.waitList=[];
    }
    addReservation(data)  {
        if(this.tables.length < 5){
            this.tables.push(data);
        } else {
            this.waitList.push(data);
        }
    }


}

module.exports= resturant;


