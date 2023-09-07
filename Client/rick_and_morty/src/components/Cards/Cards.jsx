import Card from '../Card/Card.jsx';
import style from '../Cards/Cards.module.css';

const Cards = ({ characters, onClose }) => {
  return (
    <div className={style['cards-container']}>
      {characters.map((character) => {
        return (
          <Card
            id={character.id}
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            status={character.status}
            onClose={onClose}
            origin={character.origin.name}
          />
        );
      })}
    </div>
  );
};

export default Cards;
