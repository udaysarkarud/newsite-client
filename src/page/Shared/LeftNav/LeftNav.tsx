import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>All Caterogy</h1>
      <ListGroup className="ps-4 ">
        {categories.length >= 0 &&
          categories.map((categorie) => {
            return (
              <ListGroup.Item key={categorie.id}>
                <Link
                  to={`/categorie/${categorie.id}`}
                  className="text-decoration-none text-black"
                >
                  {categorie.name}
                </Link>
              </ListGroup.Item>
            );
          })}
      </ListGroup>
    </div>
  );
};

export default LeftNav;
