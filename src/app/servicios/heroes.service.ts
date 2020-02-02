
import {Injectable}from'@angular/core';

@Injectable()
export class HeroesService{
    private heroes:Heroe[]=[
        {
          nombre: "Ana",
          bio: "Ana comenzó su carrera profesional en Dota 2 uniéndose a Invictus Gaming en marzo de 2016 como sustituto de Ferrari_430. Su logro más notable con el equipo fue derrotar a Newbee en las grandes finales de NEA 2016. Después de The International 2016, ana dejó Invictus Gaming para unirse a un OG recientemente reconstruido. Más tarde se reveló que su partida de Invictus Gaming se debió a una grieta en la gestión de su organización con su contrato y otros factores que implican sus resultados.",
          img: "assets/img/ana.png",
          nom: "Anathan Pham",
          rol: "Carry"
        },
        {
          nombre: "Ceb",
          bio: "Sébastien 7ckngMad Debs es un jugador profesional francés de Dota 2 que actualmente juega para OG. La carrera profesional de 7ckngMad en Dota 2 comenzó con el Equipo Shakira en 2011. El equipo ganó notoriedad por primera vez después de colocarse cuarto en Dreamhack Winter 2011 y poco después de que Sébastien, junto con el resto del equipo, fuera elegido por Western Wolves. Después de solo tres meses con Western Wolves, allanado con problemas en la lista, 7ckingmad abandonó la organización y decidió unirse a una repetición de mTw dirigida por Troels Synderen Nielsen.",
          img: "assets/img/ceb.png",
          nom: "Sebastien Debs",
          rol: "OffLane"
        },
        {
          nombre: "Topson",
          bio: "El nuevo mid-laner de OG, el finlandés Topias 'Topson' Taavitsainen, de 20 años, ha pasado menos de un año en la escena profesional de Dota 2, pero ha estado jugando MOBA desde que tenía solo ocho años. El momento decisivo de Topson llegó hace menos de un año. Se había unido a la prometedora organización rusa SFTe-sports. Era la primera vez que Topson jugaba para un equipo de alto nivel, pero había estado avanzando hacia la escena profesional durante algún tiempo antes de eso.",
          img: "assets/img/topson.png",
          nom: "Topias Taavitsainen",
          rol: "Mid-Laner"
        },
        {
          nombre: "JerAx",
          bio: "Jesse JerAx Vainikka es un jugador profesional finlandés de Dota 2 que actualmente juega para OG. JerAx se hizo famoso en Heroes of Newerth, donde jugó para varios equipos, incluidos 'Dirty Minds' (con Era y SingSing) y 'Man the fuck Up' / 'KD-Gaming' (con Era). Luego realizó un servicio militar obligatorio en la armada finlandesa, y cuando lo terminó, comenzó a jugar Dota 2. El 15 de enero de 2018, JerAx presentó su propio sitio web de mercancías JerAx.GG. JerAx comenzó su carrera en Dota 2 en el equipo finlandés Rata en la oscuridad como jugador de apoyo. Después de jugar con ellos durante un mes, SingSing se le acercó, y JerAx se unió a su equipo, QPAD Red Pandas como investigador. Un tiempo después fue anunciado como miembro de pleno derecho del equipo.",
          img: "assets/img/jerax.png",
          nom: "Jesse Vainikka",
          rol: "Apoyo"
        },
        {
          nombre: "Notail",
          bio: "Johan N0tail Sundstein es un jugador profesional danés de Dota 2 que actualmente es el capitán de OG. Johan fue uno de los jugadores competitivos más jóvenes de Heroes of Newerth en el mundo, donde jugó el papel en solitario a mediados. Después del cambio a Dota 2, Johan asumió el papel de soporte y se hizo conocido por sus actuaciones como Chen y Wisp. Fue durante esta transición que rápidamente desarrolló sus habilidades de microgestión, lo que lo llevó a su famoso juego Meepo. A pesar de su edad, Johan era el líder en el juego del equipo Fnatic.EU Dota 2.",
          img: "assets/img/n0tail.png",
          nom: "Johan Sundstein",
          rol: "Support"
        },
      ];


    constructor(){
        console.log("Servicio listo para usarse!!!!");
    }

    getHeroes():Heroe[]{
        return this.heroes;
    }
    getHeroe(idx:string){
      return this.heroes[idx];
    }


    buscarHeroes(termino:string){
      let heroesArr:Heroe[]=[];
      termino=termino.toLowerCase();

      for(let heroe of this.heroes){
        let nombre = heroe.nombre.toLowerCase();
        if(nombre.indexOf(termino)>=0 ){
          heroesArr.push(heroe)
        }
      }
      return heroesArr;
    }
}

export interface Heroe{
    nombre:string;
    bio:string;
    img:string;
    nom:string;
    rol:string;
};
