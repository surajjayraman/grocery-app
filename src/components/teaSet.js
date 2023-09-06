const Cup = ({guest}) => {
    return <p>Tea cup for guest #{guest}</p>;
}

const DrinkRecipe = ({ drinkers }) => {
    return (
      <ol>
        <li>Boil {drinkers} cups of water.</li>
        <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
        <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
      </ol>
    );
  }

  const TeaGathering = () => {
    let cups = [];
    for (let i = 1; i <= 12; i++) {
      cups.push(<Cup key={i} guest={i} />);
    }
    return cups;
  }

export default function TeaSet() {
  return (
    <>
      <h1>Welcome to our kitty party</h1>
      <Cup guest={1} />
      <Cup guest={2}/>
      <Cup guest={3}/>
      <section>
        <h1>Spiced Chai Recipe</h1>
        <p>For two</p>
        <DrinkRecipe drinkers={2}/>
        <p>For a gathering</p>
        <DrinkRecipe drinkers={4}/>
        <TeaGathering />
      </section>
    </>
  );
}
