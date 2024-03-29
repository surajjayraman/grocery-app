import useImages from "../hooks/useImages";

export default function DogImages() {
    const dogs = useImages();
  // with styles HOC pattern
  const withStyles = (Component) => {
    return () => {
      return (
        <Component
          style={{
            "box-shadow":
              "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
          }}
        />
      );
    };
  };

  const Button = (props) => {
    return (
      <button {...props} onClick={() => alert("Button Clicked")}>
        Click me
      </button>
    );
  };

  const StyledButton = withStyles(Button);

  return (
    <div>
      <p className="highlighted">Higher Order Component Pattern</p>
      <h1>
        Browse Dog Images{" "}
        <span role="img" aria-label="emoji">
          🐕
        </span>
      </h1>
      <ul>
        {dogs.map((dog, index) => {
          return (
            <li key={index}>
              <img src={dog} alt="dog" />
            </li>
          );
        })}
      </ul>
      <Button />
      <StyledButton />
    </div>
  );
}
