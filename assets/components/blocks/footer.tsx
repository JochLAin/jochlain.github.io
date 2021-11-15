import React from 'react';
import HexagonGrid from "../hexagon/grid";

export default function Footer() {
    return <footer className="block block-footer">
        <div className="block-hexagon">
            <HexagonGrid />
        </div>
        <small className="copyright">
            JOCELYN FAIHY — 2018 – {new Date().getFullYear()}
        </small>
    </footer>
}
