function capitalizeFirstLetter(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}


let firstName: string = "john";
let lastName: string = "doe";


firstName = capitalizeFirstLetter(firstName);
lastName = capitalizeFirstLetter(lastName);


let fullName: string = `${firstName} ${lastName}`;


console.log(fullName);
