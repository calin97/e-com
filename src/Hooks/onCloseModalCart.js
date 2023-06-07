import { useEffect, useRef, useCallback } from 'react'

export const useOutsideClick = (callback) => {
    const ref = useRef(null)
    const handleClick = useCallback((event) => {
        const target = event.target
        const targetAsNode = target
        if (
            ref.current &&
            !ref.current.contains(targetAsNode) &&
            !targetAsNode.classList.contains('clickOutsideIgnore')
        ) {
            callback()
        }
    }, [])

    useEffect(() => {
        // () => Debounce so the click activating the modal will not trigger click outside
        setTimeout(() => {
            document.addEventListener('mousedown', handleClick)
        }, 10)

        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, [ref])

    return ref
}