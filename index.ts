import axios from "axios";

const url = 'https://dummyjson.com/users/1';

interface Detail{
    id: number;
    firstName: string;
    phone: number
}
axios.get(url)
.then(response => {
    console.log(`The endpoint is reachable.`);
    // console.log(response.data);

    /*here we're telling typescript this will have the same 
    structure as what is discribe as our Detail
    */
    const detail = response.data as Detail;

    const ID = detail.id;
    const firstName = detail.firstName;
    const phone = detail.phone;
    
    LogDetail( ID, firstName, phone );
})

//checking for error in the endpoint
.catch(error => {
    console.log(`The endpoint is not reachable: ${error}`);
});
 
const LogDetail = (id: number, firstName: string, phone: number)=>{
    console.log(`
    the detal with ID: ${id}
    has a title of: ${firstName}
    is with a mobile number: ${phone}
    `)
}