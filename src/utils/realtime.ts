
type MessageHandler = (msg: any) => void

declare global {
  interface Window {
    __realtimeSocket?: WebSocket
  }
}

export function connectRealtime(onMessage: MessageHandler) {
  const url = process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:4001'
  const ws = new WebSocket(url)

  ws.onopen = () => console.log('Realtime connected')
  ws.onmessage = (ev: MessageEvent) => {
    try {
      const msg = JSON.parse(ev.data)
      onMessage(msg)
    } catch (e) {
      console.warn('Failed to parse message', e)
    }
  }
  ws.onclose = () => console.log('Realtime disconnected')
  return ws
}

export function sendPointer(payload: any) {
  try {
    let ws = window.__realtimeSocket

    if (ws && ws.readyState === WebSocket.OPEN) {
      // ws is defined and open
      ws.send(JSON.stringify({ type: 'pointer', data: payload }))
    } else {
      // establish quick connection and store
      const newWs = new WebSocket(process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:4001')

      newWs.onopen = () => {
        newWs.send(JSON.stringify({ type: 'pointer', data: payload }))
      }

      window.__realtimeSocket = newWs
    }
  } catch (e) {
    console.warn('realtime send failed', e)
  }
}

