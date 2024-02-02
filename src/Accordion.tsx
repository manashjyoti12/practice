import { useState } from "react";

interface AccordionItem{
    title: string,
    content: string
}

const Accordion = () => {
    const  [openIndex,  setOpenIndex]  = useState<number | null>(null)

const items: AccordionItem[] = [
  { title: 'Section 1', content: 'Content for section 1' },
  { title: 'Section 2', content: 'Content for section 2' },
  { title: 'Section 3', content: 'Content for section 3' }
    ];

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    
  return (
      <div>
          {items.map((item,index) => (
              <div key={index}>
                <div onClick={()=>toggle(index)}>
                    {item.title}
                </div>
                {
                      openIndex === index && (
                    <div>
                        {item.content}    
                    </div>
                    )
                }
              </div>
          ))}
    </div>
  )
}

export default Accordion