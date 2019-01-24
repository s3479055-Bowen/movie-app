import React from 'react';
import {Image} from "semantic-ui-react";

const src = '/image.png'

const SmallImageList = () => (
    <Image.Group size='small'>
        <Image src={src}/>
        <Image src={src}/>
        <Image src={src}/>
        <Image src={src}/>
        <Image src={src}/>
        <Image src={src}/>
        <Image src={src}/>
    </Image.Group>
)

export default SmallImageList