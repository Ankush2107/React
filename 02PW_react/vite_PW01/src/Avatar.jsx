function Avatar({ src, height, width, childern}) {
    return (
        <>
            <img src={src} width={width} height={height} />
            {childern}
        </>
    )
}

export default Avatar;