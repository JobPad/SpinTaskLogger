import * as React from 'react';
import AccordionCard from './accordionCard'


export default function SimpleAccordion({data}) {
  return (
      <div>
        {data.map(x => <AccordionCard cardData = {x} key={x.key}></AccordionCard>  )}
    </div>
  );
}
