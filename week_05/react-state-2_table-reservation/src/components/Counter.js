

export default function Counter({onAddPerson, onSubPerson}) {
  
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={onAddPerson}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={onSubPerson}
        >
          -
        </button>
      </div>
    </>
  );
}
