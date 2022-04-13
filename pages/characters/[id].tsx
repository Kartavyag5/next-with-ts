import { Character, GetCharacterResults } from "../../types";
import Image from "next/image"
import imageLoader from "../../imageLoader";
import { GetServerSideProps } from "next";
import Layout from "../../components/Layout";
import styles from "../../styles/Character.module.css";

const CharacterPage = ({character}:{character:Character})=>{
    return (
        <>
            <div className={styles.container}>
                <div>
                    <Image
                        loader={imageLoader} unoptimized
                        src = {character.image}
                        alt = {character.name}
                        width = "500px"
                        height = "500px"
                        layout = "fixed"
                        className={styles.imageDetails}
                    />
                </div>
                <h2 className={styles.container}>{character.name}</h2>
            </div>
        </>
    )
}

CharacterPage.getLayout = function getLayout(page: typeof CharacterPage){
    return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async (context)=>{

    const res = await fetch(`https://rickandmortyapi.com/api/character/${context.query.id}`);
    const character = await res.json()
    return {
        props:{character}
    }
}



export default CharacterPage;