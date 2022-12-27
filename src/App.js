import { getByTitle } from "@testing-library/react";
import "./categories.styles.scss";

function App() {

  const categories = [
     {
      id   : 1,
      title: 'HATS'
     },
     {
      id   : 2,
      title: 'JACKETS'
     },
     {
      id   : 3,
      title: 'SNEAKERS'
     },
     {
      id   : 4,
      title: 'WOMENS'
     },
     {
      id   : 5,
      title: 'MENS'
     }
  ]
  return (
    <div className="categories-container">
      {
      categories.map((eachCategory)=>
                      <div className="category-container">
                        <div className="category-image"/>
                        <div className="category-body-container">
                          <h2>{eachCategory.title}</h2>
                          <h3>Shop Now</h3>
                        </div>
                      </div>
                    )
      }
    </div>
  );
}

export default App;
