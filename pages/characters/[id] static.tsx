import { Character, GetCharacterResults } from "../../types";
import Image from "next/image"
import imageLoader from "../../imageLoader";
const CharacterPage = ({character}:{character:Character})=>{
    
    return (
    <div>
        <h1>Character Page</h1>
        <h3>{character.name}</h3>
        <Image 
            loader={imageLoader} unoptimized
            src = {character.image}
            alt = {character.name}
            width = "200px"
            height = "200px"
        />
    </div>)
}

export async function getStaticPaths(){
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const {results}: GetCharacterResults = await res.json();

    return{
        paths: results.map((character)=>{
            return {params:{ id: String(character.id)}};
        }),
        fallback:false,
    }
}

export async function getStaticProps({ params }: {params:{id: string}}){
    const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
    const character = await res.json()
    return {
        props:{character}
    }
}

export default CharacterPage;