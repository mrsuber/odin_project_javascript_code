


class User {

  constructor(first_name,last_name,age) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age= age;
  }

  wellcomeNewUser() {
    if(this.age<=0){
      return"not real age";
    }
    else if(this.age>0 && this.age<=20){
      return ("welcome "+this.first_name+" "+this.last_name+", you are young");
    }
    else return  ("welcome "+this.first_name+" "+this.last_name+", you are old");
  }

}

// Usage:
let user = new User("John","Smith", 0);
user.wellcomeNewUser();
