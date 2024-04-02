import { FunctionComponent } from 'react'

// Utilities
import Category from "../../types/category.types"

// Styles
import './category-item.styles.css'

interface CategoryItemProps {
    category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
    return (
        <div className="category-item-container"
            style={{ backgroundImage: `url(${category.image})`}}>
            <div className="category-name">
                <p>{category.category}</p>
                <p>Explorar</p>
            </div>
        </div>
    )
}

export default CategoryItem