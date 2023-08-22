import Card from './Card';

const Cards= ({characters}) =>  {
   return <div> {
      characters.map ((char)=> {
         return <Card
         name={char.name}
         species={char.species}
         gender={char.gender}
         image={char.image}
         status={char.status}
         onClose={char.onClose}
         origin={char.origin.name} />
      })
      }
   </div>;
}
export default Cards