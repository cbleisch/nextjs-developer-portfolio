import { ToolboxIcon } from '@/configs/icons'
import React from 'react'
import DevIcon from '@/components/DevIcon'
import { devIcons } from '@/configs/dev-icons'

const TechSection = () => {
  return (
    <section className="w-full h-screen bg-cover bg-center" id={'skills-section'}>
       <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <span className="flex items-center mb-8">
            <div className="bg-back-subtle p-2 mr-4 rounded-full">
              <ToolboxIcon />
            </div>
            <h4 className="text-xl text-accent font-semibold underline decoration-rose-300 underline-offset-4">Skills</h4>
          </span>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {devIcons.map(icon => (
              <DevIcon name={icon.name} iconName={icon.iconName} key={icon.name} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TechSection
