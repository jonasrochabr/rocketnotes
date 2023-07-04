import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header(){
    return (
        <Container>
            <Profile>
                <img src="https://github.com/jonasrochabr.png"
                alt="usuário" 
                />

                <div>
                    <span>Welcome</span>
                    <strong>Jonas Rocha</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
    )
}