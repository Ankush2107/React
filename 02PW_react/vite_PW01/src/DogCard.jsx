import Image from './Image'

import Name from './Name';

const DogCard = (props) => {
    let title = "This is a dog card"
    return (
        <>
            <h1>{title}</h1>
            <Name>
                <h1> {props.name} </h1>
            </Name>
            <Image src={props.src}/>
        </>
    )
} 

export default DogCard;