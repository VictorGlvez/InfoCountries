//Cuando se ejecuta npm start NODE_ENV se establece en development, y cuando se ejecuta npm run build NODE_ENV se establece en production.
// eslint-disable-next-line no-undef
const API_URL = process.env.NODE_ENV === 'production' ? 'https://infocountries-32ap.onrender.com' : 'http://localhost:3000';

export const compareCountries = async (firstCountry, secondCountry) => {
    try {
        const response = await fetch(`${API_URL}/compareCountries`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({firstCountry, secondCountry}),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Data: ', data)
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation: ', error);
    }
};
/*
Esto es pa borrarlo en verdad.

import {ChatOpenAI} from "@langchain/openai";

const apiKey = "no-apikey-provided"

const chatModel = new ChatOpenAI({
    apiKey: apiKey,
    model: "gpt-3.5-turbo"
});

const messages = [
    ({role: "system", content: "Eres un experto sobre de países."})]


export async function compareCountries(firstCountry, secondCountry) {
    messages.push(
        ({role: "human", content:`Quiero que compares ${firstCountry} y ${secondCountry} en función de las siguientes temáticas: política, gastronomía, cultural y turísitca. Quiero que cada comparación me la devuelvas en un párrafo distinto de no más de 600 palabras. No escribas nada más que lo que te pido`}))

    // const answer = await chatModel.invoke(messages).content
   // console.log("Answer: ", answer)
    const answer = "Políticamente, España y Francia tienen sistemas democráticos consolidados. España es una monarquía parlamentaria, mientras que Francia es una república semipresidencialista. Ambos países son miembros de la Unión Europea y comparten similitudes en su sistema de gobierno, aunque difieren en detalles como la organización territorial y la gestión de las autonomías.\n\nHistóricamente, España y Francia tienen legados ricos y complejos. España fue una potencia colonial importante, con vastos territorios en América, África y Asia, mientras que Francia también tuvo un vasto imperio colonial y desempeñó un papel significativo en la historia europea, desde la Revolución Francesa hasta las dos guerras mundiales.\n\nEn cuanto a gastronomía, ambos países son conocidos por su excelente cocina. La gastronomía española se caracteriza por su variedad regional, desde la paella valenciana hasta el jamón ibérico de Andalucía. Por otro lado, la cocina francesa es famosa por su refinamiento y sofisticación, con platos icónicos como el foie gras, el boeuf bourguignon y los macarons.\n\nCulturalmente, España y Francia son cunas de arte, literatura y música. España es conocida por artistas como Picasso, Dalí y Gaudí, así como por sus festivales de flamenco y corridas de toros. Francia, por su parte, ha sido hogar de grandes escritores como Victor Hugo y Marcel Proust, además de ser famosa por su arquitectura, moda y cine.\n\nEn el ámbito turístico, tanto España como Francia son destinos populares a nivel mundial. España atrae a millones de turistas cada año con sus playas, ciudades históricas como Barcelona y Madrid, y sitios culturales como la Alhambra de Granada. Francia, por otro lado, es famosa por la Torre Eiffel, el Louvre, la Riviera Francesa y los viñedos de Burdeos, entre otros atractivos."
    return answer
}

 */
