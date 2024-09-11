import React, { useRef, useEffect } from 'react';

export default function Header() {
    // Create refs for the elements
    const navToggleRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const navToggle = navToggleRef.current;
        const links = linksRef.current;

        const handleToggleClick = () => {
            if (links.classList.contains('show-links')) {
                links.classList.remove('show-links');
            } else {
                links.classList.add('show-links');
            }
        };

        if (navToggle) {
            navToggle.addEventListener('click', handleToggleClick);
        }

        // Cleanup event listener on component unmount
        return () => {
            if (navToggle) {
                navToggle.removeEventListener('click', handleToggleClick);
            }
        };
    }, []);

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img className="web_logo" src="src/assets/Royal Horizons Logo.png" alt="Logo" />
                    <button className="nav-toggle" ref={navToggleRef}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <ul className="links" ref={linksRef}>
                    <li><a href="APPDEV-Sandbox/Counter/index.html">Counter</a></li>
                    <li><a href="APPDEV-Sandbox/Color Picker/index.html">Color Picker</a></li>
                    <li><a href="APPDEV-Sandbox/Quote Picker/index.html">Quotes Generator</a></li>
                </ul>
                <ul className="social-icons">
                    <li><a href="https://github.com/RJ-20235324"><i className="fab fa-github"></i></a></li>
                    <li><a href="https://www.facebook.com/rj.salcedo.1"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="https://behance.com"><i className="fab fa-behance"></i></a></li>
                    <li><a href="https://linkedin.com"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="https://sketch.com"><i className="fab fa-sketch"></i></a></li>
                </ul>
            </div>
        </nav>
    );
}
