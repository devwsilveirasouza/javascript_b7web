/** Switch */
/** Professions: Bombeiro, Fiscal, Policial */

let profession = "fiscal";

console.log("Profissão: " + profession)

switch (profession) {
    
    case "fiscal":
        console.log("Fiscal: usa camisa verde.");
        break;  
    case "bombeiro":
        console.log("Bombeiro: usa uniforme vermelho.");
        break;  
    case "policial":
        console.log("Policial: usa uniforme marrom.");
        break;
    default:
        console.log("Não foi especificado nenhum profissional.");
        break;  
}
