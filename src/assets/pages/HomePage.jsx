import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { Clients } from '../components/Clients/Clients'
import { Helping } from '../components/Helping/Helping'
import { How } from '../components/How/How'
import { MeetCustomers } from '../components/MeetCustomers/MeetCustomers'
import { Caring } from '../components/Caring/Caring'
import { CallToAction } from '../components/CallToAction'

export const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Clients/>
        <Helping/>
        <How/>
        <MeetCustomers/>
        <Caring/>
        <CallToAction/>
    </div>
  )
}
