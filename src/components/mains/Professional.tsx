import {Desc, Lists, StyledMain, StyledUl} from '../Styles.ts'

export default function Professional() {
    return (
        <StyledMain>
            <StyledUl>
                <Lists> Camp Counselor | Boys and Girls Club of Dorchester
                    <Desc> Helped to supervise campers and assisted supervisors of the summer camp
                        program </Desc>
                </Lists>
                <Lists> CS Operator | UMB CS Department
                    <Desc> Resolved I.T. request tickets on the department website </Desc>
                </Lists>
                <Lists> Office Assistant | Boston Residents Life
                    <Desc> Handled spare key sign-outs and assisting in office duties </Desc>
                </Lists>
            </StyledUl>
        </StyledMain>

    )
}