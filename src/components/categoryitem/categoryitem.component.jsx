import "./categoryitem.component.styles.scss"
const CategoryItem=({category}) =>{

    const{imageUrl, title, id} =category;
    return (

        <div key={id} className="category-container">
            <div className="category-image" style={{
                backgroundImage: `url(${imageUrl})`
                }}/>

                <div className="category-body-container">
                <h2>{title}</h2>
                <h3>Shop Now</h3>
                </div>
        </div>
    );
};

export default CategoryItem;