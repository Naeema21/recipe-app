import { Link, Outlet } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className="header mb-3 ">
                <div className="container d-flex justify-content-between flex-wrap align-items-center">
                    <Link to="/" className="head-title">
                        Yummiz
                    </Link>
                    <Link to="/add-recipe" className="add">
                        Add Recipe
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar