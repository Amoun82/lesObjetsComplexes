function func(a, b, c = 9) {
    arguments[0] = 99;
    arguments[1] = 98;
    console.log(a + " " + b);
    console.log(c) ;
}
  
func(3, 4); // 3 4


/* function avec argument par défaut */
function test(valeur = "test de base", a = undefined, b = 95) {
    console.log(`contenu de la valeur de base : ${valeur}`) ;
    console.log(`contenu de a : ${a}`) ;
    console.log(a) ;
    console.log(`contenu de b : ${b}`) ;
}

test("est ce que tu es la ?",["ici","la","par"], "prend le") ;

test() ;

/* objet complexe */
class objetComplexe {
    constructor(nom = "nom", prenom = "prenom"){
        this.nom = nom ;
        this.prenom = prenom ;
        this.appel = function appelObjet(){
            console.log(this.nom) ;
            console.log(this.prenom) ;
        };

        this.test = function testObjet(){
            if(( this.nom === "nom" || this.prenom === "prenom" ) || ( this.nom === "" || this.prenom ==="" )){
                console.log("Attenion l'objet n'as pas de nom ni de prenom") ;
                document.write("Attention l'objet a une forme bizarre<br>") ;
            }
        };

        this.test() ;

        this.testObjet = function testObjetCoMplexe(test = "attention"){
            if(test === "attention"){
                console.log(`${test} est l'argument passé en paramètre !!`) ;
            }
        };

        this.testObjet() ;

    };

};

let identite = new objetComplexe("dufour","stef") ;

identite.appel() ;

let identite1 = new objetComplexe() ;


let identite2 = new objetComplexe("Jean","Roger") ;

identite2.appel() ;