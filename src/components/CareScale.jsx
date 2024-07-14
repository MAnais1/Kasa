import "../sass/CareScale.scss";
function CareScale(props) {
  const scaleValue = props.scaleValue;
  const range = [1, 2, 3, 4, 5];
  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span className="red" key={rangeElem.toString()}>
            <i  className="fa-solid fa-star "></i>
          </span>
        ) : (
            <span className="gray" key={rangeElem.toString()}>
              <i  className="fa-solid fa-star "></i>
            </span>
          )
      )}
    </div>
  );
}

export default CareScale;
