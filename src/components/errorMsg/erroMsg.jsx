import { StyledErrorMsg } from "./errorMsgStyles"

function ErrorMsg({children}) {
    return (
            <StyledErrorMsg>{children}</StyledErrorMsg>
    )
}

export { ErrorMsg }