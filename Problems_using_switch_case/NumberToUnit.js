let num = 100000
switch (parseInt(num)) {
    case 1: console.log("Unit");
        break;
    case 10: console.log("Ten");
        break;
    case 100: console.log("Hundred");
        break;
    case 1000: console.log("Thousand");
        break;
    case 10000: console.log("Ten Thousand");
        break;
    case 100000: console.log("Hundred Thousand");
        break;
    case 1000000: console.log("One Million");
        break; 
	default: console.log("Enter a valid number.");
}