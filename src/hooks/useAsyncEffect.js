import { useEffect } from 'react'

export function useAsyncEffect(effect, deps) {
  useEffect(() => {
    effect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
