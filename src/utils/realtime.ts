export function connectRealtime(onMessage){
  const url = (process.env.NEXT_PUBLIC_WS_URL) || 'ws://localhost:4001'
  const ws = new WebSocket(url)
  ws.onopen = () => console.log('Realtime connected')
  ws.onmessage = (ev) => {
    try { const msg = JSON.parse(ev.data); onMessage(msg) } catch(e){}
  }
  ws.onclose = () => console.log('Realtime disconnected')
  return ws
}

export function sendPointer(payload){
  try {
    const ws = (window.__realtimeSocket)
    if (ws && ws.readyState === WebSocket.OPEN){
      ws.send(JSON.stringify({ type: 'pointer', data: payload }))
    } else {
      // establish quick connection and store
      window.__realtimeSocket = new WebSocket((process.env.NEXT_PUBLIC_WS_URL)||'ws://localhost:4001')
      window.__realtimeSocket.onopen = () => window.__realtimeSocket.send(JSON.stringify({ type: 'pointer', data: payload }))
    }
  } catch(e){ console.warn('realtime send failed', e) }
}
