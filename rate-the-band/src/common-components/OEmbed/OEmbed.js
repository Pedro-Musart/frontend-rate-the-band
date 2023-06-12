import { useOEmbed } from "../../hooks/useOEmbed";


export function OEmbed({id}){

const ide = 273199362
const {album, isLoading} = useOEmbed(ide);
console.log (album)
    return(
        <>
        {/* <div className="container">
        {!isLoading && (
            <>
            <div dangerouslySetInnerHTML={{ __html: album.html }}></div>
            </>
        )}
        </div> */}
        </>
    );
} 