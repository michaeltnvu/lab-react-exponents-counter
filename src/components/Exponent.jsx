const Exponent = ({ count, exponent }) => {
  const expression = (base, exponent) => {
    let result = "";
    for (let i = 0; i < exponent; i++) {
      result += i > 0 ? " * " : "";
      result += base;
    }
    return result;
  };

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {count}
        <sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {expression(count, exponent)} ={" "}
        <span className="total">{count ** exponent}</span>
      </p>
    </div>
  );
};

export default Exponent;
