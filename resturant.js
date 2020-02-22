// const tables=[];
// const waitList=[];

class resturant{
    constructor(){
        this.tables=[];
        this.waitList=[];
    }
    addReservation(data)  {
        let dupe = false;
        for(let i=0;i<this.tables.length;i++){
            if(this.tables[i].id == data.id){
                dupe = true;
            }
           
        }
        if(this.tables.length < 5 && dupe == false){
            this.tables.push(data);
        } else {
            this.waitList.push(data);
        }
    }


}

module.exports= resturant;


