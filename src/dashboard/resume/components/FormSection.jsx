import React from 'react'
import PersonalDetails from './forms/PersonalDetails'
import { Button } from '@/components/ui/Button'
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react'
import { useState } from 'react'


function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false)


  return (
    <div>
      <div className='flex justify-between items-center'>
        <Button variant="outline" size="sm"
          className="flex gap-2"><LayoutGrid />
          Theme</Button>
        <div className='flex gap-2'>
          {activeFormIndex > 1
            && <Button size="sm"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}> <ArrowLeft />
            </Button>}
            
           <Button
            disabled={!enableNext}
             className="flex gap-2" size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
          > Next
            <ArrowRight /> </Button>
        </div>
      </div>
      

      {/*Personal Details */}
      {activeFormIndex == 1 ? <PersonalDetails enabledNext={(v)=>setEnableNext(v)} />
        : null}

      {/*Summery */}

      {/*Educational Details */}

      {/*Skills */}


    </div>
  )
}

export default FormSection