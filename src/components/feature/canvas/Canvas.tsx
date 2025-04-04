'use client'

import { useRef, useEffect, useState } from 'react'

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const context = canvas.getContext('2d')
    if (context) {
      context.lineCap = 'round'
      context.strokeStyle = '#000000'
      context.lineWidth = 2
      setCtx(context)
    }
  }, [])

  const startDrawing = (e: React.MouseEvent) => {
    if (!ctx) return
    ctx.beginPath()
    ctx.moveTo(e.clientX, e.clientY)
    setIsDrawing(true)
  }

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing || !ctx) return
    ctx.lineTo(e.clientX, e.clientY)
    ctx.stroke()
  }

  const stopDrawing = () => {
    if (!ctx) return
    ctx.closePath()
    setIsDrawing(false)
  }

  return (
    <canvas
      ref={canvasRef}
      className='absolute top-0 left-0'
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
    />
  )
}

export default Canvas
