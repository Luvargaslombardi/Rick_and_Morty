import Card from './Card';

const Cards= ({characters}) =>  {
   return <div> {
      characters.map ((char)=> {
         return <Card
         key={char.id}
         name={char.name}
         species={char.species}
         gender={char.gender}
         image={char.image}
         status={char.status}
         onClose={() => window.alert("Emulamos que se cierra la card")}
         origin={char.origin.name} />
      })
      }
   </div>;
}
export default Cards