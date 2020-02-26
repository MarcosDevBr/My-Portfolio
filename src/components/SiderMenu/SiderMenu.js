import React, {useState} from 'react'
import Picture from '../Picture/Picture'
import BigText from '../BigText/BigText'
import SubTitleText from '../SubTitleText/SubTitleText'
import IconPlusText from '../IconPlusText/IconPlusText'
import SocialButton from '../SocialButton/SocialButton'
import { ContainerSocialButton } from './styles'




export default function SiderMenu() {

    const [itemDoMenuSelecionado, setItemDoMenuSelecionado] = useState('')

    function alterarItemAtual(nomeDoMenu) {
        setItemDoMenuSelecionado(nomeDoMenu)
    }

    return (
        <div>
            <Picture />
            <BigText text={'Marcos Dev'} />
            <SubTitleText text={'Web developer'} />
            <IconPlusText 
                text={'Home'} 
                icon={'home'} 
                extraMargin 
                onCebolinha={alterarItemAtual}
                activeMenuItem={itemDoMenuSelecionado}
            />
            <IconPlusText 
                text={'Sobre'} 
                icon={'person'} 
                onCebolinha={alterarItemAtual}
                activeMenuItem={itemDoMenuSelecionado}

            /> 
            <IconPlusText 
                text={'Projetos'} 
                icon={'apps'} 
                onCebolinha={alterarItemAtual}
                activeMenuItem={itemDoMenuSelecionado}
            />
            <IconPlusText 
                text={'Contato'} 
                icon={'call'} 
                onCebolinha={alterarItemAtual}
                activeMenuItem={itemDoMenuSelecionado}
            />
        
        <ContainerSocialButton>   
            <SocialButton icon={'logo-facebook'} socialLink={'https://www.facebook.com/marcosaugustorrodrigues'}/>
            <SocialButton icon={'logo-twitter'} socialLink={'https://twitter.com/MarcosA19093990'}/>
            <SocialButton icon={'logo-instagram'}  socialLink={'https://www.instagram.com/marcos_augusto1041/'}/>
            <SocialButton icon={'logo-linkedin'} socialLink={'https://www.linkedin.com/in/marcos-augusto-rodrigues-74263b197/'}/>
          
        </ContainerSocialButton> 
        
        </div>
    )
}

