import Card from '../Card/Card';

const Cards= ({characters, onClose}) =>  {
   return <div> {
      characters.map ((characters)=> {
         return <Card
         id= {characters.id}
         key={characters.id}
         name={characters.name}
         species={characters.species}
         gender={characters.gender}
         image={characters.image}
         status={characters.status}
         onClose={onClose}
         origin={characters.origin.name} />
      })
      }
   </div>;
}
export default Cards