import React from 'react'
import MainCard from '../MainCard/MainCard'
import CommonCard from '../CommonCard/CommonCard'
import CardAboutMe from '../CardAboutMe/CardAboutMe'
import CardSkills from '../CardSkills/CardSkills'
import CardSocialContect from '../ProjectsCompleted/ProjectsCompleted'
import ExtraCard from '../CupOfCoffee/CupOfCoffee'

export default function Content() {

    return (
        <div>
            <MainCard id={'home'}/>
            <CardAboutMe id={'person'}/>
            <CardSkills id={'apps'}/>
            <CardSocialContect id={'call'}/>
            {/* <ExtraCard/> */}
        </div>
    )
}