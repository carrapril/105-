const LS_KEY="users";
function saveUser(user){
    //load the old data
    let oldData=readUsers();
    //merge old data 
    oldData.push(user);

    
    let val=JSON.stringify(oldData); //parse into a JSON string
    
    localStorage.setItem(LS_KEY,val); //send it to the localStorage

}
function readUsers(){
    //get value from the local storage
    let data = localStorage.getItem(LS_KEY);
    if(!data){//NOt users?
        return[];// creating an array for the first registration
    } else{
       let list=JSON.parse(data);
       return list;
    }
    
}