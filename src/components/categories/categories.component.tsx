import { useEffect, useState } from 'react'
import axios from 'axios'

// Styles
import './categories.styles.css'

// Utilities
import Category from '../../types/category.types'
import env from '../../config/env.config'

const Categories = () => {

    const [categories, setCategories] = useState<Category[]>([])

    //console.log({categories})

    const fetchCategories = async () => {
        try {
            const {data} = await axios.get(`${env.apiUrl}/api/category`)
            console.log({data})
            setCategories(data)

        } catch (error) {
            console.log({error})
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <div className="categories-container">
            <div className="categories-content">
                {/* {categories.map(category => <CategoryIntem />)} */}
            </div>
        </div>
    )
}

export default Categories