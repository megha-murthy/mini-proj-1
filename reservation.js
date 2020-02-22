class reservation{
    constructor(data){
        this.id=data.id,
        this.name=data.name,
        this.phone=data.phone,
        this.email=data.email //this.email=data.email
    }
    
    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getPhone(){
        return this.phone;
    }

    getEmail(){
        return this.email;
    }

}

//const newReserv= new reservation(obj);

//const obj={id: 123, name: 'bob', phone: 678, email: 'test@gmail'}

module.exports=reservation;