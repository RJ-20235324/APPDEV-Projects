import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "Japan", "Monaco", "New Jersey"];

  return (
    <>
      <h1>KeyTech.Co</h1>
      {items.length === 0 ? <p>No item Found</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item active"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
