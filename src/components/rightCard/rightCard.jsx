import image from '../../assets/illustration-sign-up-desktop.svg'
import { StyledImage, StyledDiv } from './rightCardStyles'

function RightCard(){
    return (
        <StyledDiv>
            <StyledImage src={image} />
        </StyledDiv>
        
    )
}

export { RightCard }