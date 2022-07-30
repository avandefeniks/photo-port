import React from "react";
import PhotoList from "../PhotoList";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery({ currentCategory }) {
    const { name, description } = currentCategory;
    // const currentCategory = {
    //     name: "commercial",
    //     description: "Photos of grocery stores, food trucks, and other commercial projects",
    // };
    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    );
}

export default Gallery;