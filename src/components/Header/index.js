import { TitleHeader, Foto } from './styled'


export const Header = (props) => {
    const { nome, foto } = props.login
    return (

        <TitleHeader>
            Insta4
            <Foto src={foto} />
            <h4> {nome}</h4>


        </TitleHeader>

    )
}