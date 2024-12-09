import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Tooltips = ({ children, text }: { children: React.ReactNode, text: string }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          {text}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default Tooltips
