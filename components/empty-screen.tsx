import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Explain technical concepts',
    message: `What is a "serverless function"?`
  },
  {
    heading: 'Summarize an article',
    message: 'Summarize the following article for a 2nd grader: \n'
  },
  {
    heading: 'Draft an email',
    message: `Draft an email to my boss about the following: \n`
  }
]

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Hi!  I&apos;m MIBRA, <br />
          <br />  
          Marauda&apos;s Intelligent Business Requirements Analyst.
        </h1>
        <br />
        <p className="leading-normal text-muted-foreground">
        My purpose is to help you to map out an overview of your business as
          it currently exists and functions, so the Maruda Team can create a
          tailored solution to automate the mundane tasks in your business so you can focus on the enjoyable parts of your business and achieve your business goals.
        </p>
        <br />
        <p className="leading-normal text-muted-foreground">
        To get started, choose your level of technical knowledge and experience so i can tailor my questions to your level of understanding.
        </p>
      </div>
    </div>
  )
}
