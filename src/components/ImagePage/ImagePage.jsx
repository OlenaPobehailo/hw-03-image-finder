import { ImageGallery } from "components/ImageGallery/ImageGallery"
import data from "../../data/data.json"

export const ImagePage=()=>{

    return(
        <>
        <ImageGallery images={data}/>
        {/* <Button/> */}
        </>
    )
}