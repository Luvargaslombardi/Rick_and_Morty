// import Forms from "./Forms";

const validation= (userData) => {
let errors= {};

if(!userData.email.includes("@")){
    errors.e1 = "Email is not valid";
}
if (!userData.email) {
    errors.e2 = "Ingrese email";
}
if (userData.email.length >35){
    errors.e3 = "Menos de 35 caracteres";
}
if (!/\d/.test(userData.password)){
    errors.p1 ="Al menos debe tener un numero";
}
if(userData.password.length <6 || userData.password.length >10){
    errors.p2 ="Longitud incorrecta"
}
return errors
};
export default validation 