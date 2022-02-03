export const Navbar = (props) => {
    return (
        <div className="navbar_container">
            <nav className="navbar" id="navbar">
                <span className="title">Portfolio</span>
                <div className="links">
                    <button>Home</button>
                    <span>    </span>
                    <button onClick={props.handleOverviewClick}>Overview</button>
                    <span>    </span>
                    <button onClick={props.handleContactClick}>Contact</button>
                </div>
            </nav>
        </div>
    );
} 
