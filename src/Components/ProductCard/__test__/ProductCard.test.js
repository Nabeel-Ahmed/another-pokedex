import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ProductCard from './../ProductCard'


it("Renders name correctly", () => {
    const { getByTestId } = render(<ProductCard name="pokemon" url="https://pokeapi.co/api/v2/pokemon-species/1/"/>);
    expect(getByTestId("productCard")).toHaveTextContent("pokemon")
    expect(getByTestId("productCard")).to
})