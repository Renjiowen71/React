import { useExProviderContext } from "../providers/ExProvider";
function ExConsumer(){
    const {exData} = useExProviderContext();
    return (
        <>
            <h1>{exData.title}</h1>
            <h2>{exData.body}</h2>
        </>
    )
}

export default ExConsumer;