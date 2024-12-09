'use client'

import { useChat } from 'ai/react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useRef, useEffect, useMemo } from 'react'
import rehypeRaw from 'rehype-raw'

const Chat = () => {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading: chatIsLoading,
  } = useChat({
    api: '/ai/completion',
  })

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (!chatIsLoading) {
        handleSubmit(e)
      }
    }
  }

  const handleInputResize = () => {
    if (textareaRef.current) {
      const newHeight = textareaRef.current.scrollHeight
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(newHeight, 200)}px`
    }
  }

  const saveKeywordsToLocalStorage = (content: string) => {
    const keywordRegex = /\[([^\]]+)\]/g
    const matches = [...content.matchAll(keywordRegex)].map((match) => match[1])

    if (matches.length > 0) {
      const storedKeywords = JSON.parse(
        localStorage.getItem('keywords') || '[]'
      )
      const updatedKeywords = Array.from(
        new Set([...storedKeywords, ...matches])
      )
      localStorage.setItem('keywords', JSON.stringify(updatedKeywords))
    }
  }

  const renderContent = useMemo(() => {
    return (content: string) => {
      saveKeywordsToLocalStorage(content)

      const codeBlockRegex = /```(\w+)?\n([\s\S]+?)\n```/g
      const parts = content.split(codeBlockRegex)

      return parts.map((part, index) => (
        <ReactMarkdown
          key={index}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {part}
        </ReactMarkdown>
      ))
    }
  }, [])

  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  return (
    <div className="flex flex-col h-screen bg-secondary pt-20">
      <div className="flex-grow overflow-y-auto p-4 px-20 space-y-5">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`p-3 rounded-md ${
              m.role === 'user'
                ? 'bg-muted text-right'
                : 'bg-secondary text-foreground'
            } w-fit max-w-[50vw] result ${m.role === 'user' ? 'ml-auto' : ''}`}
          >
            {chatIsLoading &&
            m.role !== 'user' &&
            m.id === messages[messages.length - 1]?.id ? (
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 bg-muted rounded-full animate-pulse"></div>
                <div className="w-2.5 h-2.5 bg-muted rounded-full animate-pulse delay-100"></div>
                <div className="w-2.5 h-2.5 bg-muted rounded-full animate-pulse delay-200"></div>
              </div>
            ) : (
              renderContent(m.content)
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="px-5 py-5 flex gap-2 justify-center">
        <Textarea
          ref={textareaRef}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onInput={handleInputResize}
          placeholder="Type your message..."
          rows={1}
          className="resize-none w-full text-foreground bg-secondary border-muted focus:ring-2 focus:ring-primary"
        />
        <Button
          className={chatIsLoading ? 'bg-muted' : ''}
          onClick={handleSubmit}
        >
          Send
        </Button>
      </div>
    </div>
  )
}

export default Chat
