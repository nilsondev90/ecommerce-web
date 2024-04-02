import Categories from "../components/categories/categories.component"
import Header from "../components/header/header.component"

const HomePage = () => {
    return (
        <div style={{ height: '100%' }}>
            <Header />
            <Categories />
        </div>
    )
}

export default HomePage