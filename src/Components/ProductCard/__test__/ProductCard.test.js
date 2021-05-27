import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ProductCard, { getID } from './../ProductCard'


it("Render's a name", () => {
    const { getByTestId } = render(<ProductCard id={1} name="pokemon" url="https://pokeapi.co/api/v2/pokemon-species/1/"/>);
    expect(getByTestId("productCard")).toHaveTextContent("pokemon")
    // expect(getByTestId("productCard")).to
})

it("Redirects a user", () => {
    const { getByTestId } = render(<ProductCard id={1} name="pokemon" url="https://pokeapi.co/api/v2/pokemon-species/1/"/>)
})

it(" can get numbers from a URL", () => {
    expect(getID("https://pokeapi.co/api/v2/pokemon/1/")).toBe("1")
    expect(getID("https://pokeapi.co/api/v2/pokemon/20/")).toBe("20")
    expect(getID("https://pokeapi.co/api/v2/pokemon/300/")).toBe("300")
    expect(getID("https://pokeapi.co/api/v2/pokemon/8823/")).toBe("8823")
})

// it("Render a image,", () => {
//     const { getByTestId } = render(<ProductCard url="https://pokeapi.co/api/v2/pokemon-species/1/"/>);
//     expect(getByTestId("productCard"))
//     const image = screen.
//     expect(image).toHaveAttribute('src', 'https://pokeres.bastionbot.org/images/pokemon/1.png')

// })
